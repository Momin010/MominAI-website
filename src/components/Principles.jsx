import { motion } from 'framer-motion';
import principlesImg from '../assets/principles.png';
import './Principles.css';

const Principles = () => {
    return (
        <section id="principles" className="section principles-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">MominAI's Core <span className="text-gradient">Principles</span></h2>
                    <p className="section-subtitle">
                        Built on the foundation of security, transparency, and agent-native architecture.
                    </p>
                </motion.div>

                <motion.div
                    className="principles-visual-wrapper"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="glass-panel principles-panel">
                        <img src={principlesImg} alt="MowisAI Principles" className="principles-main-img" />
                        <div className="visual-glow-small"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Principles;
