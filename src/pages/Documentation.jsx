import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Shield } from 'lucide-react';
import bgImage from '../assets/background.png';

const Documentation = () => {
    const navigate = useNavigate();

    return (
        <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '80px', background: '#000' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', zIndex: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 10, 10, 0.7)', backdropFilter: 'blur(16px)', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)', zIndex: 2, pointerEvents: 'none' }} />

            <div className="container" style={{ position: 'relative', zIndex: 3, maxWidth: '800px', width: '100%', paddingTop: '160px' }}>
                <button onClick={() => navigate(-1)} className="secondary-btn" style={{ marginBottom: '24px' }}>
                    <ArrowLeft size={18} /> Go Back
                </button>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '60px 40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.5)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
                        <div style={{ width: '60px', height: '60px', background: 'var(--gradient-main)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                            <BookOpen size={28} />
                        </div>
                        <h1 style={{ color: '#fff', fontSize: '2.5rem', margin: 0 }}>Documentation & Security</h1>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '40px' }}>
                        Welcome to the Mowis AI documentation hub. Here you'll find everything you need to know about setting up, integrating, and maintaining the agent.
                    </p>

                    <h3 style={{ color: '#00e5e5', fontSize: '1.4rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Shield size={20} /> Security & Integrity
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '24px' }}>
                        Security is built into our core. Every action performed by the agent passes through a rigorous, transparent sandbox environment. We don't just rely on prompt engineering; we rely on cryptographic state ledgers and hard execution ceilings.
                        <br/><br/>
                        For a deeper dive into our safety bounds, check out our interactive <Link to="/governance" style={{color: '#7fffdf', textDecoration: 'underline'}}>Governance</Link> and <Link to="/agent-runtime" style={{color: '#7fffdf', textDecoration: 'underline'}}>Runtime</Link> visualizers.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Documentation;
