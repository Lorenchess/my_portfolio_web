import React from "react"
import {Container, Row, Col, Card} from "react-bootstrap";
import MySkills from './MySkills';
import authorPhoto from "../../Assets/author.jpg";
import "./AboutMe.scss";
import LineSeparator from "../../Shared/LineSeparator";

const AboutMe = () => {
   return (
      <>
        <Container className="container-wrapper mt-5 py-3">
          <Row >
            <Col xs="12 mb-5" className="separator-wrapper">        
                <h1 className="about-heading mx-auto d-block">About me</h1>
            </Col>
          </Row >
         
          <Row >
          <Col lg="2" xs="12"></Col>
            <Col lg= "8" xs="12">
              <Card className="about-card">
                <Card.Img variant="top"  src={authorPhoto} className="author-img-wrapper mx-auto d-block mt-5"/>
                <Card.Body className="mb-3 mx-3 text-break">
                    <Card.Text className="about-text">
                      My name is <strong>Ramon Lorente</strong>. I am an <strong>international chess (FIDE) master</strong> and graduated from the <strong>Full Stack Web and Mobile Development Bootcamp at
                      Nucamp</strong> . I have a bachelor's degree in Physical Education from Cuba, and I am currently working at Franklin
                      Academy Pembroke Pines in Florida.
                    </Card.Text> 
                    <Card.Text className="about-text">
                      I discovered my passion for programming in January 2021. I have been self-studying and working
                      hard in learning technologies like <strong> HTML, CSS, SASS, JavaScript, React JS, Node JS, Java, SQL, Bootstrap, Material
                      UI, </strong>and others.
                      I am currently developing my skills as a Java Developer by studying Udemy courses and creating personal projects
                      that I am including on my GitHub account . <strong> I am applying to entry-level & Junior Developer jobs, with frontend
                      and backend technology.</strong>
                    </Card.Text>
                    <Card.Text className="about-text">
                      I am the father of a four-year-old son and a husband, living in Pembroke Pines, Florida. I have a <strong>strong will</strong> and
                      desire to learn, and I am <strong>determined to work hard to become a successful software engineer</strong>.
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="2" xs="12"></Col>
          </Row >
          <LineSeparator />
          <MySkills /> 
          <LineSeparator />
        </Container>

      </>
       
    
   )
}

export default AboutMe
