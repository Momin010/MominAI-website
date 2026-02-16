import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import './Waitlist.css';

const Waitlist = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

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
                } else {
                    throw error;
                }
            } else {
                setMessage({ type: 'success', text: 'You have been added to the waitlist!' });
                setEmail('');

                // Optional: Clear message after a few seconds
                setTimeout(() => setMessage({ type: '', text: '' }), 5000);
            }
        } catch (error) {
            console.error('Waitlist error:', error);
            setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

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
                            Get early access and exclusive updates.
                        </p>

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
                                    {loading ? 'Joining...' : <>Join Now <Send size={18} /></>}
                                </button>
                            </div>
                        </form>

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
