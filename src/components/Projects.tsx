import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const ProjectCard = ({ project, index, progress }: { project: typeof projectsData[0]; index: number; progress: MotionValue<number> }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  
  // Define smooth spring transitions
  const springTransition = {
    type: "spring",
    stiffness: 60,
    damping: 20,
    mass: 1,
  };

  // Create transformed values for the parallax effect
  const yTransform = useTransform(
    progress, 
    [0, 1], 
    [index % 2 === 0 ? 50 : -50, index % 2 === 0 ? -50 : 50]
  );
  
  const rotateTransform = useTransform(
    progress, 
    [0, 1], 
    [index % 2 === 0 ? 2 : -2, index % 2 === 0 ? -2 : 2]
  );

  // Determine if the project should use an external link
  const renderProjectLink = () => {
    if (project.id === "viranova") {
      return (
        <motion.div
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)"
          }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Link
            to="/viranova"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-mono font-medium"
          >
            <span>View Project</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      );
    }
    
    return (
      <motion.div
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)"
        }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-mono font-medium"
        >
          <span>View Project</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </motion.div>
    );
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ 
        opacity: 0, 
        scale: 0.8,
        y: 100,
      }}
      animate={isInView ? { 
        opacity: 1, 
        scale: 1,
        y: 0,
      } : { 
        opacity: 0, 
        scale: 0.8,
        y: 100,
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.3,
        ...springTransition
      }}
      className="relative group mb-32 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Project text content - takes up left/top side */}
        <motion.div 
          className="w-full lg:w-2/5 z-10 order-2 lg:order-1"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: index * 0.3 + 0.2, duration: 0.6 }}
        >
          <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-2xl border border-gray-800 shadow-xl">
            <motion.h3 
              className="text-3xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-azure to-magenta"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.3 + 0.4, duration: 0.5 }}
            >
              {project.title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
            >
              {project.description}
            </motion.p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.3 + 0.6 + (i * 0.05) }}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm text-mint font-mono"
                  whileHover={{ backgroundColor: "#ADEDC2", color: "#333", scale: 1.1, y: -2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.3 + 0.7, duration: 0.5 }}
            >
              {renderProjectLink()}
            </motion.div>
          </div>
        </motion.div>
        
        {/* Project screenshot - takes up right/bottom side with reverse scroll */}
        <motion.div 
          className="w-full lg:w-3/5 order-1 lg:order-2 aspect-video relative overflow-hidden rounded-xl"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ delay: index * 0.3 + 0.1, duration: 0.6 }}
          style={{ 
            y: yTransform,
            rotateZ: rotateTransform,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-30 z-10" />
          <div className="absolute inset-0 border border-gray-600/30 rounded-xl z-20" />
          
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={isHovered ? { scale: 1.15 } : { scale: 1.1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Colored overlay gradient */}
          <motion.div 
            className={`absolute inset-0 opacity-30 mix-blend-overlay ${
              index % 2 === 0 
                ? 'bg-gradient-to-br from-magenta to-azure' 
                : 'bg-gradient-to-br from-azure to-cyan'
            }`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
            whileHover={{ opacity: 0.4 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const isInView = useInView(sectionRef, { once: true, margin: "-200px 0px" });
  const [visibleProjects, setVisibleProjects] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setVisibleProjects(prev => {
          if (prev < projectsData.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 600); // Slower reveal for more impact
      
      return () => clearInterval(interval);
    }
  }, [isInView]);
  
  return (
    <section ref={sectionRef} id="projects" className="py-24 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 -z-20" />
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="mb-28 text-center"
      >
        <motion.div
          className="inline-block mb-2 px-4 py-1 bg-azure/20 rounded-full text-azure text-sm font-mono font-medium"
          whileHover={{ scale: 1.05 }}
        >
          My Products
        </motion.div>
        <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-azure to-magenta">
          Projects & Startups
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A showcase of my startup projects and products I've built.
        </p>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index}
            progress={scrollYProgress}
          />
        ))}
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute left-0 w-72 h-72 rounded-full bg-purple-500/5 -z-10"
        style={{ top: '15%' }}
        animate={{ 
          x: [-100, 0, -100], 
          y: [0, 100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute right-0 w-96 h-96 rounded-full bg-blue-500/5 -z-10"
        style={{ top: '40%' }}
        animate={{ 
          x: [100, 0, 100], 
          y: [0, -100, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 30,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute left-1/4 bottom-20 w-48 h-48 rounded-full bg-indigo-500/5 -z-10"
        animate={{ 
          x: [-50, 50, -50], 
          y: [30, -30, 30],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default Projects; 