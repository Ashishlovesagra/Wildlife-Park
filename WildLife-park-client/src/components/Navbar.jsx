/* eslint-disable no-unused-vars */
import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navbar.css';
import Logo from '../assets/Logo.png'


const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="px-3 background">
      <Navbar.Brand as={Link} to="/">
        <img src={Logo} className="logo" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ms-auto">
          <Nav.Link as={Link} className="font-color" to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} className="font-color" to="/">
            Tiger 
          </Nav.Link>
          <Nav.Link as={Link} className="font-color" to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} className="font-color" to="/contact">
            Contact Us
          </Nav.Link>
        </Nav>

        <Form className="d-flex me-3">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success" className="font-color">Search</Button>
        </Form>

        <Nav>
          <Nav.Link as={Link} className="font-color" to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} className="font-color" to="/register">
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
