import { motion } from 'framer-motion';
import bgTexture from '../assets/bg-texture-1.png';
import '../components/Problem.css';

const Problem = () => {
    return (
        <section className="section problem-section">
            <div className="container problem-container">
                <motion.div
                    className="problem-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">The Broken State of <br />Autonomous Agents</h2>
                    <p className="section-subtitle large-text">
                        Current frameworks treat agents as ephemeral scripts running directly on host operating systems.
                        This lack of isolation creates massive security vulnerabilities, unpredictable behaviors,
                        and no standard way to govern tool execution or memory persistence.
                        <br /><br />
                        We need a dedicated runtime that understands the difference between a process and a cognitive entity.
                    </p>
                </motion.div>

                <motion.div
                    className="problem-visual-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <div className="glass-panel problem-panel">
                        <img src={bgTexture} alt="Problem Visualization" className="problem-main-img" />
                        <div className="diagram-overlay"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Problem;
