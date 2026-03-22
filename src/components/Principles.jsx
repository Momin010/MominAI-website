import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './Principles.css';

const principles = [
    { title: 'Agent-Native Architecture', desc: 'Built from scratch for agents, not retrofitted from process models or containers designed for humans.' },
    { title: 'Security as a Substrate', desc: 'Isolation and governance live at the execution layer — not in middleware or application code that agents can bypass.' },
    { title: 'Transparent by Design', desc: 'Every computation is traceable. Every agent action produces a signed, immutable audit entry.' },
    { title: 'Composable Trust', desc: 'Agents can delegate capability to child agents with scoped, revocable permissions — full trust hierarchies.' },
];

const codeLines = [
    { type: 'comment', text: '# Spawning an isolated agent instance' },
    { type: 'key', text: 'substrate', suffix: '.spawn({' },
    { type: 'prop', text: '  id', value: '"agent-7f2a",' },
    { type: 'prop', text: '  memory_limit', value: '"512mb",' },
    { type: 'prop', text: '  network', value: '["api.openai.com"],' },
    { type: 'prop', text: '  fs_access', value: '"/sandbox/task-42",' },
    { type: 'prop', text: '  audit', value: 'true,' },
    { type: 'bracket', text: '})' },
    { type: 'blank', text: '' },
    { type: 'comment', text: '# Output' },
    { type: 'success', text: '✓ Agent spawned with enforced isolation' },
    { type: 'success', text: '✓ Audit stream attached to ledger' },
    { type: 'success', text: '✓ Constitutional laws loaded' },
];

const Principles = () => {
    return (
        <section id="principles" className="section principles-section">
            <div className="container principles-container">

                {/* Left: terminal */}
                <motion.div
                    className="principles-terminal"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                    <div className="terminal-chrome">
                        <span className="chrome-dot red"></span>
                        <span className="chrome-dot yellow"></span>
                        <span className="chrome-dot green"></span>
                        <span className="chrome-title">mowis-substrate — zsh</span>
                    </div>
                    <div className="terminal-body">
                        {codeLines.map((line, i) => (
                            <motion.div
                                key={i}
                                className={`code-line code-${line.type}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.07, duration: 0.3 }}
                            >
                                {line.type === 'prop' ? (
                                    <>
                                        <span className="code-indent">&nbsp;&nbsp;</span>
                                        <span className="code-key">{line.text.trim()}</span>
                                        <span className="code-colon">:</span>
                                        <span className="code-val">&nbsp;{line.value}</span>
                                    </>
                                ) : line.type === 'key' ? (
                                    <>
                                        <span className="code-keyword">{line.text}</span>
                                        <span className="code-punct">{line.suffix}</span>
                                    </>
                                ) : (
                                    line.text
                                )}
                            </motion.div>
                        ))}
                        <div className="terminal-cursor" />
                    </div>
                </motion.div>

                {/* Right: principles list */}
                <motion.div
                    className="principles-text"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                    <div className="principles-eyebrow">Core Principles</div>
                    <h2 className="section-title principles-title">
                        The foundation<br />
                        <span className="text-gradient">MowisAI is built on</span>
                    </h2>
                    <p className="principles-lead">
                        Not a set of policies — a set of enforced substrate guarantees that every agent inherits automatically.
                    </p>

                    <ul className="principles-list">
                        {principles.map((p, i) => (
                            <motion.li
                                key={i}
                                className="principle-item"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.5 }}
                            >
                                <CheckCircle2 size={18} className="principle-check" />
                                <div>
                                    <strong>{p.title}</strong>
                                    <p>{p.desc}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Principles;
