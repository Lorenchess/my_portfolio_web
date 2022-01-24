import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiJavascript } from "react-icons/si";
import { mySkillsData } from "../../Shared/skillsData";
import "./MySkills.scss";



const MySkills = () => {
  return (
    <>
      <Container className="container-wrapper mt-5 py-5">
        <Row>
          <Col xs="12 mb-5" className="separator-wrapper">
            <h1 className="about-heading mx-auto d-block mb-5">My Skills</h1>
          </Col>
        </Row>
        <Row>
          {mySkillsData.map(({id, name, icon}) => {
            return (
              <Col className="text-center" key={id}>
                  <p> {icon} </p>
                  <h2 className="text-center"> {name}</h2>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  );
};

export default MySkills;
