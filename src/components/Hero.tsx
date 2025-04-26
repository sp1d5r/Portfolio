import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Player } from '@lottiefiles/react-lottie-player';

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!textRef.current) return;
    
    const splitText = (element: HTMLElement) => {
      const text = element.innerText;
      element.innerText = '';
      
      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        element.appendChild(span);
        
        gsap.to(span, {
          opacity: 1,
          duration: 0.1,
          delay: 0.5 + i * 0.05,
          ease: 'power3.out',
        });
      });
    };
    
    const elements = textRef.current.querySelectorAll('.animate-text');
    elements.forEach(el => {
      splitText(el as HTMLElement);
    });
  }, []);
  
  return (
    <div id="hero" className="min-h-screen flex flex-col justify-center items-center relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-20 h-20 rounded-full bg-purple-500 opacity-20"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 200, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-blue-500 opacity-20"
          animate={{ 
            x: [0, -150, 0], 
            y: [0, -100, 0],
            scale: [1, 2, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Main content */}
      <div ref={textRef} className="z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="animate-text text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Elijah Ahmad
          </h1>
          <h2 className="animate-text text-3xl mt-4 text-gray-300">
            Software Engineer & Startup Founder
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="max-w-2xl mx-auto text-xl text-gray-400 mb-10"
        >
          Building products that matter. Specializing in React, TypeScript, and full-stack development with a focus on AI and machine learning.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#4C1D95" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-purple-700 rounded-full font-medium"
          >
            My Work
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#1E40AF" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-700 rounded-full font-medium"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
      
      {/* Animated pointer/scroll indicator */}
      <motion.div 
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Player
          src="https://assets9.lottiefiles.com/packages/lf20_nrarfipm.json"
          className="w-16 h-16"
          loop
          autoplay
        />
      </motion.div>
    </div>
  );
};

export default Hero; 