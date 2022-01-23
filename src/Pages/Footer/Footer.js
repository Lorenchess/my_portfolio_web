import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.scss";

const Footer = () => {
   return (
        <Container fluid className="footer-wrapper mx-auto">
            <Row className="footer__logo-box">
               <Col xm="12" lg="6">
               
               </Col> 
            </Row>
            <Row className="row">
                <Col xm="12" >
                    <div className="footer__navigation">
                        <ul className="footer__list text-center justify-content-center">
                            <li className="footer__item"><a href="#" className="footer__link">Home</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">About</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Projects</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Contact</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row className="row">
                <Col xm="12" className="text-center">
                    <p className="footer__copyright">
                        Built by <a href="#" className="footer__link">Ramon Lorente</a> for his portfolio website <a href="#" className="footer__link">Advanced CSS and Sass</a>.
                        Copyright &copy; by Ramon Lorente. 
                    </p>
                </Col>
            </Row>
                
            
        </Container>  
      
   )
}

export default Footer
