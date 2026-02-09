import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Terminal, Menu, X, Play } from 'lucide-react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const navigate = useNavigate();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: 'Problem', href: '/problem' },
        { name: 'Specification', href: '/spec' },
    ];

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <motion.nav
            className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container nav-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src={logo} alt="MominAI Logo" className="logo-image" />
                </Link>

                {/* Desktop Links */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.href} className="nav-link">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="nav-actions desktop-only">
                    <button onClick={() => navigate('/demo')} className="primary-btn"><Play size={16} /> Watch Demo</button>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isMobileMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mobile-nav-links">
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.href} className="mobile-nav-link" onClick={closeMenu}>
                                    {link.name}
                                </Link>
                            ))}
                            <button onClick={() => { navigate('/demo'); closeMenu(); }} className="primary-btn mobile-btn"><Play size={16} /> Watch Demo</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
