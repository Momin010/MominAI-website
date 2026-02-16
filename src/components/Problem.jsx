import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
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

                <div className="comparison-grid">
                    {/* Status Quo Card */}
                    <motion.div
                        className="problem-card status-quo glass-panel"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="card-header">
                            <AlertTriangle className="icon-alert" />
                            <h3>Current Reality</h3>
                        </div>
                        <ul className="problem-list">
                            <li>
                                <span className="dot red"></span>
                                <span>Direct Host OS Access</span>
                            </li>
                            <li>
                                <span className="dot red"></span>
                                <span>Unsafe Tool Execution</span>
                            </li>
                            <li>
                                <span className="dot red"></span>
                                <span>Ad-hoc Memory</span>
                            </li>
                            <li>
                                <span className="dot red"></span>
                                <span>No Sub-agent Isolation</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* MowisAI Solution Card */}
                    <motion.div
                        className="problem-card solution glass-panel"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="card-header">
                            <ShieldCheck className="icon-success" />
                            <h3>MowisAI Runtime</h3>
                        </div>
                        <ul className="problem-list">
                            <li>
                                <span className="dot green"></span>
                                <span>Sandboxed Execution Domains</span>
                            </li>
                            <li>
                                <span className="dot green"></span>
                                <span>Governed Capabilities & Tools</span>
                            </li>
                            <li>
                                <span className="dot green"></span>
                                <span>Structured Memory Buckets</span>
                            </li>
                            <li>
                                <span className="dot green"></span>
                                <span>Hierarchical Permissions</span>
                            </li>
                        </ul>
                        <div className="card-glow"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
