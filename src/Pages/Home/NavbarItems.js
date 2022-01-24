import React from 'react'
import { animatedScroll as scroll, Link } from 'react-scroll';
import {LinkContainer} from 'react-router-bootstrap';
import { SiLichess } from "react-icons/si";
import {Container, Nav, Navbar} from 'react-bootstrap';
import './NavbarItems.scss';

const NavbarItems = () => {
   return (
      <Navbar sticky="top"  collapseOnSelect expand="lg" className="navbar-wrapper" >
         <Container className="nav-container">
            <LinkContainer to='/'>
               <Navbar.Brand>
                 Lorenchess
               </Navbar.Brand>
            </LinkContainer>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <SiLichess size={30} fill={'#000'} className="nav-icon-toggle"/>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ms-auto align-items-center">
                  <LinkContainer to='/'>
                  <Nav.Link className='px-4 '>Home</Nav.Link>
                  </LinkContainer>  
                  <LinkContainer to='/about'>
                  <Nav.Link className='px-4 '>About</Nav.Link>
                  </LinkContainer>  
                  <LinkContainer to='/projects'>
                  <Nav.Link className='px-4 '>Projects</Nav.Link>
                  </LinkContainer>  
                  <LinkContainer to='/contact'>
                  <Nav.Link className='px-4 '>Contact</Nav.Link>
                  </LinkContainer>     
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default NavbarItems
