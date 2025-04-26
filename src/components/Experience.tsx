import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import stealthLogo from '../assets/logos/stealth.jpeg';
import viraNovaLogo from '../assets/logos/viranova.jpeg';
import spredoLogo from '../assets/logos/spredoio_logo.jpeg';
import palantirLogo from '../assets/logos/palantir_technologies_logo.jpeg';
import armLogo from '../assets/logos/arm_logo.jpeg';
import softwireLogo from '../assets/logos/softwire_logo.jpeg';

interface ExperienceItemProps {
  logo: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  index: number;
}

const ExperienceItem = ({ logo, company, role, period, location, description, skills, index }: ExperienceItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col md:flex-row gap-4 md:gap-8 mb-16 relative"
    >
      {/* Timeline dot and line */}
      <div className="hidden md:block absolute left-[29px] top-0 bottom-0 w-px bg-gray-700 -z-10" 
           style={{ display: index === 0 ? 'none' : 'block' }} 
      />
      
      {/* Company logo */}
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-800 overflow-hidden border-2 border-gray-700 z-10"
      >
        <img src={logo} alt={`${company} logo`} className="w-full h-full object-cover" />
      </motion.div>
      
      {/* Job details */}
      <div className="flex-grow">
        <motion.div 
          whileHover={{ x: 5 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2"
        >
          <h3 className="text-2xl font-bold text-white">{role}</h3>
          <span className="text-purple-400 text-sm font-medium">{period}</span>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
          <h4 className="text-xl text-blue-400">{company}</h4>
          <span className="text-gray-400 text-sm">• {location}</span>
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
              className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experienceData = [
    {
      logo: stealthLogo,
      company: "Stealth Startup",
      role: "Backend and Data Engineer",
      period: "Nov 2024 - Present",
      location: "United Kingdom · Hybrid",
      description: "Working on cutting-edge technology in a stealth startup environment.",
      skills: ["Startups", "TypeScript", "Python", "Data Engineering", "Data Pipelines", "Data Warehousing", "Data Lake", "Data Lakehouse", "Dagster", "Spark", "AWS", "Docker", "Kubernetes", "CI/CD", "Git", "GitLab", "GitLab CI/CD", "GitLab Runner", "Alembic", "SQLModel", "PostgreSQl"]
    },
    {
      logo: viraNovaLogo,
      company: "ViraNova",
      role: "Founder",
      period: "Sep 2023 - Sep 2024 · 1 yr 1 mo",
      location: "London Area, United Kingdom",
      description: "Founded and led development of innovative startup solutions.",
      skills: ["Front-End Development", "Back-End Web Development", "TypeScript", "Full-Stack Development", "Machine Learning", "React", "Git", "Artificial Intelligence (AI)"]
    },
    {
      logo: spredoLogo,
      company: "Spredo",
      role: "Lead Data Engineer",
      period: "Jan 2024 - Apr 2024 · 4 mos",
      location: "Remote",
      description: "Data is important but data is tricky. Bringing the best practices helps you get a leg up on the competition and establishing the foundations you build your company on. Spredo was an excellent company to take my knowledge from Palantir and help a crypto company establish a good data landscape.",
      skills: ["Data Engineering", "TypeScript", "Full-Stack Development"]
    },
    {
      logo: palantirLogo,
      company: "Palantir Technologies",
      role: "Forward Deployed Software Engineer",
      period: "Apr 2022 - Aug 2023 · 1 yr 5 mos",
      location: "London, England, United Kingdom",
      description: "Worked on mission-critical software solutions for major clients.",
      skills: ["Data Engineering", "TypeScript", "AI", "Data Ingestion", "Data Pipelines", "Data Warehousing", "Data Lake", "Data Lakehouse"]
    },
    {
      logo: armLogo,
      company: "Arm",
      role: "Software Engineer (Internship)",
      period: "Jul 2021 - Oct 2021 · 4 mos",
      location: "Cambridge, England, United Kingdom",
      description: "Working on the Android/Chromium Open Source Team.",
      skills: ["Git", "Arm Assembly", "Assembler", "Linux", "Android"]
    },
    {
      logo: softwireLogo,
      company: "Softwire",
      role: "Software Engineer (Internship)",
      period: "Mar 2021 - Apr 2021 · 2 mos",
      location: "Remote",
      description: "Software Engineer working in REACT to develop snapcup - internal anonymous feedback service using Firebase, React (Typescript), CSS/SCSS/React Styled Components, GitHub Actions with Pipeline Deployment, and Figma Mockup & Designs.",
      skills: ["Front-End Development", "React", "Git"]
    }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  
  return (
    <section ref={sectionRef} id="experience" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <motion.div
          className="inline-block mb-2 px-4 py-1 bg-purple-900/30 rounded-full text-purple-400 text-sm font-medium"
          whileHover={{ scale: 1.05 }}
        >
          My Journey
        </motion.div>
        <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A timeline of my professional journey building products and startups.
        </p>
      </motion.div>
      
      <div className="max-w-4xl mx-auto">
        {experienceData.map((experience, index) => (
          <ExperienceItem
            key={index}
            {...experience}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience; 