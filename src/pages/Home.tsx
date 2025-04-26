import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Home: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;