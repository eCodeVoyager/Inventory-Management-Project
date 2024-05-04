import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function Orders() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    // Fetch user data from server
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        setFormData(data);
      });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleMenuClick = (path) => {
    navigate(path);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to server
  }

  return (
    <div id="Orders">
      <NavBar />
      <Container fluid>
        <Row>
          <Col md={3}  className="left-menu">
            <ul>
            <li><Link to="/profile">User Information</Link></li>
            <li><Link to="/address">Address</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/">Logout</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Orders;