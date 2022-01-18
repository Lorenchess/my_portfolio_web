import React from 'react'
import {Container, Row, Col, Button } from 'react-bootstrap';
import './ContactMe.scss'

const ContactMe = () => {
   return (
      <>
       <Container className='contact-wrapper mx-auto'>
          <Row>
            <Col className='contact-info text-center'>
               <Row>
                  <Col>
                  <h1><strong>I am always happy to hear from you</strong></h1>
                  </Col> 
               </Row>
               <Row>
                  <Col>
                     <ul>
                        <li>Pembroke Pines, Florida</li>
                        <li>(956) 336-2323</li>
                        <li>ramon_lorente@yaho.com</li>
                     </ul>
                  </Col> 
               </Row> 
            </Col>
             
            <Col className='contact-form'>
               <h3>Email Us</h3>
               <form>
               <Row>
                     <Col>
                        <p>
                           <label>Name</label> 
                           <input type="text" name="name" />
                        </p>
                        <p>
                           <label>Company</label> 
                           <input type="text" name="company" />
                        </p>
                     </Col>
                 
                     <Col>
                     <p>
                        <label>Email Address</label> 
                        <input type="email" name="email" />
                     </p>
                     <p>
                        <label>Phone Number</label> 
                        <input type="text" name="phone" />
                     </p>
                     </Col>
               </Row>
               <Row>
                  <Col>
                     <p>
                        <label>Message</label> 
                        <textarea name="message" rows="5" className="text-area"></textarea>
                     </p>
                  </Col>
               </Row>
                 <Button className="btn-form">Submit</Button>
               </form>
             </Col>
          </Row>
       </Container>
      </>
   )
}

export default ContactMe
