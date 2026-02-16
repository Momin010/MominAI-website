import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, Mail, ArrowRight } from 'lucide-react';
import './ThankYou.css';

const ThankYou = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        // Set flag so waitlist stays hidden on Home page
        localStorage.setItem('mominai_waitlist_joined', 'true');
    }, []);

    return (
        <div className="thank-you-page">
            <div className="glow-orb orb-1"></div>
            <div className="glow-orb orb-2"></div>

            <motion.div
                className="thank-you-card glass"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="icon-wrapper"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                >
                    <Mail size={32} />
                </motion.div>

                <h1 className="thank-you-title">You're on the <span className="text-gradient">List!</span></h1>
                <p className="thank-you-text">
                    Thank you for joining the MominAI waitlist. We've sent a confirmation email to your inbox.
                    Stay tuned for early access and exclusive updates.
                </p>

                <div className="thank-you-actions">
                    <button onClick={() => navigate('/')} className="primary-btn">
                        <Home size={18} /> Back to Home
                    </button>
                    <button onClick={() => navigate('/spec')} className="secondary-btn">
                        Read the Spec <ArrowRight size={18} />
                    </button>
                </div>

                <div className="social-proof">
                    <p>Join 2,000+ others already in line.</p>
                </div>
            </motion.div>
        </div>
    );
};

export default ThankYou;
