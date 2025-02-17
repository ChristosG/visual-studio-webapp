// pageContent/HomeContent.tsx
import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import Typewriter from '../components/Typewriter';
import Link from 'next/link';

interface HomeContentProps {
  onOpenResumeClick?: () => void;
  onOpenContactClick?: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const skillVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

const HomeContent: FC<HomeContentProps> = ({ onOpenResumeClick, onOpenContactClick }) => {
  const skills = [
    'Polyglot Development', 'Integrations', 'APIs', 'Microservices',
    'Containerization', 'Docker', 'Pytorch', 'Kafka', 'Redis', 'MLOps',
    'LLMs', 'Generative AI', 'Triton', 'TensorRT', 'Computer Vision', 'Apache Spark',
  ];

  return (
    <motion.div
      className="flex flex-col justify-center items-center h-full p-4 md:p-8 bg-animated-gradient"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >

      <div className="max-w-4xl w-full text-left font-inter space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4">
          <motion.h1
            className="font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Christos Grigoriadis
          </motion.h1>
          <motion.div
            className="text-xl md:text-2xl font-semibold leading-snug tracking-wide text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Typewriter text="Software Engineer | Specializing in AI" />
          </motion.div>
        </div>

        <motion.div
          className="space-y-3 md:space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-base md:text-lg leading-relaxed text-white">
            <strong>Broad Technical Proficiency</strong> &mdash; Skilled in
            translating complex requirements into high-quality, production-ready
            solutions, regardless of programming language or platform. Expert in
            integration workflows, API/microservice architecture, and modern
            AI-driven solutions.
          </p>
        </motion.div>

        <motion.div
          className="space-y-3 md:space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-white">Skill Set</h2>
          <motion.div
            className="flex flex-wrap gap-2 md:gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                variants={skillVariants}
                className="bg-[#2D2D2D] shadow-md border border-[#3D3D3D] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-base shadow-md flex-shrink-0 whitespace-nowrap"
                whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px rgb(255, 204, 0)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
            <motion.button
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-lg 
                       hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 
                       transition-colors duration-300 w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={onOpenResumeClick}
            >
              Resume
            </motion.button>
          
            <motion.button
              className="bg-transparent text-yellow-500 border border-yellow-500 px-6 py-3 rounded-full 
                       font-semibold shadow-lg hover:bg-yellow-500 hover:text-black 
                       focus:outline-none focus:ring-2 focus:ring-yellow-300 
                       transition-colors duration-300 w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={onOpenContactClick}
            >
              Contact
            </motion.button>
          
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomeContent;