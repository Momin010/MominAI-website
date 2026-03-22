import { motion } from 'framer-motion';
import { Brain, Box, Shield, Server, Layers, ArrowRight } from 'lucide-react';
import archDiagram from '../assets/system artitechure.png';
import './Architecture.css';

const components = [
    {
        icon: <Brain size={18} />,
        name: 'Cognitive Core',
        desc: 'The reasoning engine — isolated from all system resources by default.',
        color: '#00a3a3',
    },
    {
        icon: <Box size={18} />,
        name: 'Execution Sandbox',
        desc: 'Namespaced compute environment with hard resource ceilings.',
        color: '#5b8fff',
    },
    {
        icon: <Shield size={18} />,
        name: 'Policy Enforcer',
        desc: 'Intercepts every action and validates against constitutional laws before execution.',
        color: '#a78bfa',
    },
    {
        icon: <Layers size={18} />,
        name: 'State Ledger',
        desc: 'Append-only, cryptographically signed record of all agent operations.',
        color: '#f59e0b',
    },
    {
        icon: <Server size={18} />,
        name: 'Substrate Kernel',
        desc: 'The host layer — manages lifecycle, scheduling and inter-agent communication.',
        color: '#34d399',
    },
];

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
                    <div className="arch-eyebrow">System Architecture</div>
                    <h2 className="section-title">
                        First-Class <span className="text-gradient">Entity Model</span>
                    </h2>
                    <p className="section-subtitle">
                        An agent is not just a prompt. It is a dual-component entity with a strict separation between cognition and execution.
                    </p>
                </motion.div>

                <div className="arch-content">
                    {/* Diagram */}
                    <motion.div
                        className="arch-diagram-wrapper"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >
                        <div className="arch-diagram-frame">
                            <img src={archDiagram} alt="MowisAI Architecture Diagram" className="arch-diagram-img" />
                            <div className="arch-diagram-glow" />
                        </div>
                    </motion.div>

                    {/* Component list */}
                    <motion.div
                        className="arch-components"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                    >
                        <div className="arch-components-label">Key Components</div>
                        {components.map((c, i) => (
                            <motion.div
                                key={i}
                                className="arch-component-row"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                            >
                                <div className="arch-comp-icon" style={{ color: c.color, background: `${c.color}18` }}>
                                    {c.icon}
                                </div>
                                <div className="arch-comp-text">
                                    <strong style={{ color: c.color }}>{c.name}</strong>
                                    <p>{c.desc}</p>
                                </div>
                                <ArrowRight size={14} className="arch-comp-arrow" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Architecture;
