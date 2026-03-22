import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Placeholder.css';

const Placeholder = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const title = location.pathname
        .replace('/', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <div className="placeholder-page">
            <div className="container placeholder-container">
                <motion.div
                    className="placeholder-content glass-panel"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="placeholder-title">{title}</h1>
                    <p className="placeholder-text">
                        This page is currently under construction. Please check back later for updates on {title}.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
                        <button onClick={() => navigate(-1)} className="secondary-btn">
                            <ArrowLeft size={18} /> Go Back
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Placeholder;
