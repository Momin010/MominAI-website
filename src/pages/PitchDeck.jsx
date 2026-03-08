import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './PitchDeck.css';

const PitchDeck = () => {
    const navigate = useNavigate();
    const [isLocal, setIsLocal] = useState(false);

    useEffect(() => {
        // Check if we are running on localhost
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            setIsLocal(true);
        }
    }, []);

    const googleSlidesUrl = "https://docs.google.com/presentation/d/11NdocRHVB5sUfU0lj5CZkRBkDqmiofTl";

    // Google Slides Embed URL
    const embedUrl = `${googleSlidesUrl}/embed?start=false&loop=false&delayms=3000`;
    // Google Slides View URL for full screen
    const viewUrl = `${googleSlidesUrl}/edit?usp=sharing`;
    // Local backup file for download
    const downloadUrl = "/pitchdeck.pptx";

    return (
        <div className="pitchdeck-page">
            <div className="container">
                <motion.div
                    className="pitchdeck-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <button onClick={() => navigate('/')} className="back-btn">
                        <ArrowLeft size={20} /> Back
                    </button>
                    <h1 className="text-gradient">Pitch Deck Preview</h1>
                    <div className="header-actions">
                        <a href={downloadUrl} className="primary-btn sm" download>
                            <Download size={18} /> Download PPTX
                        </a>
                    </div>
                </motion.div>

                {isLocal && (
                    <motion.div
                        className="local-warning glass-panel"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <AlertCircle size={20} className="warning-icon" />
                        <p>
                            <strong>Local Development Note:</strong> The interactive preview requires a public URL.
                            It will work automatically once the site is deployed. For now, please use the download button.
                        </p>
                    </motion.div>
                )}

                <motion.div
                    className="viewer-container glass-panel"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="viewer-toolbar">
                        <div className="dots">
                            <span></span><span></span><span></span>
                        </div>
                        <div className="viewer-url">mowisai_pitch_deck.pptx</div>
                        <a href={viewUrl} target="_blank" rel="noopener noreferrer" className="external-link">
                            <ExternalLink size={14} /> Open Fullscreen
                        </a>
                    </div>

                    <div className="iframe-wrapper">
                        <iframe
                            src={embedUrl}
                            width="100%"
                            height="650px"
                            frameBorder="0"
                            allowFullScreen={true}
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            title="Pitch Deck Preview"
                        >
                            <div className="iframe-fallback">
                                <p>Your browser doesn't support iframes.</p>
                                <a href={googleSlidesUrl} className="primary-btn">View on Google Slides</a>
                            </div>
                        </iframe>
                    </div>

                    <div className="viewer-footer">
                        <p>MowisAI Confidential &copy; 2026. All rights reserved.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PitchDeck;
