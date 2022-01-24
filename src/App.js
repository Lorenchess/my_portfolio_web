import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';
import AboutMe from './Pages/AboutMe/AboutMe';
import ContactMe from './Pages/ContactMe/ContactMe';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Home/Header';
import Navbar from './Pages/Home/NavbarItems';
import MyProjects from './Pages/Projects/MyProjects';
import Error from './Pages/Error/Error';

function App() {
  return (
    <>
      <Router>
          <Navbar />
        <Routes>
          <Route path="/" element= {<Header />} /> 
          <Route path="/about" element= {<AboutMe />} />
          <Route path="/projects" element= {<MyProjects />} /> 
          <Route path="/contact" element= { <ContactMe />} /> 
          <Route path="/footer" element= { <Footer/>} /> 
          <Route path="*" element= { <Error/>} />
        </Routes>
         
       
      </Router>
    </>
    
  );
}

export default App;
