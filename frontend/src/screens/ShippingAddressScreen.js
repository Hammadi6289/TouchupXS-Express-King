import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import countries from 'react-select-country-list';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [phoneNumber, setPhoneNumber] = useState(
    shippingAddress.phoneNumber || ''
  );
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );
  const [city, setCity] = useState(shippingAddress.city || '');
  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping');
    }
  }, [userInfo, navigate]);
  const [country, setCountry] = useState(shippingAddress.country || '');
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
        phoneNumber,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
        phoneNumber,
      })
    );
    navigate('/payment');
  };
  return (
    <div>
      <Helmet>
        <title>Checkout</title>
      </Helmet>

      {/* Logo Section */}
      <div className="logo-container" style={{ textAlign: 'center' }}>
        <img
          src="/images/TouchupXSLogo.png"
          alt="Company Logo"
          className="company-logo"
          style={{ width: '300px', height: 'auto' }}
        />
      </div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container">
        <h1 className="my-5" style={{ color: 'rgb(204, 92, 84)' }}>
          1. Enter a new shipping address
        </h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-2" controlId="fullName">
            <Form.Label>
              <strong>Full name (First and Last name)</strong>
            </Form.Label>
            <Form.Control
              style={{ border: '1px solid #000', borderRadius: '5px' }}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="address">
            <Form.Label>
              <strong>Address</strong>
            </Form.Label>
            <Form.Control
              style={{ border: '1px solid #000', borderRadius: '5px' }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="city">
            <Form.Label>
              <strong>City</strong>
            </Form.Label>
            <Form.Control
              style={{ border: '1px solid #000', borderRadius: '5px' }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="postalCode">
            <Form.Label>
              <strong>Postal Code</strong>
            </Form.Label>
            <Form.Control
              style={{ border: '1px solid #000', borderRadius: '5px' }}
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="country">
            <Form.Label>
              <strong>Country/Region</strong>
            </Form.Label>
            <Select
              options={countries().getData()}
              value={{ label: country, value: country }}
              onChange={(selectedOption) => setCountry(selectedOption.value)}
              isSearchable={true}
              placeholder="Select your country"
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="phoneNumber">
            <Form.Label>
              <strong>Phone Number</strong>
            </Form.Label>
            <Form.Control
              style={{ border: '1px solid #000', borderRadius: '5px' }}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>

          <div className="mb-2">
            <Button variant="primary" type="submit">
              Proceed to Checkout
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
