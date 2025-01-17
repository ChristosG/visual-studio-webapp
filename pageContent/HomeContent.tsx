// components/pageContent/HomeContent.tsx

import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import Typewriter from '../components/Typewriter';

interface HomeContentProps {
  onOpenResumeClick?: () => void;
}

/** Stagger container for skill list */
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      // Each child will animate in sequence, 0.05s apart
      staggerChildren: 0.05,
    },
  },
};

/** Each skill tag animation */
const skillVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

const HomeContent: FC<HomeContentProps> = ({ onOpenResumeClick }) => {
  const skills = [
    'Polyglot Development',
    'Integrations',
    'APIs',
    'Microservices',
    'Containerization',
    'Docker',
    'Pytorch',
    'Kafka',
    'Redis',
    'MLOps',
    'LLMs',
    'Generative AI',
    'Triton',
    'TensorRT',
    'Apache Spark',
  ];

  return (
    <motion.div
      className=" relative  bg-animated-gradient flex-1 bg-[#1E1E1E] text-white flex items-center justify-center p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-4xl w-full text-left font-inter space-y-8">
        {/* Name and Subtitle */}
        <div className="space-y-4">
          <motion.h1
            className="font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Christos Grigoriadis
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl font-semibold leading-snug tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Typewriter text="Software Engineer | Specializing in AI" />
          </motion.div>
        </div>

        {/* Professional Overview */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <br />
          <p className="text-lg leading-relaxed">
            <strong>Broad Technical Proficiency</strong> &mdash; Skilled in
            translating complex requirements into high-quality, production-ready
            solutions, regardless of programming language or platform. Expert in
            integration workflows, API/microservice architecture, and modern
            AI-driven solutions.
          </p>
        </motion.div>

        {/* Skill Set with Stagger Animation */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">Skill Set</h2>

          {/* Container that staggers each skill */}
          <motion.div
            className="flex flex-wrap gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                variants={skillVariants}
                className="bg-[#2D2D2D] shadow-md border border-[#3D3D3D] text-white px-4 py-2 rounded-full text-sm md:text-base shadow-md flex-shrink-0 whitespace-nowrap"
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0px 0px 8px rgb(255, 204, 0)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-4 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* Resume Button triggers the onOpenResumeClick callback */}
          <motion.button
            className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-lg 
                       hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300  
                       transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={onOpenResumeClick}
          >
            Resume
          </motion.button>

          <a href="#contact">
            <motion.button
              className="bg-transparent text-yellow-500 border border-yellow-500 px-6 py-3 rounded-full 
                         font-semibold shadow-lg hover:bg-yellow-500 hover:text-black 
                         focus:outline-none focus:ring-2 focus:ring-yellow-300 
                         transition-colors duration-300"
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
