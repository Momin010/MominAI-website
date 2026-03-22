import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './Stats.css';

const stats = [
    { value: 6, suffix: '', label: 'Constitutional Laws', prefix: '' },
    { value: 100, suffix: '%', label: 'Agent Isolation', prefix: '' },
    { value: 0, suffix: ' ms', label: 'Audit Latency overhead', prefix: '<1' },
    { value: 512, suffix: 'ms', label: 'Cold-start target', prefix: '<' },
];

function CountUp({ target, prefix, suffix, inView }) {
    const [display, setDisplay] = useState('0');
    const hasRun = useRef(false);

    useEffect(() => {
        if (!inView || hasRun.current) return;
        hasRun.current = true;
        let start = 0;
        const duration = 1400;
        const startTime = performance.now();
        const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const val = Math.round(eased * target);
            setDisplay(String(val));
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [inView, target]);

    if (prefix) return <>{prefix}{suffix}</>;
    return <>{display}{suffix}</>;
}

const Stats = () => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.4 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="stats-section" ref={ref}>
            <div className="container">
                <motion.div
                    className="stats-bar"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {stats.map((s, i) => (
                        <div key={i} className="stat-item">
                            <div className="stat-value">
                                <CountUp target={s.value} prefix={s.prefix} suffix={s.suffix} inView={inView} />
                            </div>
                            <div className="stat-label">{s.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
