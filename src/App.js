import React from 'react';
import LandingPage from './Components/Landing/LandingPage';
import Navbar from './Components/Navigation/Navbar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
      <Projects />
    </div>
  );
}

export default App;
