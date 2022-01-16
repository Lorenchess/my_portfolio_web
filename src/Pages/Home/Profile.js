import React from 'react'
import {Container, Row, Col, Button } from 'react-bootstrap';
import { BsLinkedin } from "react-icons/bs";
import Typical from 'react-typical';
import resume from '../../Assets/resume.pdf';
import './Profile.scss';

const Profile = () => {
   return (
   
         <Container className='profile-wrapper'>
            <Row >
               <Col className= 'profile-parent text-center'>
                     <Col className='linkedin-icon py-3'>
                        <a href="https://www.linkedin.com/in/chess4math/" target="_blank" rel="noreferrer">
                        <BsLinkedin size={26}/>
                        </a>
                     
                     </Col>
                     <Col className='profile-details-name'>
                        <span className='primary-text'>
                           {" "}
                           Hello, I'm <span className='highlighted-text'>Ramon</span>
                        </span>

                     </Col>
                     <Col className="profile-details-role py-3" >
                        <span className="primary-text">
                           {" "}
                           <h1>
                           {" "}
                           <Typical 
                              loop= {Infinity}
                              steps= {[
                                 "Enthusiastic Dev 😀",
                                 1000,
                                 "Junior Software Engineer 🚀",
                                 1000,
                                 "MERN Stack Dev ⚙",
                                 1000,
                                 "React Developer ♥ ",
                                 1000,
                                 "Junior Java Developer 💎",
                                 1000,
                                 "FIDE Chess Master 🏆",
                                 1000,
                              ]}
                           />
                           </h1>
                           <span className="profile-role-tagline" >
                              Building applications with front and back end operations.
                           </span>
                        </span>
                     </Col>
                   
                     <Col className="profile-optins">
                        <Button className="perfil-btn" size="lg"> {" "}
                           Get in touch 
                        </Button>{" "} 
                        
                        <a href={resume} download={"Ramon resume.pdf"}>
                           <Button className="perfil-btn" size="lg"> Get Resume</Button>
                        </a>
                     </Col>
               </Col>
            </Row>
         </Container>
      
      
   )
}

export default Profile
