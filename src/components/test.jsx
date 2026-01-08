import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/Aboutme";
import ProjectsSections from "./components/projects/ProjectSection";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Timeline from "./components/timeline/Timeline";

function SectionWrapper({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            style={{ minHeight: "100vh", scrollSnapAlign: "start" }}
        >
            {children}
        </motion.div>
    );
}

function HomePage() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const experienceRef = useRef(null);

    const location = useLocation();
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const hash = location.hash.replace("#", "") || "home";
        setActiveSection(hash);

        const refs = {
            home: homeRef,
            about: aboutRef,
            projects: projectsRef,
            experience: experienceRef,
            contact: contactRef,
        };

        refs[hash]?.current?.scrollIntoView({ behavior: "smooth" });
    }, [location]);

    return (
        <>
            <Navbar />
            <div style={{ scrollSnapType: "y mandatory", overflowY: "auto", height: "100vh" }}>
                <div ref={homeRef}>
                    {activeSection === "home" && (
                        <SectionWrapper><HeroSection /></SectionWrapper>
                    )}
                </div>
                <div ref={aboutRef}>
                    {activeSection === "about" && (
                        <SectionWrapper><AboutMe /></SectionWrapper>
                    )}
                </div>
                <div ref={experienceRef}>
                    {activeSection === "experience" && (
                        <SectionWrapper><Timeline /></SectionWrapper>
                    )}
                </div>
                <div ref={projectsRef}>
                    {activeSection === "projects" && (
                        <SectionWrapper><ProjectsSections /></SectionWrapper>
                    )}
                </div>
                <div ref={contactRef}>
                    {activeSection === "contact" && (
                        <SectionWrapper><Contact /></SectionWrapper>
                    )}
                </div>
            </div>
        </>
    );
}

export default HomePage;
