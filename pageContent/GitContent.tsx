// components/content/GitHubContent.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

interface GitHubContentProps {
  repos: { name: string; html_url: string }[];
}

const GitContent: FC<GitHubContentProps> = ({ repos }) => {
  const githubProfileUrl = "https://github.com/ChristosG?tab=repositories";

  // Define featured projects.  This is an array of repository names.
  const featuredProjectNames = ["Real-time-transcription-translation", "visual-studio-webapp"];

  // Separate featured and other projects
  const featuredProjects = repos.filter(repo => featuredProjectNames.includes(repo.name));
  const otherProjects = repos.filter(repo => !featuredProjectNames.includes(repo.name));

  return (
    <motion.div
      className="flex flex-col h-full p-4 md:p-8 bg-animated-gradient"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto w-full font-inter space-y-6 md:space-y-8">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.open(githubProfileUrl, '_blank')}>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            GitHub Repositories
          </h1>
          <FiExternalLink size={20} className="text-white" />
        </div>

        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-yellow-400">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProjects.map((repo) => (
                <motion.div
                  key={repo.name}
                  className="bg-[#2A2A2A] p-4 rounded-lg shadow-lg transition-colors duration-300 border border-yellow-500 cursor-pointer" // Distinct border
                  whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgb(255, 204, 0)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(repo.html_url, '_blank')}
                >
                  <h2 className="text-xl font-semibold text-white">{repo.name}</h2>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Section */}
        {otherProjects.length > 0 && (
          <div className="space-y-4 mt-8">  {/* Added mt-8 for spacing */}
            <h2 className="text-xl font-semibold text-gray-300">Other Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {otherProjects.map((repo) => (
                <motion.div
                  key={repo.name}
                  className="bg-[#2A2A2A] p-4 rounded-lg shadow-lg transition-colors duration-300 border border-[#3D3D3D] cursor-pointer"
                  whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgb(255, 204, 0)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(repo.html_url, '_blank')}
                >
                  <h2 className="text-xl font-semibold text-white">{repo.name}</h2>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Handle the case where there are no repos at all */}
        {repos.length === 0 && (
           <p className="text-white">Loading repositories...</p>
        )}
      </div>
    </motion.div>
  );
};

export default GitContent;