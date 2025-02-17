// pageContent/ResumeContent.tsx
import { FC, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { FaDownload } from 'react-icons/fa';

pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs";

const ResumeContent: FC = () => {
  const [pdfWidth, setPdfWidth] = useState(0); 
  const containerRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
     
    const calculateWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setPdfWidth(Math.min(containerWidth - 32, 1200)); // 32px padding
      }
    };

    const resizeObserver = new ResizeObserver(entries => {
      calculateWidth();
    });


    calculateWidth();
    window.addEventListener('resize', calculateWidth);


    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
       window.removeEventListener('resize', calculateWidth);
       resizeObserver.disconnect()
    };
  }, []);


  return (
    <motion.div
      className="relative justify-center flex flex-col h-full items-center p-4 md:p-8 bg-animated-gradient " 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto w-full font-inter space-y-8 flex-grow">
          <div className="flex items-center justify-center space-x-4">
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent
                       bg-gradient-to-r from-primaryDark to-accent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My Resume
          </motion.h1>
          <Link href="/resume.pdf" passHref legacyBehavior>
            <motion.a
              download="Christos_Grigoriadis_Resume.pdf"
              className="text-primary hover:text-primaryDark transition-colors duration-300" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} 
              title="Download Resume"
            >
              <FaDownload size={24} /> 
            </motion.a>
          </Link>
        </div>

        <div className="bg-[#2A2A2A] rounded-md p-4 shadow-md overflow-hidden md:h-[70dvh] overflow-y-auto" ref={containerRef}> 
          
            <div className="w-full bg-black overflow-y-auto md:h-full overflow-x-hidden">
              <Document
                file="/resume.pdf"
                //onLoadSuccess={onDocumentLoadSuccess}
                  className="w-full h-full flex justify-center items-center"
              >
                <Page
                  pageNumber={1}
                  renderAnnotationLayer={false}
                  renderTextLayer={true}
                  width={pdfWidth}  
                />
              </Document>
            </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeContent;