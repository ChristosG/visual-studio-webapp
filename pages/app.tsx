import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TabBar from '../components/TabBar';
import ContentArea from '../components/ContentArea';
import Footer from '../components/Footer';
import { useState } from 'react';
import { motion } from 'framer-motion'

// import ParticlesBackground from '../components/ParticlesBackground';
// <div className="relative min-h-screen overflow-hidden bg-animated-gradient">
//     <ParticlesBackground />

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
    <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.5 }}
  >

    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar activeFile={activeFile} setActiveFile={handleOpenFile} />
        <div className="flex flex-col flex-1">
          <TabBar openFiles={openFiles} activeFile={activeFile} setActiveFile={handleOpenFile} />
          <ContentArea activeFile={activeFile} onOpenFile={handleOpenFile}/>
        </div>
      </div>

      <Footer />
    </div>


    </motion.div>

  );
};

export default Index;

// // pages/index.tsx
// import { motion } from 'framer-motion';
// import ParticlesBackground from '../components/ParticlesBackground'; // from earlier snippet

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 }
// };

// export default function IndexPage() {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-animated-gradient text-white">
//       <ParticlesBackground />

//       {/* Page content */}
//       <motion.div
//         className="relative z-10 flex items-center justify-center h-screen"
//         variants={containerVariants}
//         initial="hidden"
//         animate="show"
//       >
//         <motion.div variants={itemVariants} className="text-center space-y-8">
//           <h1 className="text-5xl font-bold">Hello, I'm Christos</h1>
//           <p className="text-xl">Full-Stack & AI Engineer</p>
//           <motion.button
//             variants={itemVariants}
//             className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-lg
//                        hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300
//                        transition-colors duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             View Resume
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }
