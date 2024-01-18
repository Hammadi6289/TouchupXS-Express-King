import React, { useContext, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };

    default:
      return state;
  }
};

export default function ProfileScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
    loadingUpdate: false,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        '/api/users/profile',
        {
          name,
          email,
          password,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('User updated successfully');
    } catch (err) {
      dispatch({
        type: 'FETCH_FAIL',
      });
      toast.error(getError(err));
    }
  };

  return (
    <div className="container small-container">
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      <div className="logo-container" style={{ textAlign: 'center' }}>
        <img
          src="/images/TouchupXSLogo.png"
          alt="Company Logo"
          className="company-logo"
          style={{ width: '300px', height: 'auto' }}
        />
      </div>
      <h2 className="my-3">User Profile</h2>
      <form onSubmit={submitHandler}>
        <Form.Group className="mb-2" controlId="name">
          <Form.Label>
            <strong>Name</strong>
          </Form.Label>
          <Form.Control
            value={name}
            style={{
              width: '500px',
              border: '1px solid #000',
              borderRadius: '5px',
            }}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="name">
          <Form.Label>
            <strong>Email</strong>
          </Form.Label>
          <Form.Control
            type="email"
            value={email}
            style={{
              width: '500px',
              border: '1px solid #000',
              borderRadius: '5px',
            }}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>
            <strong>Password</strong>
          </Form.Label>
          <Form.Control
            type="password"
            style={{
              width: '500px',
              border: '1px solid #000',
              borderRadius: '5px',
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>
            <strong>Confirm Password</strong>
          </Form.Label>
          <Form.Control
            type="password"
            style={{
              width: '500px',
              border: '1px solid #000',
              borderRadius: '5px',
            }}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Update</Button>
        </div>
      </form>
    </div>
  );
}
