import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import bgImage from '../assets/background.png';

const Governance = () => {
    const navigate = useNavigate();
    const mermaidRef = useRef(null);

    useEffect(() => {
        mermaid.initialize({ startOnLoad: true, theme: 'dark', themeVariables: { fontFamily: 'Inter, sans-serif' } });
        if (mermaidRef.current) {
            mermaid.contentLoaded();
        }
    }, [], );

    const diagram = `
        graph TD;
            A[Constitution Design] -->|Ratify| B(Core Constraints);
            B --> C{Agent Validation};
            C -->|Passes| D[Execution Runtime];
            C -->|Fails| E[Termination Event];
            E --> F[Audit Log];
            D --> F;
    `;

    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', paddingBottom: '80px', background: '#000' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', zIndex: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 10, 10, 0.7)', backdropFilter: 'blur(16px)', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)', pointerEvents: 'none', zIndex: 2 }} />

            <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: '140px' }}>
                <button onClick={() => navigate(-1)} className="secondary-btn" style={{ marginBottom: '24px' }}>
                    <ArrowLeft size={18} /> Go Back
                </button>
                <h1 style={{ color: '#fff', marginBottom: '16px', fontSize: '2.5rem' }}>Governance Policies</h1>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '40px', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
                    Our core constitutional framework and evaluation logic paths mapping safe, auditable autonomous execution. Every action is held accountable.
                </p>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '60px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center', boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.5)' }}>
                    <div className="mermaid" ref={mermaidRef}>
                        {diagram}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Governance;
