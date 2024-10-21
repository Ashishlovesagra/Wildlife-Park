/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import API from '../services/api'; 
import { toast } from 'react-toastify';
import './Stylee.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '', 
    answer: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/users/register', formData);
      setSuccess(true);
      toast.success('Login successfully');
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
      setSuccess(false);
      toast.error(error);
    }
  };

  return (
    <Container className='mt-2'>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className='text-center mb-4'>Register</h2>
          {success && <p className="text-success">Registration Successful!</p>}
          {error && <p className="text-danger">{error}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername" className="mt-3 d-flex">
              <Form.Label className='email-label'>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-4 d-flex">
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
              <Form.Label className='email-label'>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mt-4 d-flex">
              <Form.Label className='email-label'>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber" 
                placeholder="Enter phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAnswer" className="mt-4">
              <Form.Label>What is your pet name ?</Form.Label>
              <Form.Control
                type="text"
                name="answer"
                placeholder="Answer for recovery"
                value={formData.answer}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Register
            </Button>
            
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
