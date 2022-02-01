import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.esm"
import AboutMe from './Pages/AboutMe/AboutMe';
import ContactMe from './Pages/ContactMe/ContactMe';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Home/Header';
import Navbar from './Pages/Home/NavbarItems';
import MyProjects from './Pages/Projects/MyProjects';


function App() {
  useEffect(()=> {
     Aos.init(300)
  }, []);


  return (
    <>
      <Navbar />
      <Header />
      <div data-aos="fade-up" data-aos-easing="ease-in-sine">
        <AboutMe />
      </div>
      <div data-aos="fade-up" data-aos-easing="ease-in-sine">
        <MyProjects />
      </div>
      <div data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <ContactMe />
      </div>
      <Footer/>
    </>
    
  );
}

export default App;
