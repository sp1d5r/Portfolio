import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-900 text-white font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Outlet />
    </motion.div>
  );
};

export default MainLayout;