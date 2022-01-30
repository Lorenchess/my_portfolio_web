import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { BsLinkedin } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import "aos/dist/aos.css"
// import { BsLinkedin } from "react-icons/bs";
import "./Footer.scss";

const Footer = () => {


   return (
        <Container fluid className="footer-wrapper mx-auto" id="footer">
            <Row className="footer__logo-box">
               <Col xm="12" lg="6">
               
               </Col> 
            </Row>
            <Row className="row footer_social">
                <Col xm="12" className="text-center py-2">
                    <a href="https://www.linkedin.com/in/chess4math/" target="_blank" rel="noreferrer" className='px-4' >
                      <BsLinkedin size={26} fill={'#131131'} />
                    </a>
                    <a href="https://github.com/Lorenchess" target="_blank" rel="noreferrer" className='px-4'>
                      <BsGithub size={26} fill={'#131131'} />
                    </a>
                    <a href="https://www.facebook.com/ramonmiguel.lorentepupo/" target="_blank" rel="noreferrer" className='px-4'>
                      <ImFacebook2 size={25} fill={'#131131'} />
                    </a>
                    
                </Col>
            </Row>
            <Row className="row">
                <Col xm="12" className="text-center">
                    <p className="footer__copyright mt-4">
                        Built with ❤ by Ramon Lorente for his portfolio website .
                        Copyright &copy; by Ramon Lorente. 
                    </p>
                </Col>
            </Row>
                
            
        </Container>  
      
   )
}

export default Footer
