import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <motion.div 
      className="min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </div>
    </motion.div>
  );
};

export default MainLayout;