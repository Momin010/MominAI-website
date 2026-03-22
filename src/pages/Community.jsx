import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Linkedin, Instagram } from 'lucide-react';
import bgImage from '../assets/background.png';

const Community = () => {
    const navigate = useNavigate();

    return (
        <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '80px', background: '#000' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', zIndex: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 10, 10, 0.7)', backdropFilter: 'blur(16px)', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)', zIndex: 2, pointerEvents: 'none' }} />

            <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center', maxWidth: '600px', width: '100%', paddingTop: '160px' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '60px 40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.5)' }}>
                    <div style={{ width: '80px', height: '80px', background: 'var(--gradient-main)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', color: '#fff' }}>
                        <Users size={36} />
                    </div>
                    <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '16px' }}>Join the Movement</h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '40px' }}>
                        Connect with the Mowis AI team, catch our latest updates, and be part of the autonomous AI revolution.
                    </p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                        <a href="https://www.linkedin.com/company/mowis-ai/" target="_blank" rel="noopener noreferrer" className="secondary-btn large" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Linkedin size={20} /> Connect on LinkedIn
                        </a>
                        <a href="https://www.instagram.com/mowis.ai/" target="_blank" rel="noopener noreferrer" className="secondary-btn large" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Instagram size={20} /> Follow on Instagram
                        </a>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={() => navigate(-1)} className="outline-btn">
                            <ArrowLeft size={18} /> Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Community;
