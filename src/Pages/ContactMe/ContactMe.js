import React, { useState, useRef} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ContactInfo from "./ContactInfo";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

import "./ContactMe.scss";

const ContactMe = () => {
  
  const [successMessage, setSuccessMessage] = useState("");
  const [isSending, setIsSending] = useState("Submit");
  const [isDisabled, setIsDisabled] = useState(false);
  //const [isMessageHide, setIsMessageHide] = useState(false);

  //form validation

  const form = useRef();
  const { register, formState: { errors }, handleSubmit } = useForm();

  //send email variables

  const serviceID = "service_BESTPLAYER";
  const templateID = "template_2009";
  const userID = "user_OAmhdy0pmIcXNMguqBuvD";

  const onSubmit = (data, r) => {
  
    sendEmail(
      serviceID,
      templateID,
      {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      userID
    );
    r.target.reset();

  };

  const sendEmail = (serviceID, templateID, data, userID) => {
    setIsSending(isSending);
    emailjs
      .send(serviceID, templateID, data, userID)
      .then(() => {
        setSuccessMessage(
          "Form sent successfully! I'll contact you as soon as possible."
        );
        
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
      setIsSending("Sent");
      setIsDisabled(true);
      hideSuccessfulMessage();
  };

  const hideSuccessfulMessage = () => {
    const timeout = setTimeout(() => {
          setSuccessMessage("");
        }, 6000);
        return () => clearTimeout(timeout);
  }
  
    

  return (
    <>
      <Container className="contact-wrapper mx-auto">
        <Row className="contact-main-row">
          <Col xm="12" lg="6" className="contact-info text-center py-3">
            <ContactInfo />
          </Col>

          <Col xm="12" lg="6" className="contact-form py-3">
            <h3>Say hello...</h3>
            <span className="success-message">{successMessage}</span>
            <form ref={form} className="form" onSubmit={handleSubmit(onSubmit)}>
              <Row>
                {/* NAME INPUT */}
                <Col xm="12" lg="6">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    //value={fullName}
                    //onChange={(e) => setFullName(e.target.value)}
                    {...register("fullName", { required: true, minLength: 5, maxLength: 20 })}
                  />
                  <span className="error-message">
                    { errors.fullName?.type === 'required' && "Full Name is Required"}
                  </span>

                  {/* COMPANY INPUT */}

                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    //value={company}
                    //onChange={(e) => setCompany(e.target.value)}
                  />
                </Col>

                {/* EMAIL INPUT */}

                <Col xm="12" lg="6">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    //value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                    {...register("email", {
                      required: true,
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        // message: "invalid Email",
                      },
                    })}
                  />
                  <span className="error-message">
                     {errors.email?.type === 'required' && "Email is Required"}
                  </span>

                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    //value={phone}
                    //onChange={(e) => setPhone(e.target.value)}
                    {...register("phone", {
                      required: true,
                      maxLength: 11,
                      minLength: 8,
                    })}
                  />
                  <span className="error-message">
                    {errors.phone?.type === 'required' && "Phone number is Requiered"}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col xm="12">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    //value={subject}
                   // onChange={(e) => setSubject(e.target.value)}
                    {...register("subject", { required: true, minLength: 2, maxLength: 30 })}
                  />
                  <span className="error-message">
                    {errors.subject?.type === 'required' && "Please enter Subject"}
                  </span>
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
                    //value={message}
                    //onChange={(e) => setMessage(e.target.value)}
                    {...register("message", { required: true})}
                  ></textarea>
                  <span className="error-message">
                    {errors.message?.type === 'required' && "Please enter your Message"}
                  </span>
                </Col>
              </Row>
              <Button
                type="submit"
                className="btn-form"
                disabled = {isDisabled}
                style={{ background: isSending ? "#FFAD60" : "#f9feff" }}
              >
                {isSending === "Submit" ? "Submit" : "Sent"}
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactMe;
