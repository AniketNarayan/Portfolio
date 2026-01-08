import React from "react"
import "../styles/project.css"

export default function Projects({ projects }) {
    if (!projects || projects.length === 0) {
        return (
            <div className="no-projects-message">
                <p>No projects to display in this category.</p>
            </div>
        )
    }
    return (
        <div className="projects-grid">
            {projects?.map((proj) => (
                <div className="project-card" key={proj.id}>
                    <img
                        src={proj.image}
                        alt={proj.title}
                        className="project-image"
                    />
                    <div className="project-content">
                        <h3 className="project-title">{proj.title}</h3>
                        <ul className="project-description">
                            {proj.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                        <div className="project-tags">
                            {proj.tags.map((tag, i) => (
                                <span key={i} className="project-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="project-actions">
                            <a href={proj.links.code} target="_blank" rel="noopener noreferrer" className="project-icon-button">
                                💻 Code
                            </a>
                            <a href={proj.links.view} target="_blank" rel="noopener noreferrer" className="project-button">
                                View
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}