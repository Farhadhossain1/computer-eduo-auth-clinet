import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.png';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Header.css';




const Header = () => {

  const {user,logOut} = useContext(AuthContext);
  
  const handleLogOut = () =>{
    logOut()
    .then( () => {})
    .catch(error => console.error(error))
  }

    return (
        <Navbar className='navbar' bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className='website-name' href="#home">
          <Image className='logo-img' src={logo}>
            
          </Image>
          
           React-Bootstrap
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-link">
            <Link  to="/">Home</Link>
            <Link  to="/courses">Courses</Link>
            <Link  href="#link">FAQ</Link>
            <Link  href="#link">Blog</Link>
              <p className='header-name'>
                {

                  user?.uid ?
                  <>
                  <span>{user?.displayName}</span>
                  <Button variant="light" onClick={handleLogOut}>LogOut</Button>
                  </>
                   :
                  <>
                  <Link to='/login'>LogIn</Link>
                  <Link to='/register'>Register</Link>
                  </>
                }
               </p>


              {user?.photoURL ?
            <Image style={{height: '40px'}} roundedCircle src={user?.photoURL}></Image> : <FaUser></FaUser>
            
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;