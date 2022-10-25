import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css';

const Register = () => {
    return (
        <Form className='form-container'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='form-text'>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='form-text'>Your PhotoURL</Form.Label>
        <Form.Control type="text" placeholder="Your PhotoURL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='form-text'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='form-text'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className='form-text' type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='form-btn' variant="primary" type="submit">
        Register
      </Button>
    </Form>
    );
};

export default Register;