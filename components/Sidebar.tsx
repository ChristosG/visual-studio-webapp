// components/Sidebar.tsx

import { FC } from 'react';
import { SiJavascript, SiHtml5, SiPython, SiCss3, SiLinkedin, SiGithub } from 'react-icons/si';

interface SidebarProps {
  activeFile: string;
  setActiveFile: (file: string) => void;
  screenWidth: number;
  style?: React.CSSProperties;
}

const Sidebar: FC<SidebarProps> = ({ activeFile, setActiveFile, screenWidth, style }) => {
  const isMobile = screenWidth < 768;

  const icons = [
    { icon: SiJavascript, file: 'home.jsx', color: '#F7DF1E', tooltip: 'Home', position: 'top' },
    { icon: SiHtml5, file: 'resume.html', color: '#E34F26', tooltip: 'Resume', position: 'top' },
    { icon: SiGithub, file: 'github', color: 'white', tooltip: 'GitHub', position: 'top' },
    { icon: SiCss3, file: 'contact.yml', color: '#1572B6', tooltip: 'Contact', position: 'top' },
    
    { icon: SiPython, file: 'projects.py', color: '#3776AB', tooltip: 'Projects', position: 'bottom' },
    { icon: SiLinkedin, file: 'linkedin', color: '#3E66BB', tooltip: 'LinkedIn', position: 'bottom', url: 'https://linkedin.com/in/cgrigoriadis' },
  ];

  const handleIconClick = (file: string) => {
    setActiveFile(file);
  };

  return (
    <div
      className={`bg-[#252526] text-white flex flex-col items-center transition-width duration-300`}
      style={style}
    >
      <div className="flex flex-col items-center w-full pt-4 space-y-4 flex-grow">
        {icons
          .filter(({ position }) => position === 'top')
          .map(({ icon: Icon, file, color, tooltip }) => (
            <div
              key={file}
              className={`cursor-pointer relative group w-full flex items-center justify-center h-12 ${
                activeFile === file ? 'border-l-4 border-blue-500 bg-[#333333]' : '' 
              }`}
              onClick={() => handleIconClick(file)}
            >
              <Icon size={isMobile ? 20 : 24} color={activeFile === file ? color : '#6A6A6A'} />
              <span className="absolute left-16 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {tooltip}
              </span>
            </div>
          ))}
      </div>

      <div className="flex flex-col items-center w-full pb-4 space-y-4">
        {icons
          .filter(({ position }) => position === 'bottom')
          .map(({ icon: Icon, file, color, tooltip, url }) => (
            <div
              key={file}
              className={`cursor-pointer relative group w-full flex items-center justify-center h-12 ${
                activeFile === file ? 'border-l-4 border-blue-500 bg-[#333333]' : ''
              }`}
              onClick={() => {
                if (file === 'linkedin') {
                  window.open(url, '_blank');
                } else {
                  handleIconClick(file);
                }
              }}
            >
              <Icon size={isMobile ? 20 : 24} color={activeFile === file ? color : '#6A6A6A'} />
              <span className="absolute left-16 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {tooltip}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;