import React from 'react';
import LandingPage from './Components/Landing/LandingPage';
import Navbar from './Components/Navigation/Navbar';
import About from './Components/About/About';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
