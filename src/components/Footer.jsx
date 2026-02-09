import { Terminal } from 'lucide-react';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="logo">
                        <img src={logo} alt="MominAI Logo" className="logo-image small" />
                    </div>
                    <p className="footer-desc">
                        The agent-native execution substrate. Built for the next generation of autonomous systems.
                    </p>
                    <div className="copyright">
                        © {new Date().getFullYear()} MominAI Inc. All rights reserved.
                    </div>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h4>Product</h4>
                        <a href="#">Agent Runtime</a>
                        <a href="#">Governance</a>
                        <a href="#">Security</a>
                    </div>
                    <div className="link-group">
                        <h4>Resources</h4>
                        <a href="#">Documentation</a>
                        <a href="#">API Reference</a>
                        <a href="#">Community</a>
                    </div>
                    <div className="link-group">
                        <h4>Company</h4>
                        <a href="#">Manifesto</a>
                        <a href="#">Blog</a>
                        <a href="#">Careers</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
