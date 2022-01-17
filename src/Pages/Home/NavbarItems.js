import React from 'react'
import { SiLichess } from "react-icons/si";
import {Container, Nav, Navbar} from 'react-bootstrap';
import './NavbarItems.scss';

const NavbarItems = () => {
   return (
      <Navbar sticky="top"  collapseOnSelect expand="lg" className="navbar-wrapper" >
         <Container className="nav-container">
            <Navbar.Brand href="#home">
              Lorenchess
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <SiLichess size={30} fill={'#000'} className="nav-icon-toggle"/>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ms-auto align-items-center">
                  <Nav.Link href="#features" className='px-4 '>Home</Nav.Link>
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
