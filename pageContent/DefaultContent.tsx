// components/content/DefaultContent.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';

interface DefaultContentProps {
  activeFile: string;
}

const DefaultContent: FC<DefaultContentProps> = ({ activeFile }) => {
  return (
    <motion.div
      key={activeFile}
      className="flex-1 bg-[#1E1E1E] text-white p-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.h1 className="text-2xl font-bold" initial={{ x: -50 }} animate={{ x: 0 }}>
        {activeFile}
      </motion.h1>
      <motion.p className="mt-4" initial={{ x: -50 }} animate={{ x: 0 }} transition={{ delay: 0.1 }}>
        This is the content of {activeFile}. Customize this section for each file.
      </motion.p>
    </motion.div>
  );
};

export default DefaultContent;
