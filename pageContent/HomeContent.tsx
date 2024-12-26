// components/content/HomeContent.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';
import Typewriter from '../components/Typewriter'; 

const HomeContent: FC = () => {
  const skills = [
    'Research', 'Computer Vision', 'Masked Image Modeling', 'LLMs',
    'Generative AI', 'PyTorch', 'TensorFlow', 'Apache Spark',
    'SQL', 'MLOps', 'Software Engineering', 'Bots'
  ];

  return (
    <motion.div
      className="flex-1 bg-[#1E1E1E] text-white flex items-center justify-center p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-4xl w-full text-left font-inter">
        {/* Name */}
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Christos Grigoriadis
        </motion.h1>

        {/* Typewriter Subtitle */}
        <motion.div
          className="text-2xl md:text-3xl font-semibold mb-8 leading-snug tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Typewriter text="Software Engineer | Specializing in AI" />
        </motion.div>

        {/* Skill Set */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Skill Set</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="bg-[#2D2D2D] text-white px-4 py-2 rounded-full text-sm md:text-base shadow-md flex-shrink-0 whitespace-nowrap"
                whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px rgb(255, 204, 0)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Resume
            </motion.button>
          </a>
          <a href="#contact">
            <motion.button
              className="bg-transparent text-yellow-500 border border-yellow-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Contact
            </motion.button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomeContent;
