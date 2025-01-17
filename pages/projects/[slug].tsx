// pages/projects/[slug].tsx
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { projects } from '../../data/projectsData'; // same array used in ProjectContent
import Link from 'next/link';

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query; // e.g. "ai-chatbot"

  // Find the matching project
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <motion.div
        className="h-screen bg-[#1E1E1E] flex items-center justify-center text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-xl">Project not found.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-[#1E1E1E] text-white p-8 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-4xl w-full font-inter space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1
            className="text-3xl md:text-4xl font-extrabold 
                       bg-clip-text text-transparent
                       bg-gradient-to-r from-primaryDark to-accent"
          >
            {project.name}
          </h1>
          <p className="text-gray-300">{project.description}</p>
        </div>

        {/* Preview Image (if any) */}
        {project.previewImage && (
          <motion.div
            className="w-full rounded-md overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img
              src={project.previewImage}
              alt={project.name}
              className="object-cover w-full h-auto"
            />
          </motion.div>
        )}

        {/* Additional Info? 
            Could add bullet points, stack used, challenges, demos, etc. */}

        {/* GitHub Link */}
        <div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-black px-6 py-3 rounded-full font-semibold shadow-lg
                       hover:bg-primaryDark transition-colors duration-300"
          >
            View on GitHub
          </a>
        </div>

        {/* Back Button */}
        <div>
          <Link href="/?activeFile=projects.py" legacyBehavior>
            {/* 
              Alternatively, just router.push('/home') 
              or a dedicated route 
            */}
            <motion.a
              className="text-primaryDark hover:text-accent underline"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              &larr; Back to Projects
            </motion.a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
