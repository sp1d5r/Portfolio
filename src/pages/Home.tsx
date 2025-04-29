import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = "Elijah Ahmad | Home";
  }, []);
  
  return (
    <>
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;