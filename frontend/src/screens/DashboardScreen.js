import React, { useContext, useEffect, useReducer } from "react";
import Chart from "react-google-charts";
import axios from "axios";
import { Store } from "../Store";
import { getError } from "../utils";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-reveal";
import Card from "react-bootstrap/Card";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        summary: action.payload,
        loading: false,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function DashboardScreen() {
  const [{ loading, summary, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/orders/summary", {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [userInfo]);

  const chartOptions = {
    margin: " 0 auto", // Add this line to center the chart
    // your existing options...
    colors: [
      "#FF5733",
      "#FFC300",
      "#33FF57",
      "#3355FF",
      "#FF33A1",
      "#33FFEC",
      "#FF5733",
      "#FFC300",
      "#33FF57",
      "#3355FF",
      "#FF33A1",
      "#33FFEC",
      "#FF5733",
      "#FFC300",
      "#33FF57",
      "#3355FF",
      "#FF33A1",
      "#33FFEC",
      "#FF5733",
      "#FFC300",
      "#33FF57",
      "#3355FF",
      "#FF33A1",
      "#33FFEC",
      "#FF5733",
      "#FFC300",
      "#33FF57",
      "#3355FF",
      "#FF33A1",
    ],
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Dashboard</h1>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <div className="mb-4">
            <Row>
              <Col md={4}>
                <Card className="custom-card">
                  <Card.Body>
                    <Card.Title className="font-weight-bold">
                      {summary.users && summary.users[0]
                        ? summary.users[0].numUsers
                        : 0}
                    </Card.Title>
                    <Card.Text className="text-muted">Users</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="custom-card">
                  <Card.Body>
                    <Card.Title className="font-weight-bold">
                      {summary.orders && summary.orders[0]
                        ? summary.orders[0].numOrders
                        : 0}
                    </Card.Title>
                    <Card.Text className="text-muted">Orders Shipped</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="custom-card">
                  <Card.Body>
                    <Card.Title className="font-weight-bold">
                      $
                      {summary.orders && summary.orders[0]
                        ? summary.orders[0].totalSales.toFixed(2)
                        : 0}
                    </Card.Title>
                    <Card.Text className="text-muted">Revenue</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          <div className="my-4">
            <h2 className="text-left">Overview</h2>
            {summary.dailyOrders.length === 0 ? (
              <MessageBox>No Sale</MessageBox>
            ) : (
              <Fade bottom>
                <Chart
                  width="100%"
                  height="400px"
                  chartType="AreaChart"
                  loader={<div>Loading Chart...</div>}
                  options={
                    {
                      // Customize chart options as needed
                      // Example: { title: 'Daily Sales', legend: 'none', colors: ['#4285F4'] }
                    }
                  }
                  data={[
                    ["Date", "Sales", { role: "style" }],
                    ...summary.dailyOrders.map((x) => [
                      x._id,
                      x.sales,
                      "color: #4285F4",
                    ]),
                  ]}
                />
              </Fade>
            )}
          </div>

          <div className="my-4">
            <h2 className="text-left">Sales by Categories</h2>
            {summary.productCategories.length === 0 ? (
              <MessageBox>No Category</MessageBox>
            ) : (
              <Fade bottom>
                <Chart
                  width="100%"
                  height="420px"
                  chartType="PieChart"
                  loader={<div>Loading Chart...</div>}
                  options={
                    {
                      // Customize chart options as needed
                      // Example: { title: 'Sales by Categories', pieSliceText: 'value', colors: ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'] }
                    }
                  }
                  data={[
                    ["Category", "Products"],
                    ...summary.productCategories.map((x) => [x._id, x.count]),
                  ]}
                />
              </Fade>
            )}
          </div>
        </>
      )}
    </div>
  );
}
