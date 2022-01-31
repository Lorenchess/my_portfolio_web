import React from 'react'
import Profile from './Profile';
import {Container} from 'react-bootstrap';
import './Header.scss';
import Particles from "react-tsparticles";

const Header = () => {
    const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

   return (
     <Container fluid className="header-wrapper" id="/">
            <Particles
               id="tsparticles"
               init={particlesInit}
               loaded={particlesLoaded}
               options={{
               fpsLimit: 50,
               interactivity: {
                  events: {
                     onClick: {
                     enable: true,
                     mode: "push",
                     },
                     onHover: {
                     enable: true,
                     mode: "repulse",
                     },
                     resize: true,
                  },
                  modes: {
                     bubble: {
                     distance: 400,
                     duration: 2,
                     opacity: 0.8,
                     size: 30,
                     },
                     push: {
                     quantity: 3,
                     },
                     repulse: {
                     distance: 200,
                     duration: 0.4,
                     },
                  },
               },
               particles: {
                  color: {
                     value: "#ffffff",
                  },
                  links: {
                     color: "#ffffff",
                     distance: 150,
                     enable: true,
                     opacity: 0.3,
                     width: .5,
                  },
                  collisions: {
                     enable: true,
                  },
                  move: {
                     direction: "none",
                     enable: true,
                     outMode: "bounce",
                     random: false,
                     speed: 1.5,
                     straight: false,
                  },
                  number: {
                     density: {
                     enable: true,
                     area: 1500,
                     },
                     value: 80,
                  },
                  opacity: {
                     value: 0.9,
                  },
                  shape: {
                     type: "circle",
                  },
                  size: {
                     random: true,
                     value: 1.5,
                  },
               },
               detectRetina: true,
               }}
            />
        <Profile />
     </Container>
   )
}

export default Header
