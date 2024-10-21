/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import API from '../services/api'; 
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Stylee.css';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    token: '',
    newPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/users/reset-password', formData);
      toast.success('Password has been reset successfully!');
      console.log('Reset password response:', response.data);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Reset password failed.');
      toast.error(error);
      console.error('Reset password error:', err);
    }
  };

  return (
    <Container className='mt-5'>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className='text-center mb-4'>Reset Password</h2>
          {error && <p className="text-danger">{error}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formToken" className="mt-3 d-flex">
              <Form.Label className='email-label'>Reset Token</Form.Label>
              <Form.Control
                type="text"
                name="token"
                placeholder="Enter your reset token"
                value={formData.token}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formNewPassword" className="mt-4 d-flex">
              <Form.Label className='email-label'>New Password</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Reset Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
