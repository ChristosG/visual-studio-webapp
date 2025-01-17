import { VscGitMerge } from "react-icons/vsc"; // GitHub branch icon
import { XCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <div className="bg-[#1E1E1E] w-full text-gray-400 text-xs h-8 flex items-center justify-between px-4 border-t border-gray-700">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* GitHub Branch Icon with Link */}
        <a
          href="https://github.com/your-repo" // Replace with your GitHub repo URL
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 hover:text-gray-200"
        >
          <VscGitMerge className="h-4 w-4 text-gray-400" />
          <span>main</span>
        </a>
        {/* Errors Icon */}
        <div className="flex items-center space-x-1">
          <XCircleIcon className="h-4 w-4 text-gray-400" />
          <span>0</span>
        </div>
        {/* Warnings Icon */}
        <div className="flex items-center space-x-1">
          <ExclamationTriangleIcon className="h-4 w-4 text-gray-400" />
          <span>0</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <span>Ln 1, Col 1</span>
        <span>UTF-8</span>
        <span>CRLF</span>
        <span>TypeScript JSX</span>
      </div>
    </div>
  );
};

export default Footer;
