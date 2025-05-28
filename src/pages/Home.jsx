import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4">Avishek Gyanchand</h1>
        <h2 className="text-2xl mb-8">Senior Engineering Manager</h2>
        <div className="space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
          >
            <Link to="/projects">View Projects</Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
          >
            <Link to="/contact">Contact Me</Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
