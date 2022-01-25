import React from 'react'
import AboutMe from './Pages/AboutMe/AboutMe';
import ContactMe from './Pages/ContactMe/ContactMe';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Home/Header';
import Navbar from './Pages/Home/NavbarItems';
import MyProjects from './Pages/Projects/MyProjects';
//import Error from './Pages/Error/Error';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer/>
    </>
    
  );
}

export default App;
