import React, { useContext, useState } from 'react';
import { Form, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon, FaUser } from "react-icons/fa";
import { HiSun } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.png';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Header.css';




const Header = () => {

  const {user,logOut} = useContext(AuthContext);
  const [dark, setDark] = useState(false);
  
  const handleLogOut = () =>{
    logOut()
    .then( () => {})
    .catch(error => console.error(error))
  }

  const handleDarkTheme = event =>{
    setDark(event.target.checked);
    console.log(dark);
  }

    return (
        <Navbar className='navbar' bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className='website-name' href="#home">
          <Image className='logo-img' src={logo}>
            
          </Image>
          Hex Clan
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-link">
            <Link  to="/">Home</Link>
            <Link  to="/courses">Courses</Link>
            <Link  href="#link">FAQ</Link>
            <Link  to='/blog'>Blog</Link>
              <p className='header-name'>
                {

                  user?.uid ?
                  <>
                  <Button className='me-5' variant="light" onClick={handleLogOut}>LogOut</Button>
                  </>
                   :
                  <>
                  <Link to='/login'>LogIn</Link>
                  <Link to='/register'>Register</Link>
                  </>
                }
               </p>
                  <div className='d-flex align-items-center ms-3 mb-2'>
                  <Form.Check 
                      type="switch"
                      id="custom-switch"
                      onClick={handleDarkTheme}
                      label=""
                />
                  </div>
                {
                  dark ? <div className='d-flex align-items-center mb-1'><FaMoon className='text-white mb-2 '></FaMoon></div> :  <div className=' d-flex align-items-center mb-2'><HiSun className='text-white'></HiSun></div>
                }
              {user?.photoURL ?
            <Image title={user?.displayName} style={{width: '40px'}} roundedCircle src={user?.photoURL}></Image> : <div className='d-flex align-items-center mb-2 ms-4'><FaUser className='text-white'></FaUser></div>
            
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;