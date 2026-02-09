import { motion } from 'framer-motion';
import principlesImg from '../assets/principles.png';
import './Principles.css';

const Principles = () => {
    return (
        <section className="section principles-section">
            <div className="container">
                <motion.div
                    className="principles-visual-wrapper"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="glass-panel principles-panel">
                        <img src={principlesImg} alt="MominAI Principles" className="principles-main-img" />
                        <div className="visual-glow-small"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Principles;
