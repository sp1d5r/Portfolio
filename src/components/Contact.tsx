import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <section ref={sectionRef} className="py-24" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <motion.div
          className="inline-block mb-2 px-4 py-1 bg-green-900/30 rounded-full text-green-400 text-sm font-medium"
          whileHover={{ scale: 1.05 }}
        >
          Let's Work Together
        </motion.div>
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Send me a message and let's create something amazing.
        </p>
      </motion.div>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-400 mb-6">
              Feel free to reach out through any of the following channels:
            </p>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Email</h4>
                  <p className="text-white font-medium">contact@elijah-ahmad.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">LinkedIn</h4>
                  <p className="text-white font-medium">linkedin.com/in/elijahahmad</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center text-green-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Location</h4>
                  <p className="text-white font-medium">London, United Kingdom</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={formStatus === 'submitting'}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-300 
                ${formStatus === 'submitting' ? 'bg-gray-600' : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {formStatus === 'idle' && 'Send Message'}
              {formStatus === 'submitting' && 'Sending...'}
              {formStatus === 'success' && 'Message Sent!'}
              {formStatus === 'error' && 'Error Sending Message'}
            </motion.button>
            
            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="p-4 bg-green-900/30 text-green-400 rounded-lg text-center"
              >
                Thanks for reaching out! I'll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 