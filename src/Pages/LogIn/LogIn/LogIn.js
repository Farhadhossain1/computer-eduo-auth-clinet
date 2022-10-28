import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './LogIn.css';


const LogIn = () => {

  const [error,setError] = useState('');

  const {providerLogin ,signIn, githubLogin} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider()
  
  const handleGoogleSignin =() =>{
    providerLogin(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error))
  }

  const handleGithubLogin = () =>{
    githubLogin()
    .then(result =>{
      const user  =  result.user;
      console.log(user);
    })
    .catch(e=>console.error(e))
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
          toast.success('Successfully toasted!')
          form.reset();
          setError('');
          navigate(from, {replace: true})
        })
        .catch(error =>{
          console.error(error)
          setError(error.message);
        })

      }



    return (
       <div className='login-container'>
         <Form onSubmit={handdleSubmit} className='form-container'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='form-text'>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password"  required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          <p>Already have an account ? <Link to='/register'>Please Register</Link></p>
        </Form.Group>
        <button className='w-100 py-2 bg-primary text-white border-0'>Login</button>
        <Form.Group className="mb-3  text-danger" >
          {error}
        </Form.Group>
        
      </Form>
      <ButtonGroup className='google-icon'  vertical>
      </ButtonGroup>
      <div className='btn-auth'>
      <button onClick={handleGoogleSignin}> <FaGoogle></FaGoogle>LogIn with Google</button>
      <br />
      <button onClick={handleGithubLogin}> <FaGithub></FaGithub>LogIn with Github</button>
      </div>
       </div>
       
    );
};

export default LogIn;