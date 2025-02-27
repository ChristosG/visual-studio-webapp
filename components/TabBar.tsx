// components/TabBar.tsx
import { FC, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiHtml5, SiPython, SiCss3, SiGithub } from 'react-icons/si';

interface TabBarProps {
  openFiles: string[];
  activeFile: string;
  setActiveFile: (file: string) => void;
  style?: React.CSSProperties;
}

const TabBar: FC<TabBarProps> = ({ openFiles, activeFile, setActiveFile, style }) => {
  const tabBarRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLDivElement>(null);

  const icons = [
    { icon: SiJavascript, file: 'home.jsx', color: '#F7DF1E', tooltip: 'JavaScript File', position: 'top' },
    { icon: SiHtml5, file: 'resume.html', color: '#E34F26', tooltip: 'HTML File', position: 'top' },
    { icon: SiPython, file: 'projects.py', color: '#3776AB', tooltip: 'Python File', position: 'top' },
    { icon: SiCss3, file: 'contact.yml', color: '#1572B6', tooltip: 'YAML File', position: 'top' },
    { icon: SiGithub, file: 'github', color: 'white', tooltip: 'GitHub', position: 'bottom' },
  ];

  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeFile]);

  return (
    <div className="bg-[#2D2D2D] text-white flex items-center h-10 border-b border-gray-700 overflow-x-auto overflow-y-hidden hide-scrollbar" style={style} ref={tabBarRef}>
      {openFiles.map((file) => {
        const iconData = icons.find((icon) => icon.file === file);

        return (
          <motion.div
            key={file}
            onClick={() => setActiveFile(file)}
            className={`px-4 py-1 cursor-pointer flex items-center space-x-2 border-r border-gray-600 relative ${
              activeFile === file ? 'bg-[#1E1E1E]' : 'hover:bg-[#333333]'
            }  transition-colors duration-300 shrink-0`}
            layout
            transition={{ duration: 0.3, ease: 'easeOut' }}
            ref={activeFile === file ? activeTabRef : null}
          >
            {iconData && (
              <iconData.icon size={18} color={iconData.color} className="mr-2" />
            )}
            <span className="truncate z-10">{file}</span>

            {activeFile === file && (
              <motion.div
                layoutId="underline"
                className="absolute top-0 left-0 right-0 h-1 bg-blue-500"
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default TabBar;