// components/ContentArea.tsx
import { FC, JSX, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamic imports for content components
const HomeContent = dynamic(() => import('../pageContent/HomeContent'));
const GitContent = dynamic(() => import('../pageContent/GitContent'));
const DefaultContent = dynamic(() => import('../pageContent/DefaultContent'));
const ResumeContent = dynamic(() => import('../pageContent/ResumeContent'));
const ContactContent = dynamic(() => import('../pageContent/ContactContent'));
const ProjectContent = dynamic(() => import('../pageContent/ProjectsContent'));

//const ProjectsContent = dynamic(() => import('../pageContent/projects.tsx'));

// Import additional components as needed, e.g.:
// const AboutContent = dynamic(() => import('../pages/AboutContent'));

interface ContentAreaProps {
  activeFile: string;
  onOpenFile?: (file: string) => void;  
}

interface Repo {
  name: string;
}

const ContentArea: FC<ContentAreaProps> = ({ activeFile, onOpenFile  }) => {
  const [repos, setRepos] = useState<string[]>([]);

  useEffect(() => { 
    const fetchRepos = async () => {
      if (activeFile === 'github') {
        try {
          const response = await fetch('https://api.github.com/users/ChristosG/repos');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data: Repo[] = await response.json();
          setRepos(data.map((repo) => repo.name));
        } catch (error) {
          console.error('Error fetching repositories:', error);
        }
      }
    };
  
    fetchRepos();
  }, [activeFile]);
  

  // Mapping of activeFile to corresponding components
  const componentsMap: { [key: string]: JSX.Element } = {
    'home.jsx': <HomeContent key="home" onOpenResumeClick={() => onOpenFile?.('resume.html')} />,
    'github': <GitContent repos={repos} key="github" />,
    'resume.html': <ResumeContent key="resume"  />,
    'contact.yml': <ContactContent key="contact" />,
    'projects.py': <ProjectContent key="projects" />,
    //'projects.py' : <ProjectsContent key="projects" />,
    // Add more mappings here as needed, e.g.:
    // 'about.jsx': <AboutContent key="about" />,
  };

  const ActiveComponent = componentsMap[activeFile] || <DefaultContent activeFile={activeFile} key={activeFile} />;

  return (
    
    <AnimatePresence mode="wait">
      {ActiveComponent}
    </AnimatePresence>
  );
};

export default ContentArea;
