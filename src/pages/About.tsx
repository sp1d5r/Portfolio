import React from 'react';

const About: React.FC = () => {
  React.useEffect(() => {
    document.title = "About | Elijah Ahmad";
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 sm:p-6 lg:p-8">
      <section>
        <h1 className="text-4xl font-bold mb-6">About The Ahmad Company</h1>
        <p className="text-lg text-gray-700">
          Founded with a passion for innovation and excellence, The Ahmad Company 
          has been at the forefront of digital transformation since its inception. 
          We combine creativity with technical expertise to deliver solutions that 
          make a difference.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          We aim to empower businesses through technology, creating digital experiences 
          that are not only functional but also intuitive and engaging. Our mission is to 
          bridge the gap between complex technical requirements and user-friendly solutions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Elijah Ahmad</h3>
            <p className="text-gray-600">Founder & CEO</p>
            <p className="mt-2">
              With over a decade of experience in software development and digital strategy, 
              Elijah leads our team with vision and expertise.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Our Experts</h3>
            <p className="mt-2">
              Our team consists of passionate developers, designers, and strategists who 
              are committed to delivering excellence in every project.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;