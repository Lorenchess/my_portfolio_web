import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ContactInfo from "./ContactInfo";
import { dataBase } from "./FireBase";
//import sendReplayEmail from '../../emails/sendEmail';
import "./ContactMe.scss";

const ContactMe = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    dataBase
      .collection("contacts")
      .add({
        fullName: fullName,
        email: email,
        message: message,
        company: company,
        phone: phone,
      })
      .then(() => {
        alert("Your message has been sent!");
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error.message);
        setIsLoading(false);
      });

      // Email reply
      // sendReplayEmail(email, fullName);

    setFullName("");
    setEmail("");
    setMessage("");
    setCompany("");
    setPhone("");
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
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
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
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </Col>
              </Row>
              <Button
                type="submit"
                className="btn-form"
                style={{ background: isLoading ? "#ccc" : "#f9feff" }}
              >
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
