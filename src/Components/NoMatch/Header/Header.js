import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Header = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <Navbar className = 'bg-success' expand="md">
            <Navbar.Brand href="/">
                <img style ={{height: '50px'}} src="https://i.imgur.com/3MY6Ogr.png?1" alt="travel guru"/>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" className = 'd-flex justify-content-between'>
            <Form inline>
                <FormControl type="text" placeholder="Search Your Destination.." className="mr-sm-2" />
                <Button variant="primary">Search</Button>
            </Form>
                <Nav className="ml-auto align-items-center m-4">
                <Link to ='/' className = 'nav-link text-white'>
                    Home
                </Link>
                <Nav.Link href="/login"><Button variant="warning"> {loggedInUser.isLogged ? 'Sign Out' : 'Log In'} </Button> </Nav.Link>
                </Nav>                
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;