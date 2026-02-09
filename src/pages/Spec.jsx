import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import mermaid from 'mermaid';
import '../styles/Spec.css';

const Mermaid = ({ chart }) => {
    const [svg, setSvg] = useState('');

    useEffect(() => {
        try {
            mermaid.initialize({ startOnLoad: true, theme: 'dark', securityLevel: 'loose' });
            mermaid.render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, chart).then((result) => {
                setSvg(result.svg);
            });
        } catch (e) {
            console.error("Mermaid error:", e);
        }
    }, [chart]);

    return <div className="mermaid-chart" dangerouslySetInnerHTML={{ __html: svg }} />;
};

const specContent = `
# MominAI – Agent-Native Execution Environment

### Foundational Design Document (v0.1)

## 1. Executive Summary

MominAI is a proposed **agent-native execution substrate**: a system-level runtime designed to safely host autonomous AI agents in isolated environments.

## 2. Core Problem
Current agent systems run directly on the host OS, creating massive security gaps. MominAI introduces a **new execution layer** that formalizes agent governance.

## 3. Conceptual Model

### 3.1 Agent
An **Agent** is defined as a structured system entity consisting of two components:

#### 3.1.1 The Brain (Cognitive Layer)
The reasoning engine (LLM). It cannot directly interact with the environment.

#### 3.1.2 The Hands (Tool Layer)
Tools are the exclusive mechanism through which an agent interacts with the world.

\`\`\`mermaid
graph TD
    A[Agent] --> B[Brain]
    A --> C[Hands]
    B -- Intentions --> C
    C -- Observations --> B
    C --> D[Sandbox Environment]
    style A fill:#1a1a1a,stroke:#3b82f6,stroke-width:2px
    style B fill:#1a1a1a,stroke:#ff4d8c,stroke-width:2px
    style C fill:#1a1a1a,stroke:#3b82f6,stroke-width:2px
\`\`\`

## 4. Sandbox Model

A **Sandbox** is an isolated execution domain that provides:
* Dedicated filesystem space
* Isolated process space
* Enforced permission policies

\`\`\`mermaid
graph LR
    subgraph Host System
        subgraph Sandbox[Sandbox Boundary]
            A[Agent Process]
            FS[Isolated FS]
            T[Tool Runtime]
            A --> T
            T --> FS
        end
        OS[Host OS]
        Net[Network]
        Sandbox -.->|Mediated Access| OS
        Sandbox -.->|Firewalled| Net
    end
    style Sandbox fill:#0a0a0a,stroke:#ff4d8c,stroke-width:2px,stroke-dasharray: 5 5
\`\`\`

## 10. System Laws (Governance Model)

1. **No Direct Action**: Agents never act directly.
2. **No Privilege Escalation**: Permissions are fixed.
3. **Hierarchical Authority**: Child < Parent.
4. **Explicit Communication**: No hidden state sharing.
5. **Resource Boundaries**: Strict CPU/RAM limits.
`;

const Spec = () => {
    return (
        <section className="section spec-section">
            <div className="container spec-container">
                <div className="spec-content glass-panel">
                    <ReactMarkdown
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                if (!inline && match && match[1] === 'mermaid') {
                                    return <Mermaid chart={String(children).replace(/\\n$/, '')} />;
                                }
                                return (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            }
                        }}
                    >
                        {specContent}
                    </ReactMarkdown>
                </div>
            </div>
        </section>
    );
};

export default Spec;
