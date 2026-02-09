import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, FileText } from 'lucide-react';
import heroAbstract from '../assets/hero-abstract.png';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="hero-section">
            <div className="hero-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <span>v0.1 Specification Available</span>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        The Agent-Native <br />
                        <span className="text-gradient">Execution Substrate</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Safety, isolation, and governance for the next generation of autonomous AI.
                        Treating agents as first-class computational entities.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <button onClick={() => navigate('/demo')} className="primary-btn large">
                            <Play size={18} /> Watch Demo
                        </button>
                        <button onClick={() => navigate('/spec')} className="secondary-btn large">
                            <FileText size={18} /> Read the Spec
                        </button>
                    </motion.div>
                </motion.div>

                {/* New Abstract Visual */}
                <motion.div
                    className="hero-visual-wrapper"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                >
                    <img src={heroAbstract} alt="MominAI Abstract" className="hero-abstract-img" />
                    <div className="visual-glow"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
