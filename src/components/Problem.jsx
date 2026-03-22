import { motion } from 'framer-motion';
import { AlertTriangle, Zap, Lock, Globe } from 'lucide-react';
import './Problem.css';

const problems = [
    {
        icon: <AlertTriangle size={20} />,
        title: 'No Native Isolation',
        desc: 'Agents run as loose OS processes — one compromised agent can access everything on the host system.',
    },
    {
        icon: <Zap size={20} />,
        title: 'Uncontrolled Resource Access',
        desc: 'No enforcement of memory, compute, or I/O limits. Runaway agents silently exhaust infrastructure.',
    },
    {
        icon: <Lock size={20} />,
        title: 'Zero Governance Layer',
        desc: 'No audit trails, no permission boundaries, no revocation — you cannot trust what agents actually did.',
    },
    {
        icon: <Globe size={20} />,
        title: 'Network Blind Spots',
        desc: 'Agents freely call any external endpoint. Data exfiltration and SSRF attacks are trivially possible.',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Problem = () => {
    return (
        <section id="problem" className="section problem-section">
            <div className="container problem-container">

                {/* Left — text */}
                <motion.div
                    className="problem-text"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="problem-eyebrow">The Problem</div>
                    <h2 className="section-title problem-title">
                        AI agents are running <span className="text-gradient">completely unsandboxed</span>
                    </h2>
                    <p className="problem-lead">
                        Current systems treat agents as loose scripts on a shared host OS. No isolation, no governance, no accountability.
                    </p>

                    <motion.ul
                        className="problem-list"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {problems.map((p, i) => (
                            <motion.li key={i} className="problem-item" variants={itemVariants}>
                                <span className="problem-icon">{p.icon}</span>
                                <div>
                                    <strong>{p.title}</strong>
                                    <p>{p.desc}</p>
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Right — animated diagram */}
                <motion.div
                    className="problem-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                >
                    <div className="threat-diagram">
                        <div className="diagram-label">Current State — No Substrate</div>

                        <div className="diagram-host">
                            <div className="diagram-host-label">Host OS / Cloud VM</div>

                            <div className="diagram-agents-row">
                                <div className="diagram-agent danger">
                                    <span className="agent-dot pulse-red"></span>
                                    Agent A
                                    <span className="agent-badge bad">Uncontrolled</span>
                                </div>
                                <div className="diagram-agent danger">
                                    <span className="agent-dot pulse-red"></span>
                                    Agent B
                                    <span className="agent-badge bad">Uncontrolled</span>
                                </div>
                                <div className="diagram-agent danger">
                                    <span className="agent-dot pulse-red"></span>
                                    Agent C
                                    <span className="agent-badge bad">Uncontrolled</span>
                                </div>
                            </div>

                            <div className="diagram-arrows">
                                <div className="arrow-line bad-arrow">⬇ Full FS access</div>
                                <div className="arrow-line bad-arrow">⬇ Unrestricted network</div>
                                <div className="arrow-line bad-arrow">⬇ No audit log</div>
                            </div>

                            <div className="diagram-resource">
                                <div className="resource-chip">💾 Files</div>
                                <div className="resource-chip">🌐 Network</div>
                                <div className="resource-chip">🔑 Secrets</div>
                                <div className="resource-chip">⚙️ Processes</div>
                            </div>
                        </div>

                        <div className="diagram-footer-warn">
                            <AlertTriangle size={14} /> No isolation boundary — one breach = full compromise
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Problem;
