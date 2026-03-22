import React, { useCallback } from 'react';
import { ReactFlow, MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/background.png';

const initialNodes = [
  { id: '1', position: { x: 400, y: 50 }, data: { label: 'User Request' }, style: { background: '#f8f6f0', color: '#111', border: 'none', borderRadius: '12px', padding: '15px', fontWeight: 'bold' } },
  { id: '2', position: { x: 400, y: 150 }, data: { label: 'Understanding Engine' }, style: { background: '#00a3a3', color: '#fff', border: 'none', borderRadius: '12px', padding: '15px' } },
  { id: '3', position: { x: 200, y: 300 }, data: { label: 'Web Research' }, style: { background: '#5b8fff', color: '#fff', border: 'none', borderRadius: '12px', padding: '15px' } },
  { id: '4', position: { x: 400, y: 300 }, data: { label: 'Code Generation' }, style: { background: '#5b8fff', color: '#fff', border: 'none', borderRadius: '12px', padding: '15px' } },
  { id: '5', position: { x: 600, y: 300 }, data: { label: 'Data Analysis' }, style: { background: '#5b8fff', color: '#fff', border: 'none', borderRadius: '12px', padding: '15px' } },
  { id: '6', position: { x: 400, y: 450 }, data: { label: 'Safety Checker' }, style: { background: '#a78bfa', color: '#fff', border: 'none', borderRadius: '12px', padding: '15px' } },
  { id: '7', position: { x: 400, y: 600 }, data: { label: 'Action Performed' }, style: { background: '#34d399', color: '#111', border: 'none', borderRadius: '12px', padding: '15px', fontWeight: 'bold' } },
  { id: '8', position: { x: 650, y: 450 }, data: { label: 'Activity Log' }, style: { background: '#f59e0b', color: '#fff', border: 'none', borderRadius: '12px', padding: '15px' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#00e5e5', strokeWidth: 2 } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#00e5e5' } },
  { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#00e5e5' } },
  { id: 'e2-5', source: '2', target: '5', animated: true, style: { stroke: '#00e5e5' } },
  { id: 'e3-6', source: '3', target: '6', style: { stroke: '#ffffff', opacity: 0.5 } },
  { id: 'e4-6', source: '4', target: '6', style: { stroke: '#ffffff', opacity: 0.5 } },
  { id: 'e5-6', source: '5', target: '6', style: { stroke: '#ffffff', opacity: 0.5 } },
  { id: 'e6-7', source: '6', target: '7', animated: true, style: { stroke: '#34d399', strokeWidth: 2 } },
  { id: 'e6-8', source: '6', target: '8', style: { stroke: '#f59e0b', opacity: 0.8, strokeDasharray: '5 5' } },
];

const AgentRuntime = () => {
    const navigate = useNavigate();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', paddingBottom: '80px', background: '#000' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', zIndex: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 10, 10, 0.7)', backdropFilter: 'blur(16px)', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)', pointerEvents: 'none', zIndex: 2 }} />

            <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: '140px' }}>
                <button onClick={() => navigate(-1)} className="secondary-btn" style={{ marginBottom: '24px' }}>
                    <ArrowLeft size={18} /> Go Back
                </button>
                <h1 style={{ color: '#fff', marginBottom: '16px', fontSize: '2.5rem' }}>How Our Agent Thinks</h1>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '40px', fontSize: '1.1rem', maxWidth: '750px', lineHeight: 1.6 }}>
                    Curious about the magic behind the scenes? This interactive map shows exactly how Mowis AI processes your requests. It thinks, breaks down the steps, tests them for safety, and elegantly perfectly. Go ahead, drag the boxes around around!
                </p>
                <div style={{ width: '100%', height: '580px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)', overflow: 'hidden', boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.5)' }}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        fitView
                        colorMode="dark"
                    >
                        <Controls style={{ background: 'rgba(255,255,255,0.1)', color: 'white', fill: 'white' }} />
                        <Background variant="dots" gap={16} size={1} color="rgba(255,255,255,0.15)" />
                    </ReactFlow>
                </div>
            </div>
        </div>
    );
};

export default AgentRuntime;
