import React from 'react'
import './App.scss';
import AboutMe from './Pages/AboutMe/AboutMe';
import Header from './Pages/Home/Header';
import Navbar from './Pages/Home/NavbarItems';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
    </>
    
  );
}

export default App;
