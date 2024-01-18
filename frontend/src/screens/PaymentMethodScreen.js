import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CheckoutSteps from '../components/CheckoutSteps';
import { Store } from '../Store';

export default function PaymentMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod, cartItems },
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || 'PayPal'
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div>
      {/* Logo Section */}
      <div className="logo-container" style={{ textAlign: 'center' }}>
        <img
          src="/images/TouchupXSLogo.png"
          alt="Company Logo"
          className="company-logo"
          style={{ width: '300px', height: 'auto' }}
        />
      </div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <Container fluid>
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <Row>
          <Col md={8}>
            <h2
              className="my-3"
              style={{ color: 'rgb(204, 92, 84)', fontWeight: 'bold' }}
            >
              Choose a payment method{' '}
            </h2>
            <Form onSubmit={submitHandler}>
              <div className="mb-3">
                <Form.Check
                  type="radio"
                  id="PayPal"
                  label="PayPal"
                  value="PayPal"
                  checked={paymentMethodName === 'PayPal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Form.Check
                  type="radio"
                  id="Stripe"
                  label="Stripe"
                  value="Stripe"
                  checked={paymentMethodName === 'Stripe'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Form.Check
                  type="radio"
                  id="VISA / MASTER CARD"
                  label="VISA / MASTER CARD"
                  value="VISA / MASTER CARD"
                  checked={paymentMethodName === 'VISA / MASTER CARD'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Button type="submit">Use this payment method</Button>
              </div>
            </Form>
          </Col>
          <Col md={4}>
            <Container className="mt-3" style={{ textAlign: 'right' }}>
              <h1 style={{ color: 'rgb(204, 92, 84)', fontWeight: 'bold' }}>
                Subtotal{' '}
              </h1>
              <p>
                {cartItems.reduce((a, c) => a + c.quantity, 0)} items: $
                {subtotal}
              </p>
            </Container>
            {/* Line between Choose a payment method and Subtotal */}
            <Col md={1} className="vertical-line" />
            <Col md={7}></Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
