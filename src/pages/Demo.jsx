import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import demoVideo from '../assets/demo.mp4';
import './Demo.css';

const Demo = () => {
    return (
        <section className="demo-section">
            <div className="demo-background">
                <div className="grid-pattern"></div>
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>

            <div className="container demo-container">
                <motion.div
                    className="demo-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h1 className="demo-title">
                        <span className="text-gradient">MowisAI Demo</span>
                    </h1>
                    <p className="demo-subtitle">
                        See our agent-native execution substrate in action
                    </p>
                </motion.div>

                <motion.div
                    className="video-wrapper"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <video
                        className="demo-video"
                        controls
                        autoPlay
                        loop
                        muted
                    >
                        <source src={demoVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
        </section>
    );
};

export default Demo;
