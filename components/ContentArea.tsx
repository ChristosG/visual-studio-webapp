// components/ContentArea.tsx
import { FC, JSX, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const HomeContent = dynamic(() => import('../pageContent/HomeContent'));
const GitContent = dynamic(() => import('../pageContent/GitContent'));
const DefaultContent = dynamic(() => import('../pageContent/DefaultContent'));
const ResumeContent = dynamic(() => import('../pageContent/ResumeContent'), { ssr: false });
const ContactContent = dynamic(() => import('../pageContent/ContactContent'));
const ProjectContent = dynamic(() => import('../pageContent/ProjectsContent'));




interface ContentAreaProps {
  activeFile: string;
  onOpenFile?: (file: string) => void;
}

interface Repo {
  name: string;
  html_url: string; 
}

const ContentArea: FC<ContentAreaProps> = ({ activeFile, onOpenFile }) => {
  const [repos, setRepos] = useState<Repo[]>([]); 

  useEffect(() => {
    const fetchRepos = async () => {
      if (activeFile === 'github') {
        try {
          const response = await fetch('https://api.github.com/users/ChristosG/repos');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data: Repo[] = await response.json(); 
          setRepos(data);  
        } catch (error) {
          console.error('Error fetching repositories:', error);
        }
      }
    };

    fetchRepos();
  }, [activeFile]);


  const componentsMap: { [key: string]: JSX.Element } = {
    'home.jsx': <HomeContent key="home" onOpenResumeClick={() => onOpenFile?.('resume.html')} onOpenContactClick={() => onOpenFile?.('contact.yml')} />,
    'github': <GitContent repos={repos} key="github" />, 
    'resume.html': <ResumeContent key="resume" />,
    'contact.yml': <ContactContent key="contact" />,
    'projects.py': <ProjectContent key="projects" />,

  };

  const ActiveComponent = componentsMap[activeFile] || <DefaultContent activeFile={activeFile} key={activeFile} />

  return (

    <AnimatePresence mode="wait" >

      {ActiveComponent}
    </AnimatePresence>
  );
};

export default ContentArea;