import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.svg';
import './Header.css';

const Header = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <div className='d-flex bg-success' expand="md">
            <Navbar.Brand href="/">
                <img style={{ width: '100px', marginLeft: '30px' }} src={logo} alt="site logo" />
            </Navbar.Brand>
            <Nav className="ml-auto align-items-center m-4">
                <Link to='/' className='nav-link text-white'>
                    <h5>Home</h5>
                </Link>
                <Nav.Link href="/login"><Button variant="warning"> {loggedInUser.isLogged ? 'Sign Out' : 'Log In'} </Button> </Nav.Link>
            </Nav>
        </div>
    );
};

export default Header;