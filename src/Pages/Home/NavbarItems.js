import React, {useState} from "react";
import { animatedScroll as scroll, Link } from "react-scroll";
import { LinkContainer } from "react-router-bootstrap";
import { SiLichess } from "react-icons/si";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavbarItems.scss";

const NavbarItems = () => {
  
   const [isActive,setIsActive] = useState(false);
   
//   const makeActive = () => {
//    setIsActive(true);
//   }

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      className="navbar-wrapper"
    >
      <Container className="nav-container">
        <Link to="/" offset={-90}>
          <Navbar.Brand>Lorenchess</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <SiLichess size={30} fill={"#000"} className="nav-icon-toggle" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link
              smooth={true}
              to="/"
              offset={-90}
              //onClick={()=> makeActive()}
              className={ isActive ? "nav-links px-4 active" : "nav-links px-4"}
            >
              Home
            </Link>
            <Link
              smooth={true}
              to="about"
              offset={-90}
              className="nav-links px-4"
              //activeClass="active"
             
            >
              About
            </Link>
            <Link
              smooth={true}
              to="projects"
              offset={-90}
              className="nav-links px-4"
              //activeClass="active"
              
            >
              Projects
            </Link>
            <Link
              smooth={true}
              to="contact"
              offset={-90}
              className="nav-links px-4"
              //activeClass="active"
              
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarItems;
