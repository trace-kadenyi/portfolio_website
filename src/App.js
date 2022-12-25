import React from 'react';
import LandingPage from './Components/Landing/LandingPage';
import Navbar from './Components/Navigation/Navbar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Testimonials from './Components/Testimonials/Testimonials';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
