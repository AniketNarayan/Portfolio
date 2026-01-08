import React from "react"
import "../styles/timeline.css"

const workExperiences = [
    {
        company: "Aristocrat Technologies",
        role: "Senior Engineer II",
        period: "03/2022 - Present",
        bullets: [
            "Developed Scaffolding Tool using Yeoman, automating game creation and reducing setup time by 50%",
            "Created customizable Pick Board for 2D grid configurations, enhancing game development speed and reducing game size",
            "Enhanced game development with Mercury Studio (Electron tool) for asset inspection and real-time visualization",
            "Delivered scalable Hold & Spin architecture, accelerating game adoption and improving developer efficiency",
        ],
    },
    {
        company: "GlobalLogic",
        role: "Software Engineer",
        period: "01/2021 - 03/2022",
        bullets: [
            "Developed and maintained scalable admin and user interface applications using ReactJS",
            "Delivered new features increasing user engagement by 15% within 3 months",
            "Collaborated with cross-functional teams to design and architect client-based solutions",
            "Conducted performance tuning and ensured seamless frontend-backend integration",
        ],
    },
    {
        company: "Softmind Infotech Pvt. Ltd",
        role: "Web Developer",
        period: "05/2020 - 12/2020",
        bullets: [
            "Boosted user engagement through development of new ReactJS features and components",
            "Enhanced UI by translating designs into streamlined, efficient code",
            "Led front-end development, ensuring seamless integration with backend APIs",
        ],
    },
    {
        company: "Focus Energy Limited",
        role: "Web Developer",
        period: "08/2019 - 02/2020",
        bullets: [
            "Improved project efficiency by developing software to analyze tool behavior and generate 5 charts",
            "Integrated software designs and assisted with log analysis for production operations",
            "Researched and implemented new technologies to enhance software efficiency",
        ],
    },
    {
        company: "EIE Instruments Pvt. Ltd",
        role: "Software Trainee",
        period: "01/2017 - 06/2019",
        bullets: [
            "Learned and applied full-stack technologies including JavaScript, React, Node, and MongoDB",
            "Migrated legacy applications from PHP to ReactJS",
            "Developed and tested Project Estimation Tool from scratch, ensuring high code quality",
        ],
    },
]

export default function WorkExperience() {
    return (
        <div className="timeline">
            {workExperiences.map((exp, index) => {
                const sideClass = index % 2 === 0 ? "left" : "right"
                return (
                    <div className={`timeline-item ${sideClass}`} key={exp.company}>
                        <div className="card">
                            <h3>{exp.company}</h3>
                            <h4>
                                {exp.role} <span>{exp.period}</span>
                            </h4>
                            <ul>
                                {exp.bullets.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}