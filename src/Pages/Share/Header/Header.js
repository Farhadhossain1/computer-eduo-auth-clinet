import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.png';
import './Header.css';
const Header = () => {
    return (
        <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className='website-name' href="#home">
          <Image className='logo-img' src={logo}>
            
          </Image>
          
           React-Bootstrap
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-link">
            <Link  href="#home">Courses</Link>
            <Link  href="#link">FAQ</Link>
            <Link  href="#link">Blog</Link>
            <Link  to='/login'>LogIn</Link>
            <Link  to='/register'>Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;