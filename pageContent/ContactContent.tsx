// pageContent/ContactContent.tsx

import { FC, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

/** Container animation for staggered child elements */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // Animate each child 0.1s apart
      staggerChildren: 0.1,
    },
  },
};

/** Child items slide up from y: 20 */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ContactContent: FC = () => {
  // Basic form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Show success message
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Example: Replace with real send logic
    console.log('Form Data:', formData);

    // Show success message
    setShowSuccess(true);
    // Reset form
    setFormData({ name: '', email: '', message: '' });

    // Hide success after a few seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  return (
    <motion.div
      className="relative  bg-animated-gradient flex-1 bg-[#1E1E1E] text-white p-8 flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-4xl w-full font-inter relative">
        {/* Success Notification */}
        {showSuccess && (
          <motion.div
            className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg font-semibold z-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
          >
            Your message has been sent!
          </motion.div>
        )}

        {/* Main Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Left Column (Heading + Socials) */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-extrabold mb-3 bg-clip-text 
                           text-transparent bg-gradient-to-r from-primaryDark to-accent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                Get in Touch
              </motion.h2>
              <p className="text-gray-300 leading-relaxed">
                Whether you have a question or just want to say hi, 
                feel free to drop a message. I’ll get back to you soon!
              </p>
            </div>

            <div className="border-t border-gray-600 pt-4 space-y-3">
              <p className="text-gray-400">Or reach me on social media:</p>
              {/* Social Icons */}
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:someone@example.com"
                  className="flex items-center hover:text-primaryDark transition-colors"
                >
                  <FaEnvelope size={22} className="mr-3 text-primary" />
                  someone@example.com
                </a>
                <a
                  href="https://github.com/YourUsername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primaryDark transition-colors"
                >
                  <FaGithub size={22} className="mr-3 text-primary" />
                  GitHub: YourUsername
                </a>
                <a
                  href="https://www.linkedin.com/in/YourLinkedIn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primaryDark transition-colors"
                >
                  <FaLinkedin size={22} className="mr-3 text-primary" />
                  LinkedIn: Your Name
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Contact Form) */}
          <motion.form
            onSubmit={handleSubmit}
            variants={itemVariants}
            className="space-y-6 bg-[#2A2A2A] p-6 rounded-md shadow-md"
          >
            {/* Floating Label: Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full px-3 py-3 bg-[#333] text-white rounded-md outline-none peer
                           focus:ring-2 focus:ring-primaryDark transition-all"
                placeholder=" " // Required for the floating label
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="name"
                className="absolute text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]
                           bg-[#2A2A2A] px-1 ml-2
                           peer-placeholder-shown:top-3 
                           peer-placeholder-shown:ml-3
                           peer-placeholder-shown:text-base 
                           peer-placeholder-shown:text-gray-400
                           peer-placeholder-shown:scale-100
                           peer-focus:top-2
                           peer-focus:ml-2
                           peer-focus:scale-75
                           peer-focus:text-primaryDark
                           left-0"
              >
                Your Name
              </label>
            </div>

            {/* Floating Label: Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full px-3 py-3 bg-[#333] text-white rounded-md outline-none peer
                           focus:ring-2 focus:ring-primaryDark transition-all"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="email"
                className="absolute text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]
                           bg-[#2A2A2A] px-1 ml-2
                           peer-placeholder-shown:top-3 
                           peer-placeholder-shown:ml-3
                           peer-placeholder-shown:text-base 
                           peer-placeholder-shown:text-gray-400
                           peer-placeholder-shown:scale-100
                           peer-focus:top-2
                           peer-focus:ml-2
                           peer-focus:scale-75
                           peer-focus:text-primaryDark
                           left-0"
              >
                Email
              </label>
            </div>

            {/* Floating Label: Message (Resizable) */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full px-3 py-3 bg-[#333] text-white rounded-md outline-none peer
                           focus:ring-2 focus:ring-primaryDark transition-all resize-y" 
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="message"
                className="absolute text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]
                           bg-[#2A2A2A] px-1 ml-2
                           peer-placeholder-shown:top-3 
                           peer-placeholder-shown:ml-3
                           peer-placeholder-shown:text-base 
                           peer-placeholder-shown:text-gray-400
                           peer-placeholder-shown:scale-100
                           peer-focus:top-2
                           peer-focus:ml-2
                           peer-focus:scale-75
                           peer-focus:text-primaryDark
                           left-0"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="bg-primary text-black px-6 py-3 rounded-full font-semibold
                         shadow-lg hover:bg-primaryDark 
                         focus:outline-none focus:ring-2 focus:ring-yellow-300
                         transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactContent;
