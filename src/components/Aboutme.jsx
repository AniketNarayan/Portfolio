import React from "react";
import "./styles/aboutme.css"

const AboutMe = () => {
    return (
        <div className="outer-card">
        <section className="about-section">
            <h2 className="section-title">About Me</h2>
            <div className="about-container">
                <div className="who-i-am font-sub-heading margin-auto">
                    <h2>Who I Am</h2>
                    <div>
                    <p className="font-medium secondary-color line-height">
                        I'm a passionate Software Development Engineer with expertise in building
                        exceptional digital experiences. I specialize in frontend development while
                        maintaining a strong foundation in full-stack technologies.
                    </p>
                    <p className="font-medium secondary-color line-height">
                        With a Bachelor's in Electronics from BPUT Odisha, and a professional background in
                        Software Engineering, I combine technical expertise with a deep understanding of user
                        experience principles to create intuitive and efficient applications.
                    </p>
                    <p className="font-medium secondary-color line-height">
                        Beyond coding, I enjoy travelling, exploring new technologies, and building
                        projects that solve real-world problems.
                        </p>
                    </div>
                </div>
                <div className="skills">
                    <div className="who-i-am font-sub-heading">
                        <h2>My Skills</h2>
                    </div>
                    <div className="skills-grid">
                        <div className="card">
                            <h4>Frontend</h4>
                            <ul>
                                <li>React.js</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>HTML/CSS</li>
                            </ul>
                        </div>
                        <div className="card">
                            <h4>Backend</h4>
                            <ul>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                    <li>MongoDB</li>
                                    <li>PostgreSQL</li>
                            </ul>
                        </div>
                        <div className="card">
                            <h4>Mobile</h4>
                            <ul>
                                <li>React Native</li>
                            </ul>
                        </div>
                        <div className="card">
                            <h4>Other</h4>
                            <ul>
                                <li>Git</li>
                                    <li>REST APIs</li>
                                    <li>GraphQL</li>
                                    <li>Redis</li>
                                    <li>GCP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}
export default AboutMe;