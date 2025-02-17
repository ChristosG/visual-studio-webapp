// pages/app.tsx 
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
      className="flex flex-col  h-[100dvh]"
    >
      <Navbar screenWidth={screenWidth} />

      <div className="flex flex-1">
        <Sidebar activeFile={activeFile} setActiveFile={handleOpenFile} screenWidth={screenWidth} style={{width: '4rem'}}/>

        <div className="flex flex-col flex-1 overflow-x-hidden"> 
          <TabBar openFiles={openFiles} activeFile={activeFile} setActiveFile={handleOpenFile} />
            
          <div className="flex-1 overflow-y-auto overflow-x-auto">
            <ContentArea activeFile={activeFile} onOpenFile={handleOpenFile} />
          </div>
        </div>
      </div>

      <Footer screenWidth={screenWidth} />
    </motion.div>
  );
};

export default Index;