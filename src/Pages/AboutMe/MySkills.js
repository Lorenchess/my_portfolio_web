import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import './MySkills.scss';

const SkillBar = ({done}) => {
	const [style, setStyle] = useState({});
	
	 useEffect(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	 }, [done]);
	
	return (
		<div className="skill-bar mx-auto">
			<div className="skill-done" style={style}>
				{done}%
			</div>
		</div>
	)
};

const MySkills = () => {
   return (
      <>
      <Container className="container-wrapper mt-5 py-3">
          <Row >
            <Col xs="12 mb-5" className="separator-wrapper">        
                <h1 className="about-heading mx-auto d-block">My Skills</h1>
            </Col>
          </Row >
         
          <Row >
            <Col>
              <h2 className="text-center">JavaScript</h2>
              <SkillBar done="70" />
            </Col>
          
            <Col>
              <h2 className="text-center">React JS</h2>
              <SkillBar done="70" />
            </Col>
         
            <Col>
              <h2 className="text-center">HTML</h2>
              <SkillBar done="70" />
            </Col>
          
            <Col>
              <h2 className="text-center">CSS</h2>
              <SkillBar done="70" />
            </Col>
          
            <Col>
              <h2 className="text-center">SASS</h2>
              <SkillBar done="70" />
            </Col>
          
            <Col>
              <h2 className="text-center">Bootstrap</h2>
              <SkillBar done="70" />
            </Col>
          
            <Col>
              <h2 className="text-center">Node JS</h2>
              <SkillBar done="70" />
            </Col>
          
            <Col>
              <h2 className="text-center">Java</h2>
              <SkillBar done="70" />
            </Col>
            <Col>
              <h2 className="text-center">OOP</h2>
              <SkillBar done="70" />
            </Col>
            <Col>
              <h2 className="text-center">SQL & Mongo DB</h2>
              <SkillBar done="70" />
            </Col>
          </Row >
      </Container>
      </>
   )
}

export default MySkills

