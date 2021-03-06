import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
const Header = () => {
    return (
        <div>

           <Navbar collapseOnSelect  bg="success" expand="md" >
               <Navbar.Brand className="mt-3"><a href="/Home" className="text-dark text-decoration-none"><h1 >Country</h1></a> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='d-flex  justify-content-end align-items-end'>
                    <div className='d-flex flex-md-row flex-column'>
                    <Nav.Link href='/Home'>Home</Nav.Link>
                   <Nav.Link href='/Details'>Details</Nav.Link>
                   <Nav.Link href='/Contacts'>Contacts</Nav.Link>
                    </div>
               </Nav>
               </Navbar.Collapse>
                </Navbar>
    

        </div>
    );
};

export default Header;