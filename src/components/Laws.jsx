import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';
import './Laws.css';

const Laws = () => {
    const laws = [
        { title: "No Direct Action", desc: "An agent may never act on the system except through approved tools." },
        { title: "No Privilege Escalation", desc: "No agent or subagent may gain more permissions than explicitly granted." },
        { title: "Hierarchical Authority", desc: "Subagents are always strictly less powerful than their parent." },
        { title: "Explicit Communication", desc: "Agents may only exchange information through explicit, observable mechanisms." },
        { title: "Resource Boundaries", desc: "CPU, RAM, storage, and GPU allocations must be enforced absolutely." },
        { title: "Observability Is Mandatory", desc: "All tool calls, actions, and state transitions must be auditable." },
    ];

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
                        The immutable principles that govern every agent instance within the MominAI substrate.
                    </p>
                </motion.div>

                <div className="laws-grid">
                    {laws.map((law, index) => (
                        <motion.div
                            key={index}
                            className="law-card glass"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="law-number">0{index + 1}</div>
                            <h3>{law.title}</h3>
                            <p>{law.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Laws;
