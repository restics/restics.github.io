import React from 'react';
import Navigation from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;