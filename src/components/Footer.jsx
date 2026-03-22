import { Terminal } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <footer className={`footer ${isHome ? 'with-fade' : ''}`}>
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src={logo} alt="Mowis AI Logo" className="logo-image small" />
                    </div>
                    <p className="footer-desc">
                        The agent-native execution substrate. Built for the next generation of autonomous systems.
                    </p>
                    <div className="copyright" style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '40px' }}>
                        <span>© {new Date().getFullYear()} Mowis AI Inc. All rights reserved.</span>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <a href="https://www.linkedin.com/company/mowis-ai/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>LinkedIn</a>
                            <a href="https://www.instagram.com/mowis.ai/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>Instagram</a>
                        </div>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h4>Product</h4>
                        <Link to="/agent-runtime">Agent Runtime</Link>
                        <Link to="/governance">Governance</Link>
                        <Link to="/security">Security</Link>
                    </div>
                    <div className="link-group">
                        <h4>Resources</h4>
                        <Link to="/documentation">Documentation</Link>
                        <Link to="/api-reference">API Reference</Link>
                        <Link to="/community">Community</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
