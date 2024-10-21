/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import API from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Stylee.css';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
    answer: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/users/forgot-password', formData);
      toast.success('Check your email for the reset token!');
      console.log('Forgot password response:', response.data);
      navigate('/reset-password'); 
    } catch (err) {
      setError(err.response?.data?.message || 'Request failed.');
      toast.error(error);
      console.error('Forgot password error:', err);
    }
  };

  return (
    <Container className='mt-5'>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className='text-center mb-4'>Forgot Password</h2>
          {error && <p className="text-danger">{error}</p>}
          <Form onSubmit={handleSubmit}>
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

            <Form.Group controlId="formAnswer" className="mt-4 " >
              <Form.Label >What is your pet name ? </Form.Label>
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
              Send Reset Token
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
