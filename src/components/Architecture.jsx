import { motion } from 'framer-motion';
import { Brain, Hammer, Box, Shield, Server } from 'lucide-react';
import archDiagram from '../assets/system artitechure.png';
import './Architecture.css';

const Architecture = () => {
    return (
        <section id="architecture" className="section architecture-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">First-Class Entity Model</h2>
                    <p className="section-subtitle">
                        An agent is not just a prompt. It is a dual-component entity operating within a strict sandbox.
                    </p>
                </motion.div>

                <div className="arch-diagram-container">
                    <motion.div
                        className="arch-visual-wrapper"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="glass-panel diagram-panel">
                            <img src={archDiagram} alt="MominAI Architecture Diagram" className="arch-diagram-img" />
                            <div className="diagram-overlay"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Architecture;
