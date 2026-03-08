import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import problemsImg from '../assets/problems.png';
import './Problem.css';

const Problem = () => {
    return (
        <section id="problem" className="section problem-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">The Broken State of <br />Autonomous Agents</h2>
                    <p className="section-subtitle">
                        Current systems run agents as loose processes on host OSs, creating massive security and reliability gaps.
                    </p>
                </motion.div>

                <motion.div
                    className="problem-visualization"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img src={problemsImg} alt="Problem Visualization" className="problems-image" />
                    <div className="card-glow"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Problem;
