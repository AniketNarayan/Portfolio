import React from "react";
import "../styles/timeline.css"

export default function Education() {
    return (
        <div className="timeline">
            <div className="timeline-item left">
                <div className="card">
                    <h3>Gandhi Institute Of Engineering and Technology</h3>
                    <h4>B.Tech in Electronics & Instrumentation <span>2013-2017</span></h4>
                    <ul>
                        <li>Comprehensive study of Electronics fundamentals</li>
                        <li>Studied engineering practices with practical application</li>
                    </ul>
                </div>
            </div>

            <div className="timeline-item right">
                <div className="card">
                    <h3>Vidya Bharati Chinmaya Vidyalaya</h3>
                    <h4>High School<span>2011-2013</span></h4>
                    <ul>
                        <li>Higher secondary education with focus on science and mathematics</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}