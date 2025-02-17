// components/Footer.tsx 
import { FC } from 'react';

import { VscGitMerge } from "react-icons/vsc";
import { XCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface FooterProps {
  screenWidth: number;
  style?: React.CSSProperties; 

}


const Footer: FC<FooterProps> = ({ screenWidth, style }) => {
  const isMobile = screenWidth < 768;

  return (
    <div  className="bg-[#1E1E1E] w-full text-gray-400 text-xs h-8 flex items-center justify-between px-4 border-t border-gray-700" style={style}>
      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/ChristosG/visual-studio-webapp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 hover:text-gray-200"
        >
          <VscGitMerge className="h-4 w-4 text-gray-400" />
          <span>main</span>
        </a>
        <div className="flex items-center space-x-1">
          <XCircleIcon className="h-4 w-4 text-gray-400" />
          <span>0</span>
        </div>
        <div className="flex items-center space-x-1">
          <ExclamationTriangleIcon className="h-4 w-4 text-gray-400" />
          <span>0</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {!isMobile && <span>Ln 1, Col 1</span>} 
        {!isMobile && <span>UTF-8</span>}      
        {!isMobile && <span>CRLF</span>}     
        <span>TypeScript JSX</span>
      </div>
    </div>
  );
};

export default Footer;