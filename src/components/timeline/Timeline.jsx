import { React, useState } from "react";
import "../styles/timeline.css"
import WorkExperience from "./Workexperience";
import Education from "./Education";

const Timeline = () => {
    const [activeTimelineTab, setActiveTimelineTab] = useState({id: 1, tabName: "Work Experience"})
    const buttonArray = [{ id: 1, tabName: "Work Experience" }, { id: 2, tabName: "Education" }]
    
    const handleActiveTab = (button) => {
        setActiveTimelineTab(button);
    }


    const handleTimelineContent  = (button) => {
        switch (activeTimelineTab.tabName) {
            case "Work Experience": 
                return <WorkExperience />
            case "Education": 
                return <Education />
        }
    }

    return (
        <div className="outer-card">
        <div className="timeline-container">
            <h2 className="section-title">My Journery</h2>
                <div className="tabs">
                    {buttonArray.map((button) => {
                        return (
                            <button className={`${activeTimelineTab.tabName === button.tabName ? "active": ""}`} key={button.id}
                            onClick={() => handleActiveTab(button)}>{button.tabName}
                            </button>
                        )
                    })}
            </div>

          {handleTimelineContent()}
            </div>
        </div>
    );
};

export default Timeline;
