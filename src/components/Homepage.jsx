import React, { useRef } from "react";
import LoadingOverlay from "./LoadingOverlay";
import Intro from "./Intro";
import About from "./About";
import Skill from "./Skill";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import Navigation from "./Navigation"; // Import the Navigation Component
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

export default function Homepage() {
  const [loadingComplete, setLoadingComplete] = React.useState(false);
  const aboutSection = useRef(null); // Create a ref for the About section
  const skillSection = useRef(null); // Create a ref for the Skill section
  const projectSection = useRef(null); // Create a ref for the Project section
  const contactSection = useRef(null); // Create a ref for the Contact section

  // Scroll to About section
  const scrollToAbout = () => {
    gsap.to(window, {
      duration: 0.75,
      scrollTo: {
        y: aboutSection.current, // Target the About section
        offsetY: 80, // Move the scroll 10px up
      },
      ease: "power2.inOut",
    });
  };

  // Scroll to Skill section
  const scrollToSkill = () => {
    gsap.to(window, {
      duration: 0.75,
      scrollTo: {
        y: skillSection.current, // Target the About section
        offsetY: 80, // Move the scroll 10px up
      },
      ease: "power2.inOut",
    });
  };

  // Scroll to Projects section
  const scrollToProject = () => {
    gsap.to(window, {
      duration: 0.75,
      scrollTo: {
        y: projectSection.current, // Target the About section
        offsetY: 80, // Move the scroll 10px up
      },
      ease: "power2.inOut",
    });
  };

  // Scroll to Contact section
  const scrollToContact = () => {
    gsap.to(window, {
      duration: 0.75,
      scrollTo: {
        y: contactSection.current, // Target the About section
        offsetY: -30, // Move the scroll 10px up
      },
      ease: "power2.inOut",
    });
  };

  const onLoadComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <div>
      <LoadingOverlay onLoadComplete={onLoadComplete} />
      {loadingComplete && (
        <>
          {/* Pass scrollToAbout as a prop to Navigation */}
          <div className="sticky top-0 z-50">
            <Navigation
              scrollToAbout={scrollToAbout}
              scrollToSkill={scrollToSkill}
              scrollToProject={scrollToProject}
              scrollToContact={scrollToContact}
            />
          </div>
          <Intro />
          <About ref={aboutSection} /> {/* Apply the ref to About component */}
          <Skill ref={skillSection} /> {/* Apply the ref to Skill component */}
          <Work ref={projectSection} />
          <Contact ref={contactSection} />
          <Footer />
        </>
      )}
    </div>
  );
}
