import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './LogIn.css';





const LogIn = () => {

  const [error,setError] = useState('');

  const {providerLogin ,signIn} = useContext(AuthContext);

  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider()
  
  const handleGoogleSignin =() =>{
    providerLogin(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error))
  }


      const handdleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then( result => {
          const user = result.user;
          console.log(user);
          form.reset();
          setError('');
          navigate('/')
        })
        .catch(error =>{
          console.error(error)
          setError(error.message);
        })

      }



    return (
       <div>
         <Form onSubmit={handdleSubmit} className='form-container'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='form-text'>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className='form-btn' variant="primary" type="submit">
          LogIn
        </Button>

        <Form.Group className="mb-3  text-danger" >
          {error}
        </Form.Group>
        
      </Form>
      <ButtonGroup className='google-icon'  vertical>
        <Button onClick={handleGoogleSignin} variant="dark"> <FaGoogle></FaGoogle>LogIn with Google</Button>
        
        <Button variant="light"><FaGithub></FaGithub>LogIn with Github</Button>
      </ButtonGroup>
       </div>
       
    );
};

export default LogIn;