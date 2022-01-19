import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ContactInfo from "./ContactInfo";
import "./ContactMe.scss";

const ContactMe = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, email);
    
  };

  return (
    <>
      <Container className="contact-wrapper mx-auto">
        <Row className="contact-main-row">
          <Col xm="12" lg="6" className="contact-info text-center py-3">
            <ContactInfo />
          </Col>

          <Col xm="12" lg="6" className="contact-form py-3">
            <h3>Say hello...</h3>
            <form className="form" onSubmit={handleSubmit}>
              <Row>
                <Col xm="12" lg="6">
                  <label htmlFor="fullName">Name</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />

                  <label htmlFor="company">Company</label>
                  <input type="text" name="company" id="company" />
                </Col>

                <Col xm="12" lg="6">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" name="phone" id="phone" />
                </Col>
              </Row>
              <Row>
                <Col xm="12">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    className="text-area"
                    id="message"
                    required
                  ></textarea>
                </Col>
              </Row>
              <Button type="submit" className="btn-form">
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactMe;
