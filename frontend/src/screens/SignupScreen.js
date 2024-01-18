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

export default function SignupScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const { data } = await Axios.post('/api/users/signup', {
        name,
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
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
        <title>Sign Up</title>
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
      <h2 className="my-3">Create account</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-2" controlId="name">
          <Form.Label>
            <strong>Name</strong>
          </Form.Label>
          <Form.Control
            style={{
              width: '500px',
              border: '1px solid #000',
              borderRadius: '5px',
            }}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="email">
          <Form.Label>
            <strong>EMail</strong>
          </Form.Label>
          <Form.Control
            type="email"
            required
            style={{
              width: '500px',
              border: '1px solid #000',
              borderRadius: '5px',
            }}
            onChange={(e) => setEmail(e.target.value)}
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
          <Form.Group className="mb-2" controlId="confirmPassword">
            <Form.Label>
              <strong>Confirm Password</strong>
            </Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{
                width: '500px',
                border: '1px solid #000',
                borderRadius: '5px',
              }}
            />
          </Form.Group>
        </Form.Group>
        <div className="mb-2">
          <Button type="submit">Sign Up</Button>
        </div>
        <div>
          <span>Already have an account?</span>
          <div className="mb-2 d-flex justify-content-center">
            <Link to={`/signin?redirect=${redirect}`}>Sign-In Here</Link>
          </div>
        </div>
      </Form>
    </Container>
  );
}
