import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';

export default function SigninScreen() {
  const navigate = useNavigate(); //useNavigate coming from react-router-dom
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/'; // '/' default redirect is homescreen also I have to introduce this route signin in App.js
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data)); // In order to save login details in browser
      navigate(redirect || '/'); // Call UseNaviage here.
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
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
      <h2 className="my-3">Sign In</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>
            <strong>Email</strong>
          </Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '500px',
              border: '1px solid #000',
              borderRadius: '5px',
            }}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>
            <strong>Password</strong>
          </Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '500px',
              border: '1px solid #000',
              borderRadius: '5px',
            }}
          />
        </Form.Group>
        <div className="mb-2">
          <Button type="submit">Sign In</Button>
        </div>
        <div>
          <span>New to our Website? </span>
          <div className="mb-2 d-flex justify-content-center">
            <Button
              variant="primary"
              as={Link}
              to={`/signup?redirect=${redirect}`}
              style={{ backgroundColor: '#87CEEB', color: 'black' }}
            >
              <strong>Create your TouchupXS account</strong>
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  );
}
