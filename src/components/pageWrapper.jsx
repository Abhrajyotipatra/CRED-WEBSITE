import { motion } from 'motion/react';

const PageWrapper = ({ children }) => (
  <motion.section
    className="page-container"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.section>
);

export default PageWrapper;
