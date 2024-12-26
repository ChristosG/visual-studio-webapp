import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TabBar from '../components/TabBar';
import ContentArea from '../components/ContentArea';
import Footer from '../components/Footer';
import { useState } from 'react';

const Index = () => {
  const [openFiles, setOpenFiles] = useState(['home.jsx', 'resume.html', 'projects.py', 'contact.yml']);
  const [activeFile, setActiveFile] = useState('home.jsx');

  const handleOpenFile = (file: string) => {
    if (!openFiles.includes(file)) {
      setOpenFiles([...openFiles, file]);
    }
    setActiveFile(file);
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Top Navigation Bar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar activeFile={activeFile} setActiveFile={handleOpenFile} />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1">
          <TabBar openFiles={openFiles} activeFile={activeFile} setActiveFile={handleOpenFile} />
          <ContentArea activeFile={activeFile} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;