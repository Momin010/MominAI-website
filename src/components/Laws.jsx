import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Eye, Lock, GitBranch, Cpu, ScrollText } from 'lucide-react';
import './Laws.css';

const laws = [
    {
        icon: <ShieldCheck size={20} />,
        number: '01',
        title: 'Isolation by Default',
        desc: 'Every agent instance runs in a dedicated sandbox. Memory, filesystem, and process namespaces are never shared between agents or the host system.',
        tag: 'SECURITY',
        tagColor: '#00a3a3',
    },
    {
        icon: <Eye size={20} />,
        number: '02',
        title: 'Full Observability',
        desc: 'Every action an agent takes — tool calls, I/O, API requests — is logged immutably. Nothing happens in the dark.',
        tag: 'AUDIT',
        tagColor: '#5b8fff',
    },
    {
        icon: <Lock size={20} />,
        number: '03',
        title: 'Least-Privilege Execution',
        desc: 'Agents receive only the permissions they explicitly need for a given task. No implicit elevation. Ever.',
        tag: 'ACCESS',
        tagColor: '#a78bfa',
    },
    {
        icon: <GitBranch size={20} />,
        number: '04',
        title: 'Deterministic Lifecycle',
        desc: 'Agents can be paused, checkpointed, restored, and terminated with full state fidelity. No zombie processes. No runaway threads.',
        tag: 'LIFECYCLE',
        tagColor: '#f59e0b',
    },
    {
        icon: <Cpu size={20} />,
        number: '05',
        title: 'Resource Governance',
        desc: 'Hard limits on CPU, RAM, disk, and network I/O are enforced at the substrate level — not the application layer where agents can bypass them.',
        tag: 'RESOURCES',
        tagColor: '#34d399',
    },
    {
        icon: <ScrollText size={20} />,
        number: '06',
        title: 'Constitutional Compliance',
        desc: 'Behavioral constraints are encoded at the substrate. Agents cannot override the laws that govern them — not through prompting, not through code.',
        tag: 'COMPLIANCE',
        tagColor: '#f472b6',
    },
];

function LawRow({ law, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            className={`law-row ${inView ? 'law-row--active' : ''}`}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            {/* Timeline line + node */}
            <div className="law-timeline">
                <motion.div
                    className="law-node"
                    initial={{ scale: 0, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    animate={inView ? {
                        scale: 1,
                        backgroundColor: law.tagColor,
                        boxShadow: `0 0 20px ${law.tagColor}55`
                    } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span style={{ color: inView ? '#000' : 'rgba(255,255,255,0.3)' }}>
                        {law.icon}
                    </span>
                </motion.div>
                {index < laws.length - 1 && (
                    <div className="law-connector">
                        <motion.div
                            className="law-connector-fill"
                            initial={{ scaleY: 0 }}
                            animate={inView ? { scaleY: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                            style={{ background: law.tagColor }}
                        />
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="law-content">
                <div className="law-header-row">
                    <motion.span
                        className="law-num"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.15, duration: 0.4 }}
                    >
                        {law.number}
                    </motion.span>

                    <motion.h3
                        className="law-title"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        {law.title}
                    </motion.h3>

                    <motion.div
                        className="law-status"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        style={{ borderColor: `${law.tagColor}44`, color: law.tagColor }}
                    >
                        <span
                            className="law-status-dot"
                            style={{ background: law.tagColor }}
                        />
                        {law.tag}
                    </motion.div>
                </div>

                <motion.p
                    className="law-desc"
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {law.desc}
                </motion.p>
            </div>

            {/* Big faint number */}
            <div className="law-bg-number" aria-hidden="true">{law.number}</div>
        </motion.div>
    );
}

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
                    <div className="laws-eyebrow">§ Constitutional Laws</div>
                    <h2 className="section-title">
                        Six laws every agent<br />
                        <span className="text-gradient">must obey</span>
                    </h2>
                    <p className="section-subtitle">
                        Not guidelines. Not suggestions. Substrate-enforced constraints that activate the moment an agent instance is spawned.
                    </p>
                </motion.div>

                <div className="laws-codex">
                    <div className="codex-header">
                        <span className="codex-title">MowisAI Substrate — Constitutional Codex v1.0</span>
                        <span className="codex-status">
                            <span className="codex-dot" /> ALL LAWS ACTIVE
                        </span>
                    </div>

                    <div className="laws-list">
                        {laws.map((law, i) => (
                            <LawRow key={i} law={law} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Laws;
