import React from "react"

import "../styles/project.css"


export default function Blogs({projects}) {
    return (
        <div className="projects-grid">
            {projects?.map((proj) => (
                <div className="project-card" key={proj.id}>
                    <div className="project-content">
                        <h3 className="project-title">{proj.title}</h3>
                        <ul className="project-description">
                            <li>{proj.summary}</li>
                        </ul>
                        <div className="project-tags">
                            {proj.description}
                        </div>
                        <div className="project-actions">
                            <a href="https://medium.com/@aniket95narayan" className="project-button" target="_blank"
                                rel="noopener noreferrer">
                                Read Article
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}