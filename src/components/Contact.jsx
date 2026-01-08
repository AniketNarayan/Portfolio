import React from "react";
import "./styles/contact.css";
import { FaGithub, FaLinkedin, FaGlobe, FaCode, FaYoutube, FaMessage } from "react-icons/fa6";


// const socialLinks = [
//     { icon: "🌐", url: "#" },
//     { icon: "📖", url: "#" },
//     { icon: "🌀", url: "#" },
//     { icon: "🔗", url: "#" },
//     { icon: "💻", url: "#" },
//     { icon: "📘", url: "#" },
//     { icon: "🎥", url: "#" },
//     { icon: "💬", url: "#" },
// ];

const socialMedia = [
        {
            id: 1,
            Icon: <FaGithub/>,
            url: "https://github.com/AniketNarayan"

        },
        {
            id: 2,
            Icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/aniket-narayan-2aa20010b/"

        },
        {
            id: 3,
            Icon: <FaCode />,
            url: "https://stackoverflow.com/users/30833224/aniket-narayan"

        },
        {
            id: 4,
            Icon: "📖",
            url: "https://medium.com/@aniket95narayan"

        },

    ]

export default function Contact() {
    return (
        <section className="contact-section">
            <h2 className="section-title">
                Get In Touch
                {/* <span className="underline" /> */}
            </h2>
            <p className="section-subtitle">Contact Me</p>
            <p className="section-description">
                Have a question or want to work together? Feel free to reach out, and
                I'll get back to you as soon as possible.
            </p>

            <div className="social-icons">
                {socialMedia.map((link, i) => (
                    <a href={link.url} key={i} className="social-icon" target="_blank" rel="noopener noreferrer">
                        {link.Icon}
                    </a>
                ))}
            </div>

            <div className="contact-cards">
                <div className="contact-card">
                    <div className="contact-icon">📧</div>
                    <div>
                        <p className="contact-label">Email Me At</p>
                        <a href="mailto:anantpatni1@gmail.com" className="contact-email">
                            aniket.narayan27@gmail.com
                        </a>
                    </div>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">💬</div>
                    <div>
                        <p className="contact-label">Let's Talk</p>
                        <p className="contact-message">
                            I'm always open to discussing new projects, creative ideas, or
                            opportunities to be part of your vision.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
