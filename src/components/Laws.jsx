import { motion } from 'framer-motion';
import inWorkImg from '../assets/in-work.png';
import './Laws.css';

const Laws = () => {
    return (
        <section id="laws" className="section laws-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Constitutional Laws</h2>
                    <p className="section-subtitle">
                        The immutable principles that govern every agent instance within the MowisAI substrate.
                    </p>
                </motion.div>

                <motion.div
                    className="laws-visualization"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <img src={inWorkImg} alt="Constitutional Laws Visualization" className="laws-image" />
                    <div className="visual-glow"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Laws;
