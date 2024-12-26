// components/content/GitHubContent.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';

interface GitHubContentProps {
  repos: string[];
}

const GitHubContent: FC<GitHubContentProps> = ({ repos }) => {
  return (
    <motion.div
      className="flex-1 bg-[#1E1E1E] text-white p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h1 className="text-2xl font-bold mb-4 col-span-full">GitHub Repositories</h1>
      {repos.length > 0 ? (
        repos.map((repo, index) => (
          <motion.div
            key={index}
            className="bg-[#2D2D2D] p-4 rounded-lg shadow-lg hover:bg-[#3E3E3E] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl font-semibold">{repo}</h2>
            {/* You can add more repo details here if available */}
          </motion.div>
        ))
      ) : (
        <p className="col-span-full">Loading repositories...</p>
      )}
    </motion.div>
  );
};

export default GitHubContent;
