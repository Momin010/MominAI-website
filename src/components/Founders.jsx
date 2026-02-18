import { motion } from 'framer-motion';
import { Linkedin, Github, Globe, Award, Briefcase, Building } from 'lucide-react';
import mominImg from '../assets/me.png';
import wasayImg from '../assets/wasay2.jpg';
import './Founders.css';

const Founders = () => {
    const founders = [
        {
            name: "Momin Aldahdooh",
            role: "Founder & CEO",
            isTechnical: true,
            bio: "Young entrepreneur who secured internships at the Finnish Parliament and Mayor's Office through strategic outreach. Founded a registered company at 14, achieving 4-figure revenue and government funding.",
            image: mominImg,
            links: {
                linkedin: "https://www.linkedin.com/in/momin-aldahdouh-49ab87380/",
                github: "https://github.com/Momin010",
                website: "https://momin-website.vercel.app/"
            },
            accomplishments: [
                "Founded registered company at 14 with government funding",
                "Intern at Finnish Parliament & Mayor's Office",
                "Built EventConnect, MominOS, CustomHydration",
                "4x academic stipend recipient"
            ],
            projects: [
                { name: "EventConnect", url: "https://childevent-official.vercel.app", desc: "Full-stack social app for kids" },
                { name: "MominOS", url: "https://github.com/Momin010/MominOS", desc: "Experimental OS kernel" },
                { name: "CustomHydration", url: "https://customhydration.netlify.app/", desc: "E-commerce platform" }
            ],
            hasFullInfo: true
        },
        {
            name: "Abdul Wasay Muhammad",
            role: "Co-Founder",
            isTechnical: false,
            bio: "AI entrepreneur and co-founder of MowisAI, working across AI, content, and marketing. Currently training as a software developer in school, expanding into product and technical development. Experienced in startup marketing, content strategy, and execution for AI-focused brands.",
            image: wasayImg,
            links: {
                linkedin: "https://www.linkedin.com/in/abdulwasaymuhammad/",
                github: "https://github.com/AWM909",
                website: null
            },
            accomplishments: [
                "E-commerce stores and paid ads",
                "Worked across social media, design, and video for digital brands",
                "Content & Marketing Lead at Since AI",
                "Internship at Boost Turku",
                "Co-founder of AI startups including MowisAI"
            ],
            projects: [
                { name: "Content & Marketing Lead", desc: "AI-focused projects" },
                { name: "Startup Co-Founder", desc: "MowisAI and other AI ventures" },
                { name: "Hackathon Host", desc: "Community building events" },
                { name: "Marketing Strategist", desc: "AI-focused projects" }
            ],
            hasFullInfo: true
        }
    ];

    return (
        <section id="founders" className="section founders-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Meet the <span className="text-gradient">Founders</span></h2>
                    <p className="section-subtitle">
                        Young, ambitious builders from Finland combining technical excellence with strategic vision.
                    </p>
                </motion.div>

                <div className="founders-grid">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={index}
                            className={`founder-card glass ${!founder.hasFullInfo ? 'minimal' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <div className="founder-header">
                                <div className="founder-avatar">
                                    {founder.image ? (
                                        <img src={founder.image} alt={founder.name} className="avatar-image" />
                                    ) : (
                                        <div className="avatar-placeholder">
                                            {founder.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    )}
                                    <div className="avatar-glow"></div>
                                </div>
                                <div className="founder-info">
                                    <h3 className="founder-name">{founder.name}</h3>
                                    <p className="founder-role">{founder.role}</p>
                                </div>
                            </div>

                            {founder.hasFullInfo && (
                                <>
                                    <p className="founder-bio">{founder.bio}</p>

                                    <div className="founder-links">
                                        {founder.links.linkedin && (
                                            <a href={founder.links.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                                                <Linkedin size={18} />
                                            </a>
                                        )}
                                        {founder.links.github && (
                                            <a href={founder.links.github} target="_blank" rel="noopener noreferrer" className="social-link">
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {founder.links.website && (
                                            <a href={founder.links.website} target="_blank" rel="noopener noreferrer" className="social-link">
                                                <Globe size={18} />
                                            </a>
                                        )}
                                    </div>

                                    <div className="founder-section">
                                        <h4 className="subsection-title">
                                            <Award size={16} />
                                            Key Accomplishments
                                        </h4>
                                        <ul className="accomplishments-list">
                                            {founder.accomplishments.map((acc, i) => (
                                                <li key={i}>{acc}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="founder-section">
                                        <h4 className="subsection-title">
                                            <Briefcase size={16} />
                                            Notable Projects
                                        </h4>
                                        <div className="projects-list">
                                            {founder.projects.map((project, i) => (
                                                <div key={i} className="project-item">
                                                    {project.url ? (
                                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                                                            {project.name}
                                                        </a>
                                                    ) : (
                                                        <span className="project-name">{project.name}</span>
                                                    )}
                                                    <span className="project-desc">{project.desc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="founder-badge">
                                        {founder.isTechnical ? (
                                            <span className="badge technical">Technical Founder</span>
                                        ) : (
                                            <span className="badge business">Business & Growth</span>
                                        )}
                                    </div>
                                </>
                            )}

                            {!founder.hasFullInfo && (
                                <>
                                    <div className="founder-links minimal-links">
                                        {founder.links.linkedin && (
                                            <a href={founder.links.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                                                <Linkedin size={18} />
                                            </a>
                                        )}
                                        {founder.links.github && (
                                            <a href={founder.links.github} target="_blank" rel="noopener noreferrer" className="social-link">
                                                <Github size={18} />
                                            </a>
                                        )}
                                    </div>

                                    <div className="founder-badge">
                                        <span className="badge business">Business & Growth</span>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="founders-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <div className="cta-content glass-panel">
                        <h3>Y Combinator S2026</h3>
                        <p>Applying to build the future of agent-native computing</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Founders;
