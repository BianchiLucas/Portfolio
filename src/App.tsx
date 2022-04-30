import React from 'react';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBar from './components/navBar';
import Skills from './components/skills';
import Works from './components/works';


function App() {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-backgroundColor to-ligthBlue  text-white box-border overflow-auto snap-y snap-proximity '>
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
