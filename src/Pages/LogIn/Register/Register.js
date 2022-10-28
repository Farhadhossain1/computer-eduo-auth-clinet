import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Register.css';



const Register = () => {
const [error, setError] = useState('');
  const {cerateUser, userProfileUpdate} = useContext(AuthContext);

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
      toast.success('Successfully Login!')
      form.reset();
      handleProfileUpdate(name, photoURL);

    })
  .catch(error =>{
    console.error(error)
    setError(error.message)
  })
  }

  const handleProfileUpdate = (name, photoURL) =>{

    const profile ={
      displayName: name, photoURL : photoURL
    }

    userProfileUpdate(profile);
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
        <Form.Control name='email' type="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label  className='form-text'>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Check type="checkbox" label="Check me out" />
        <p>Do not have an account ? <Link to='/login'><span className='form-text' >Create an account.</span></Link></p>
      </Form.Group>
      <button className='w-100 py-2 bg-primary text-white border-0'>Register</button>
      <Form.Group className="mb-3 text-danger" >
        {error}
      </Form.Group>
      
    </Form>
    );
};

export default Register;