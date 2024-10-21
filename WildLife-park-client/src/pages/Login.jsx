/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import API from '../services/api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './Stylee.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/users/login', formData);
      const newToken = response.data.token;
      setToken(newToken);
      localStorage.setItem('token', newToken);
      setError('');
      toast.success('Login successfully');
    } catch (err) {
      setError(err.response.data.message || 'Login failed.');
      toast.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setToken('');
    toast.success('Logged out successfully');
  };

  return (
    <Container className='mt-5'>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className='text-center mb-4'>Login</h2>
          {token && <p className="text-success">You are logged in!</p>}
          {error && <p className="text-danger">{error}</p>}
          {!token ? (
            <Form onSubmit={handleSubmit} >
              <Form.Group controlId="formEmail" className="mt-3 d-flex">
                <Form.Label className='email-label'>Email </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-4 d-flex">
                <Form.Label className='email-label'>Password </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-sm-between mt-4 display">
              <Button variant="primary" type="submit" className="">
                Login
              </Button>
              <h3><Link to="/forgot-password" className='link'>Forgot Password</Link></h3>
              </div>
            </Form>
          ) : (
            <Button variant="danger" onClick={handleLogout} className="mt-4">
              Logout
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
