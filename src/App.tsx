import React from 'react';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBar from './components/navBar';
import Skills from './components/skills';
import Works from './components/works';


function App() {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-backgroundColor to-blue3  text-white box-border overflow-auto snap-y snap-mandatory '>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
