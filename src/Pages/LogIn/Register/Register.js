import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Register.css';




const Register = () => {
const [error, setError] = useState('');
  const {cerateUser} = useContext(AuthContext);

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,photoURL,password);

    cerateUser(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setError('');
      form.reset();
    })
  .catch(error =>{
    console.error(error)
    setError(error.message)
  })
    
  }
  
    return (
        <Form onSubmit={handleSubmit} className='form-container'>
      <Form.Group className="mb-3">
        <Form.Label  className='form-text'>Full Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label  className='form-text'>Your PhotoURL</Form.Label>
        <Form.Control name='photoURL' type="text" placeholder="Your PhotoURL" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label  className='form-text'>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label  className='form-text'>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Check className='form-text' type="checkbox" label="Check me out" />
        <p>Do not have an account ? <Link to='/login'>Create an account.</Link></p>
      </Form.Group>
      <Button className='form-btn' variant="primary" type="submit">
        Register
      </Button>
      <Form.Group className="mb-3 text-danger" >
        {error}
      </Form.Group>
      
    </Form>
    );
};

export default Register;