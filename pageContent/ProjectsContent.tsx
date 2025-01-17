// pageContent/ProjectContent.tsx

import { FC, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { projects } from '../data/projectsData'; // Adjust import path

// AnimatePresence variants for the grid and detail views
const gridVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -20 },
};

const detailVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -20 },
};

// Sidebar list animation
const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.07 },
  },
};
const sidebarItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

// The main component
const ProjectContent: FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'detail'>('grid');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Identify the selected project for the detail view
  const selectedProject = projects.find((p) => p.id === selectedId) || null;

  // Handle click on a project from the grid
  const handleSelectProject = (id: number) => {
    setSelectedId(id);
    setViewMode('detail');
  };

  // Back to grid from the detail view
  const handleBackToGrid = () => {
    setViewMode('grid');
    setSelectedId(null);
  };

  return (
    <motion.div
      className="relative  bg-animated-gradient flex-1 bg-[#1E1E1E] text-white p-4 md:p-8 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <AnimatePresence mode="wait">
        {viewMode === 'grid' && (
          <motion.div
            key="gridView"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-5xl mx-auto w-full space-y-8 font-inter"
          >
            {/* Heading */}
            <div className="text-center">
              <h2
                className="text-3xl md:text-4xl font-extrabold mb-3
                           bg-clip-text text-transparent
                           bg-gradient-to-r from-primaryDark to-accent"
              >
                My Projects
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto">
                Here are some of my software & AI projects. Click any to see details.
              </p>
            </div>

            {/* Projects Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              // If you want a staggered entrance for each card:
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="relative flex flex-col bg-[#2A2A2A] p-6 
                             rounded-md shadow-lg cursor-pointer 
                             shadow-md border border-[#3D3D3D]
                             min-h-[240px]"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    rotateY: 4,
                    boxShadow: '0 8px 24px rgba(255, 215, 0, 0.2)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 15,
                  }}
                  onClick={() => handleSelectProject(project.id)}
                >
                  {/* Optional preview image */}
                  {project.previewImage && (
                    <div className="mb-3 rounded-md overflow-hidden">
                      <img
                        src={project.previewImage}
                        alt={project.name}
                        className="w-full h-36 object-cover"
                      />
                    </div>
                  )}

                  <h3 className="text-xl font-bold mb-2 leading-snug">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <span
                    className="mt-4 inline-block text-primaryDark 
                               border border-primaryDark px-4 py-2 
                               rounded-full text-sm font-semibold 
                               transition-colors duration-300
                               hover:text-black hover:bg-primaryDark
                    "
                  >
                    View Details
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {viewMode === 'detail' && selectedProject && (
          <motion.div
            key="detailView"
            variants={detailVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex w-full h-full font-inter"
          >
            {/* Sidebar */}
            <motion.div
              className="hidden md:block w-1/3 lg:w-1/4 bg-[#2A2A2A] 
                         rounded-md p-4 overflow-y-auto mr-4"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-xl font-bold mb-4 text-center">Projects</h2>
              <div className="flex flex-col gap-3">
                {projects.map((p) => (
                  <motion.div
                    key={p.id}
                    variants={sidebarItemVariants}
                    whileHover={{
                      rotateY: 3,
                      boxShadow: '0 6px 20px rgba(255, 215, 0, 0.15)',
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    onClick={() => setSelectedId(p.id)}
                    className={`cursor-pointer rounded-md p-3 
                      ${p.id === selectedId ? 'bg-[#444]' : 'bg-[#333]'}
                      hover:bg-[#3A3A3A] transition-colors
                      min-h-[3rem] flex items-center
                    `}
                  >
                    <p className="font-semibold text-sm sm:text-base">
                      {p.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Detail area */}
            <div className="flex-1 bg-[#2A2A2A] rounded-md p-4 relative overflow-auto">
              <div className="flex flex-col h-full">
                {/* Heading */}
                <h2
                  className="text-2xl md:text-3xl font-bold mb-2 
                             bg-clip-text text-transparent
                             bg-gradient-to-r from-primaryDark to-accent"
                >
                  {selectedProject.name}
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Optional Image */}
                {selectedProject.previewImage && (
                  <div className="mb-4">
                    <img
                      src={selectedProject.previewImage}
                      alt={selectedProject.name}
                      className="w-full h-auto rounded-md shadow-md"
                    />
                  </div>
                )}

                {/* Link to GitHub */}
                <div className="mt-auto">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-black px-6 py-3 
                               rounded-full font-semibold shadow-lg
                               hover:bg-primaryDark 
                               focus:outline-none focus:ring-2 
                               focus:ring-yellow-300
                               transition-colors duration-300
                               mr-4"
                  >
                    View on GitHub
                  </a>

                  {/* Back to Grid Button */}
                  <button
                    onClick={handleBackToGrid}
                    className="inline-block bg-transparent text-primaryDark
                               border border-primaryDark px-6 py-3 rounded-full 
                               font-semibold shadow-lg hover:bg-primaryDark 
                               hover:text-black focus:outline-none focus:ring-2 
                               focus:ring-yellow-300 transition-colors duration-300
                    "
                  >
                    Back to Grid
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectContent;
