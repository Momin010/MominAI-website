import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { sendWelcomeEmail } from '../lib/email';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Waitlist.css';

const Waitlist = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [isJoined, setIsJoined] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user has already joined in this session/browser
        const hasJoined = localStorage.getItem('mominai_waitlist_joined');
        if (hasJoined) {
            setIsJoined(true);
        }
    }, []);

    const handleSuccess = () => {
        localStorage.setItem('mominai_waitlist_joined', 'true');
        setIsJoined(true);
        navigate('/thank-you');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const { error } = await supabase
                .from('waitlist')
                .insert([{ email }]);

            if (error) {
                if (error.code === '23505') {
                    setMessage({ type: 'error', text: 'This email is already on the waitlist!' });
                    setTimeout(() => handleSuccess(), 2000);
                } else {
                    throw error;
                }
            } else {
                setMessage({ type: 'success', text: 'You have been added to the waitlist!' });
                handleSuccess();
            }
        } catch (error) {
            console.error('Waitlist error:', error);
            setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin + '/thank-you'
                }
            });
            if (error) throw error;
        } catch (error) {
            console.error('Auth error:', error);
            setMessage({ type: 'error', text: 'Google Sign-in failed. Please try again.' });
            setLoading(false);
        }
    };

    if (isJoined) return null;

    return (
        <section className="waitlist-section" id="waitlist">
            <div className="container">
                <motion.div
                    className="waitlist-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="waitlist-content">
                        <h2 className="waitlist-title">Join the <span className="text-gradient">Waitlist</span></h2>
                        <p className="waitlist-subtitle">
                            Be the first to experience the future of agent-native execution.
                            Sign up with Google for a faster experience.
                        </p>

                        <div className="auth-options">
                            <form onSubmit={handleSubmit} className="waitlist-form">
                                <div className="input-group">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={loading}
                                        className="waitlist-input"
                                    />
                                    <button type="submit" className="waitlist-btn primary-btn" disabled={loading}>
                                        {loading ? 'Joining...' : <>Join <Send size={18} /></>}
                                    </button>
                                </div>
                            </form>

                            <div className="divider">
                                <span>OR</span>
                            </div>

                            <button
                                onClick={handleGoogleLogin}
                                className="google-btn secondary-btn"
                                disabled={loading}
                            >
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width="18" />
                                Continue with Google
                            </button>
                        </div>

                        <AnimatePresence>
                            {message.text && (
                                <motion.div
                                    className={`message-toast ${message.type}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {message.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                                    <span>{message.text}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="waitlist-decoration">
                        <div className="decor-circle decor-1"></div>
                        <div className="decor-circle decor-2"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Waitlist;
