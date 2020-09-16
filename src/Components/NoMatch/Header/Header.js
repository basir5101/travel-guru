import React from 'react';
import { Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
                <FormControl type="text" placeholder="Search Your Destination.." className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="mr-auto">
                <Link to ='/' className = 'nav-link'>
                    Home
                </Link>
                <Nav.Link href="#link">Link</Nav.Link>
                </Nav>                
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;