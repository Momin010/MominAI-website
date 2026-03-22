import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Terminal, Menu, X, Play } from 'lucide-react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const { scrollY } = useScroll();
    const navigate = useNavigate();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    useEffect(() => {
        if (isMobileMenuOpen) {
            // Prevent scrolling when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            // Restore scrolling when menu is closed
            document.body.style.overflow = '';
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Pitch Deck', href: '/pitch-deck' },
        { name: 'Founders', href: '#founders' },
        { name: 'Specification', href: '/spec' },
        { name: 'Waitlist', href: '#waitlist' },
    ];

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container nav-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src={logo} alt="MowisAI Logo" className="logo-image" />
                </Link>

                {/* Desktop Links */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => {
                        if (link.href.startsWith('#')) {
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="nav-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const el = document.querySelector(link.href);
                                        if (el) {
                                            el.scrollIntoView({ behavior: 'smooth' });
                                        } else {
                                            navigate('/' + link.href);
                                        }
                                        closeMenu();
                                    }}
                                >
                                    {link.name}
                                </a>
                            );
                        }
                        return (
                            <Link key={link.name} to={link.href} className="nav-link">
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="nav-actions desktop-only">
                    <button onClick={() => navigate('/demo')} className="primary-btn"><Play size={16} /> Watch Demo</button>
                </div>

                {/* Mobile Toggle */}
                <div 
                    className="mobile-toggle" 
                    onClick={toggleMenu}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    role="button"
                    tabIndex={0}
                >
                    {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        ref={mobileMenuRef}
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="mobile-menu-title"
                    >
                        <div className="mobile-nav-links">
                            {navLinks.map((link) => {
                                if (link.href.startsWith('#')) {
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="mobile-nav-link"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const el = document.querySelector(link.href);
                                                if (el) {
                                                    el.scrollIntoView({ behavior: 'smooth' });
                                                } else {
                                                    navigate('/' + link.href);
                                                }
                                                closeMenu();
                                            }}
                                        >
                                            {link.name}
                                        </a>
                                    );
                                }
                                return (
                                    <Link key={link.name} to={link.href} className="mobile-nav-link" onClick={closeMenu}>
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <button onClick={() => { navigate('/demo'); closeMenu(); }} className="primary-btn mobile-btn"><Play size={16} /> Watch Demo</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
