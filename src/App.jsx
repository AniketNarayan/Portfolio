import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/Aboutme";
import ProjectsSections from "./components/projects/ProjectSection";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Timeline from "./components/timeline/Timeline";


function SectionWrapper({ children, customStyle = {} }) {
  const defaultStyle = {
    minHeight: "100vh",
    scrollSnapAlign: 'start',
    paddingTop: '10rem',
    paddingBottom: '0'
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      style={{...defaultStyle, ...customStyle}}
    >
     {children}
    </motion.div>
  )
}


export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null)

  const location = useLocation();

  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const hash = (location.hash.replace("#", "") || "home").toLowerCase();
    setActiveSection(hash);

    const refs = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      experience: experienceRef,
      contact: contactRef,
    };

    const target = refs[hash]?.current;
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const scrollToSection = (ref) => {
    console.log(ref.current)
    ref.current?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
      <Navbar
        refs={{
          home: homeRef,
          about: aboutRef,
          projects: projectsRef,
          experience: experienceRef,
          contact: contactRef,
        }}
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />

      <div style={{ scrollSnapType: "y mandatory", overflowY: "scroll"}}>
        <div ref={homeRef} style={{ scrollSnapAlign: "start" }}>
          <SectionWrapper>
            <HeroSection
              onMyWorkClick={() => scrollToSection(projectsRef)}
              onContactClick={() => scrollToSection(contactRef)}
          /></SectionWrapper>
        </div>
        <div ref={aboutRef} style={{ scrollSnapAlign: "start" }}>
          <SectionWrapper customStyle={{paddingBottom: '0'}}><AboutMe /></SectionWrapper>
        </div>
        <div ref={experienceRef} style={{ scrollSnapAlign: "start" }}>
          <SectionWrapper customStyle={{paddingTop: '2rem'}}><Timeline /></SectionWrapper>
        </div>
        <div ref={projectsRef} style={{ scrollSnapAlign: "start" }}>
          <SectionWrapper><ProjectsSections /></SectionWrapper>
        </div>
        <div ref={contactRef} style={{ scrollSnapAlign: "start" }}>
          <SectionWrapper><Contact /></SectionWrapper>
        </div>
      </div>
    </>
  );
}

