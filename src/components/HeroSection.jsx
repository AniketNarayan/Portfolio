// HeroSection.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaGlobe, FaCode, FaYoutube, FaMessage } from "react-icons/fa6";
import profileImg from "../assets/myphoto.jpeg"; // Replace with your image path
import "./styles/herosection.css"

const HeroSection = ({ onMyWorkClick, onContactClick }) => {
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
    return (
        <section className="section-hero">
            <div className="hero">
        <div className="hero-text-box">
                    <p className="hero-heading-secondary name-color">Full Stack Engineer</p>
                    <h1 className="hero-heading-primary secondary-color">
                        I'm <span className="name-color">Aniket</span> Narayan
                    </h1>
                    <p className="hero-description secondary-color">
                        A developer who loves building things from scratch — 0 to 1 is my comfort zone. I enjoy turning chaotic ideas into clean, functional products.
                    </p>

                    {/* Social Icons */}
                    <div className="hero-section-icons secondary-color">
                        {socialMedia.map(({ id, Icon, url }) => (
                            <a
                                key={id}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-link"
                                aria-label={`Link to ${url}`}
                            >
                                {Icon}
                            </a>
                        ))}
                        {/* {[FaGithub, FaGlobe, FaLinkedin, FaCode, FaMessage, FaYoutube].map((Icon, idx) => (
                            <div
                                key={idx}
                              
                            >
                                <Icon className="icon" />
                            </div>
                        ))} */}
                    </div>

                    {/* Buttons */}
                    <div className="hero-button">
                        <button className="button" onClick={onMyWorkClick}>
                            My Work
                        </button>
                        <button className="button" onClick={onContactClick}>
                            Contact Me
                        </button>
                    </div>
                </div>   
         
            <div className="hero-img-box">
                    <img src={profileImg} className="profile-image " />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
