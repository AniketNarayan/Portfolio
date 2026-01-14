import React, { useState } from "react";
import "../styles/project.css"
import Projects from "./Projects";
import Blogs from "./Blogs";

// const projects = [];
const mediumBlogs = [{
    id: 1,
    title: "Connect Ropes",
    summary: "Understanding Min-Heap Operations and the “Connect Ropes” Problem",
    description: "The “Connect Ropes” problem is a classic example of using a min-heap. The goal is to connect all ropes into one rope with the minimum cost"
}]

const projects = [
    {
        id: 1,
        title: "API Gateway",
        image: "",
        description: [
            "Custom-built API Gateway with Round Robin Load Balancing and Dynamic Route Management",
            "Implemented Circuit Breaker pattern to handle service failures gracefully",
            "Integrated Token Bucket algorithm for Rate Limiting using Redis",
        ],
        tags: ["Node.js", "Redis", "System Design", "Express", "Microservices"],
        links: {
            code: "https://github.com/AniketNarayan/API-Gateway",
            view: "https://github.com/AniketNarayan/API-Gateway",
        },
        type: "web"
    },
    {
        id: 2,
        title: "AI-Powered DevOps Automator",
        image: "",
        description: [
            "Intelligent monitoring agent using LLM (Ollama) to analyze system metrics and make autonomous decisions",
            "Automated service restart, team notifications, and health monitoring with SQLite-based action tracking",
            "Implemented cooldown mechanisms and fallback rule-based decisions for production reliability",
            "Upcoming: Escalation system, Analytics dashboard, and OpenAI integration for faster decision-making"
        ],
        tags: ["Node.js", "AI/ML", "DevOps", "LLM", "SQLite", "Automation"],
        links: {
            code: "https://github.com/AniketNarayan/DevOps-Automator",
            view: "https://github.com/AniketNarayan/DevOps-Automator",
        },
        type: "web"
    },
    {
        id: 3,
        title: "Enterprise AI Knowledge Assistant",
        image: "",
        description: [
            "AI-powered document search engine with semantic search capabilities for enterprise knowledge management",
            "Built Node.js backend with vector embeddings, Redis caching, and rate limiting for scalable performance",
            "Designed SQL schema with category-based organization enabling scoped document retrieval for HR/Technical teams"
        ],
        tags: ["Node.js", "AI/ML", "Redis", "SQL", "Vector Search", "LLM"],
        links: {
            code: "https://github.com/AniketNarayan/Knowledge_base_Backend",
            view: "https://github.com/AniketNarayan/Knowledge_base_Frontend",
        },
        type: "web"
    }
];

// const mediumBlogs = [
//     {
//         id: 1,
//         title: "Aristocrat Technologies",
//         summary: "DSA question",
//         description: "data structure and algorithims",
//     },
//     {
//         id: 2,
//         title: "Aristocrat Technologies",
//         summary: "DSA question",
//         description: "data structure and algorithims",
//     }
// ]
const tabsArray = [{ id: 1, tabName: "All Projects" }, { id: 2, tabName: "Extensions" }, { id: 3, tabName: "Web Apps" }, { id: 4, tabName: "Medium Blogs" }]

export default function ProjectsSections() {

    const [activeTab, setActiveTab] = useState({ id: 1, tabName: "All Projects" })

    const handleActiveTab = (tab) => {
        setActiveTab(tab)
    }
    
    const handleContent = () => {
        switch (activeTab.tabName) {
            case "All Projects": 
                return <Projects projects={projects} />;
            case "Extensions":
                return <Projects projects={projects.filter(p => p.type === "extension")} />;
            case "Web Apps":
                return <Projects projects={projects.filter(p => p.type === "web")} />;
            case "Medium Blogs":
                   return <Blogs projects={mediumBlogs} />
            default:
                return null;
        }
    }

    return (
        <>
            <h2 className="section-title">My Projects</h2>
            <section className="projects-section">
                <div className="project-filters">
                    {tabsArray.map((tab) => {
                        return (
                            <button className={`project-filter-btn${activeTab.tabName === tab.tabName ? " active" : ""}`}
                            onClick={() => handleActiveTab(tab)} key={tab.id}>{tab.tabName}</button>
                        )
                    })}
                </div>
                { handleContent()}
            </section>
        </>
    );
}
