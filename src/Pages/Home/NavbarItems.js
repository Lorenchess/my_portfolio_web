import React, {useState} from "react";
import { Link } from "react-scroll";
import { SiLichess } from "react-icons/si";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavbarItems.scss";

const dataTabs = [
  
  {
    id: 1,
    to: "/",
    smooth:true,
    offset:-90,
    tabTitle: "Home",
    className:"nav-links px-4"
  },
  {
    id: 2,
    to: "about",
    smooth:true,
    offset:-90,
    tabTitle: "About",
    className:"nav-links px-4"
  },
  {
    id: 3,
    to: "projects",
    offset:-90,
    tabTitle: "Projects",
    className:"nav-links px-4"
  },
  {
    id: 4,
    to: "contact",
    smooth:true,
    offset:-90,
    tabTitle: "Contact",
    className:"nav-links px-4"
  }
] 

const navBrandLink = [
  {
    id:0,
    to: "/",
    smooth:true,
    offset:-90,
    tabTitle: "Lorenchess"

  }
]

const NavbarItems = () => {
  
  const [isActive, setIsActive] = useState(null);

  const navigate = (id) => {
    setIsActive(id);
  }

  const NavbarBrandLink = ({id, tabTitle, to, smooth, offset, onClick}) => {
    return (
      <Link
         to={to}
         smooth = {smooth}
         offset={offset}
         onClick = {()=> navigate(id)}
       >
      <Navbar.Brand>{tabTitle}</Navbar.Brand>
       </Link>
    )
  }
   
  const NavLink = ({id, tabTitle, isActive, to, smooth, offset, className, onClick}) => {
     return (
       <Link
         to={to}
         smooth = {smooth}
         offset={offset}
         onClick = {()=> navigate(id)}
         className={isActive ? `${className} active` : `${className}`}
       >
       {tabTitle}
       </Link>
     )
  };


  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      className="navbar-wrapper"
    >
      <Container className="nav-container">
        {
          navBrandLink.map((item) => {
            return (
              <li key= {item.id} >
                <NavbarBrandLink {...item} isActive = {isActive === item.id} />
              </li>
              
            )
          })
        }

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <SiLichess size={30} fill={"#000"} className="nav-icon-toggle" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">

            {
              dataTabs.map((item) => {
                return (
                  <li key= {item.id} >
                    <NavLink {...item} isActive = {isActive === item.id} onClick = {navigate} />
                  </li>
                )
                
              })
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarItems;
