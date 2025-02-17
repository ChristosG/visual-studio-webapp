// pages/index.tsx
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ParticlesBackground from '../components/ParticlesBackground'; 

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen overflow-hidden bg-animated-gradient flex items-center justify-center">
      <ParticlesBackground />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text 
                     text-transparent bg-gradient-to-r from-primaryDark to-accent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
                  <h1 className="text-5xl font-bold">Hello, I&apos;m Christos</h1>
                 <p className="text-xl">Full-Stack & AI Engineer</p>
        </motion.div>

        <motion.button
          className="bg-primary text-black px-8 py-4 rounded-full font-semibold
                     hover:bg-primaryDark focus:outline-none focus:ring-2 
                     focus:ring-yellow-300 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => router.push('/app')}
        >
          Enter
        </motion.button>
      </motion.div>
    </div>
  );
}
