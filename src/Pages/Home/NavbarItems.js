import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import './NavbarItems.scss';

const NavbarItems = () => {
   return (
      <Navbar sticky="top"  collapseOnSelect expand="lg" className="navbar-wrapper" >
         <Container>
            <Navbar.Brand href="#home">Lorenchess</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ms-auto">
                  <Nav.Link href="#features" className='px-4'>Home</Nav.Link>
                  <Nav.Link href="#pricing" className='px-4'>About</Nav.Link>
                  <Nav.Link href="#features" className='px-4'>Projects</Nav.Link>
                  <Nav.Link href="#pricing" className='px-4'>Contact</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default NavbarItems
