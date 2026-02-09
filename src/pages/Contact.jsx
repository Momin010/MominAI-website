import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section className="section contact-section">
            <div className="container">
                <motion.div
                    className="contact-wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="contact-title">Get in touch.</h1>

                    <div className="contact-info">
                        <div className="info-group">
                            <span className="label">EMAIL</span>
                            <a href="mailto:momin.aldahdooh@gmail.com" className="value">momin.aldahdooh@gmail.com</a>
                        </div>

                        <div className="info-group">
                            <span className="label">PHONE</span>
                            <a href="tel:+358449291241" className="value">+358 44 929 1241</a>
                        </div>

                        <div className="info-group">
                            <span className="label">LOCATION</span>
                            <span className="value">Helsinki, Finland</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
