import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  const [complete, setComplete] = useState(false);

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', overflow: complete ? 'visible' : 'hidden' }}>
      <motion.div
        className="layout"
        initial={{
          scale: 0.5,
          opacity: 0,
          borderRadius: '40px'
        }}
        animate={{
          scale: 1,
          opacity: 1,
          borderRadius: '0px'
        }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1]
        }}
        onAnimationComplete={() => setComplete(true)}
        style={{
          transformOrigin: 'center center',
          margin: '0 auto',
          width: '100%',
          height: complete ? 'auto' : '100vh',
          overflow: complete ? 'visible' : 'hidden',
          backgroundColor: 'var(--bg-page)'
        }}
      >
        <div className="fixed-background" />
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Layout;
