// Sidebar.tsx
import { FC } from 'react';
import { SiJavascript, SiHtml5, SiPython, SiCss3, SiLinkedin, SiGithub } from 'react-icons/si';

interface SidebarProps {
  activeFile: string;
  setActiveFile: (file: string) => void;
}

const Sidebar: FC<SidebarProps> = ({ activeFile, setActiveFile }) => {
 // const [selectedIcon, setSelectedIcon] = useState(activeFile);

  const icons = [
    { icon: SiJavascript, file: 'home.jsx', color: '#F7DF1E', tooltip: 'JavaScript File', position: 'top' },
    { icon: SiHtml5, file: 'resume.html', color: '#E34F26', tooltip: 'HTML File', position: 'top' },
    { icon: SiPython, file: 'projects.py', color: '#3776AB', tooltip: 'Python File', position: 'top' },
    { icon: SiCss3, file: 'contact.yml', color: '#1572B6', tooltip: 'YAML File', position: 'top' },
    { icon: SiGithub, file: 'github', color: 'white', tooltip: 'GitHub', position: 'bottom' },
    { icon: SiLinkedin, file: 'linkedin', color: '#3E66BB', tooltip: 'LinkedIn', position: 'bottom', url: 'https://linkedin.com/in/cgrigoriadis' },
  ];

  const handleIconClick = (file: string) => {
   // setSelectedIcon(file);
    setActiveFile(file);
  };

  return (
    <div className="bg-[#252526] w-16 text-white flex flex-col items-center pt-4 h-full">
      {/* Top Icons */}
      <div className="space-y-4 w-16 ">
        {icons
          .filter(({ position }) => position === 'top')
          .map(({ icon: Icon, file, color, tooltip }) => (
            <div
              key={file}
              className={`cursor-pointer relative group w-full flex items-center  justify-center h-12 ${
                activeFile === file ? 'border-l-4 border-blue-500' : ''
              }`}
              onClick={() => handleIconClick(file)}
            >
              <Icon size={24} color={activeFile === file ? color : '#6A6A6A'} />
              <span className="absolute left-16 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100">
                {tooltip}
              </span>
            </div>
          ))}
      </div>
      
      {/* Bottom Icons */}
      <div className="mt-auto pb-4 space-y-4 w-16">
        {icons
          .filter(({ position }) => position === 'bottom')
          .map(({ icon: Icon, file, color, tooltip, url }) => (
            <div
              key={file}
              className={`cursor-pointer relative group w-full flex items-center justify-center h-12 ${
                activeFile === file ? 'border-l-4 border-blue-500' : ''
              }`}
              onClick={() => {
                if (file === 'linkedin') {
                  window.open(url, '_blank');
                } else {
                  handleIconClick(file);
                }
              }}
            >
              <Icon size={24} color={activeFile === file ? color : '#6A6A6A'} />
              <span className="absolute left-16 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100">
                {tooltip}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
