// pages/app.tsx (Corrected Sticky Layout)
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TabBar from '../components/TabBar';
import ContentArea from '../components/ContentArea';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Index = () => {
  const [openFiles, setOpenFiles] = useState(['home.jsx', 'resume.html', 'projects.py', 'contact.yml']);
  const [activeFile, setActiveFile] = useState('home.jsx');
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpenFile = (file: string) => {
    if (!openFiles.includes(file)) {
      setOpenFiles([...openFiles, file]);
    }
    setActiveFile(file);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen bg-vsBackground"
    >
      <Navbar screenWidth={screenWidth} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }} />

      <div className="flex flex-1" style={{ marginTop: '40px' }}>  {/* Adjust 40px based on your Navbar height */}
        <Sidebar
          activeFile={activeFile}
          setActiveFile={handleOpenFile}
          screenWidth={screenWidth}
          style={{ position: 'fixed', top: '40px', left: 0, bottom: '32px', zIndex: 40, width: screenWidth < 768 ? '3rem' : '4rem' }}  /*Adjust based on Navbar/Footer heights */
        />

        <div className="flex flex-col flex-1" style={{ marginLeft: screenWidth < 768 ? '3rem' : '4rem' }}> {/* Adjust based on Sidebar width */}
          <TabBar openFiles={openFiles} activeFile={activeFile} setActiveFile={handleOpenFile} style={{ position: 'fixed', top: '40px', left: (screenWidth < 768 ? '3rem' : '4rem'), right: 0, zIndex: 30 }} />
          <div className="flex-1 overflow-y-auto" style={{ marginTop: '32px', marginBottom: '32px' }}> {/* Adjust based on TabBar and Footer heights */}
              <ContentArea activeFile={activeFile} onOpenFile={handleOpenFile} />
          </div>
        </div>
      </div>

      <Footer screenWidth={screenWidth} style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50 }} />
    </motion.div>
  );
};

export default Index;