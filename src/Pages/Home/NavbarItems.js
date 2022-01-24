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
            <Link to='/'>
               <Navbar.Brand>
                 Lorenchess
               </Navbar.Brand>
            </Link>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <SiLichess size={30} fill={'#000'} className="nav-icon-toggle"/>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ms-auto align-items-center">
                  
                  <Nav.Link className='px-4'><Link smooth={true} to='/' offset={-90}>Home</Link></Nav.Link>
                  <Nav.Link className='px-4'><Link smooth={true} to='about' offset={-90}>About</Link></Nav.Link>
                  <Nav.Link className='px-4'><Link smooth={true} to='projects' offset={-90}>Projects</Link></Nav.Link>
                  <Nav.Link className='px-4'><Link smooth={true} to='contact' offset={-90}>Contact</Link></Nav.Link>
                    
                  
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default NavbarItems
