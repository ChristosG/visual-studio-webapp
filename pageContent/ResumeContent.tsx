// pageContent/ResumeContent.tsx
import { FC, useState } from 'react';
import { motion } from 'framer-motion';

const ResumeContent: FC = () => {
  // In case you want some additional logic, e.g. controlling page size or toggling preview, etc.
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.div
      className="relative  bg-animated-gradient flex-1 bg-[#1E1E1E] text-white p-4 md:p-8 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto w-full font-inter space-y-8">
        {/* Heading */}
        <div className="space-y-4 text-center">
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent 
                       bg-gradient-to-r from-primaryDark to-accent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My Resume
          </motion.h1>
          {/* <p className="text-gray-300 max-w-xl mx-auto">
            Below is a quick preview of my PDF resume. Click the button to 
            download or open it in a new tab.
          </p> */}
        </div>

        {/* PDF Preview Area */}
        <div className="bg-[#2A2A2A] rounded-md p-4 shadow-md">
          {expanded && (
            <div className="w-full aspect-[16/9] md:aspect-[4/3] bg-black">
              {/* Using an iframe or object for PDF embedding */}
              <iframe
                src="/resume.pdf"
                className="w-full h-full"
                title="Resume Preview"
              />
              {/* 
                Or you could do:
                <object data="/resume.pdf" type="application/pdf" width="100%" height="100%">
                  <p>It appears you don't have a PDF plugin. 
                     <a href="/resume.pdf" target="_blank">Open PDF</a>
                  </p>
                </object>
              */}
            </div>
          )}

          {/* Toggle preview if you want that feature */}
          {/* 
          <button
            className="mt-3 text-primaryDark underline"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Hide Preview' : 'Show Preview'}
          </button>
          */}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* Download Button */}
          <motion.a
            href="/resume.pdf"
            download
            className="bg-primary text-black px-6 py-3 rounded-full font-semibold shadow-lg
                       hover:bg-primaryDark focus:outline-none focus:ring-2 
                       focus:ring-yellow-300 transition-colors duration-300 text-center"
            whileHover={{ scale: 1.05 , color: '#1E1E1E'}}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Download Resume
          </motion.a>

          {/* Open in New Tab */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-primaryDark border border-primaryDark px-6 py-3
                       rounded-full font-semibold shadow-lg hover:bg-primaryDark hover:text-black
                       focus:outline-none focus:ring-2 focus:ring-yellow-300 
                       transition-colors duration-300 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Open in New Tab
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeContent;
