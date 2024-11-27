import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const ColumnText = React.forwardRef(({ text01, text02 }, ref) => {
  return (
    <div ref={ref} className="text-center flex flex-col w-[7rem] opacity-0">
      <div className="text-4xl font-medium pb-2">{text01}</div>
      <div className="text-xl font-light m:text-[1.2rem]">{text02}</div>
    </div>
  );
});

// Use React.forwardRef to forward the ref to the About section
const About = React.forwardRef((props, ref) => {
  const aboutTitle = React.useRef(null);
  const aboutDetail = React.useRef(null);
  const aboutSection = React.useRef(null);
  const aboutYear = React.useRef(null);
  const aboutProject = React.useRef(null);
  const aboutClient = React.useRef(null);

  useGSAP(() => {
    // Delay the animation start by 1 second after the page loads
    setTimeout(() => {
      gsap.fromTo(
        aboutTitle.current,
        { opacity: 0, y: 20 }, // Initial state (hidden)
        {
          opacity: 1, // Final state (visible)
          y: 0,
          duration: 0.75, // Duration of the fade-in
          ease: "power2.out", // Easing function
          scrollTrigger: {
            trigger: ref.current, // Element to trigger the animation
            start: "top 90%", // When the top of the element reaches 80% of the viewport height
            toggleActions: "play none none none", // Play animation when it comes into view
          },
        }
      );
      gsap.fromTo(
        aboutDetail.current,
        { opacity: 0, y: 20 }, // Initial state (hidden)
        {
          opacity: 1, // Final state (visible)
          y: 0,
          duration: 0.75, // Duration of the fade-in
          ease: "power2.out", // Easing function
          scrollTrigger: {
            trigger: aboutDetail.current, // Element to trigger the animation
            start: "top 90%", // When the top of the element reaches 80% of the viewport height
            toggleActions: "play none none none", // Play animation when it comes into view
          },
        }
      );

      gsap.fromTo(
        aboutYear.current,
        { opacity: 0, scale: 0 }, // Initial state (hidden)
        {
          opacity: 1, // Final state (visible)
          scale: 1,
          rotation: 720,
          duration: 0.75, // Duration of the fade-in
          ease: "power2.inOut", // Easing function
          scrollTrigger: {
            trigger: aboutSection.current, // Element to trigger the animation
            start: "top 95%",
            toggleActions: "play none none none", // Play animation when it comes into view
          },
        }
      );

      gsap.fromTo(
        aboutProject.current,
        { opacity: 0, scale: 0 }, // Initial state (hidden)
        {
          opacity: 1, // Final state (visible)
          scale: 1,
          duration: 0.75, // Duration of the fade-in
          ease: "power2.inOut", // Easing function
          scrollTrigger: {
            trigger: aboutSection.current, // Element to trigger the animation
            start: "top 95%",
            toggleActions: "play none none none", // Play animation when it comes into view
          },
        }
      );

      gsap.fromTo(
        aboutClient.current,
        { opacity: 0, scale: 0 }, // Initial state (hidden)
        {
          opacity: 1, // Final state (visible)
          scale: 1,
          rotation: -720,
          duration: 0.75, // Duration of the fade-in
          ease: "power2.inOut", // Easing function
          scrollTrigger: {
            trigger: aboutSection.current, // Element to trigger the animation
            start: "top 95%",
            toggleActions: "play none none none", // Play animation when it comes into view
          },
        }
      );
    }, 500);
  });

  return (
    <div
      ref={ref} // Attach the ref here to make it scrollable
      className="bg-[#14BECA] flex flex-col space-y-4 px-12 pt-10 text-white pb-[8rem] phone:px-2"
    >
      <div
        className="flex justify-center text-10 text-5xl font-medium pt-4 relative opacity-0"
        ref={aboutTitle}
      >
        About myself
      </div>
      <div
        ref={aboutDetail}
        className="flex justify-center px-80 py-4 text-center text-xl pb-10 about:px-40 m:px-6 phone:px-2 opacity-0"
      >
        With expertise in front-end development, I also create engaging banners
        and dynamic electronic emails. I bring a combination of technical skill,
        creative problem-solving, and a user-focused approach to every project,
        ensuring visually compelling and seamless digital experiences.
      </div>
      <div
        ref={aboutSection}
        className="flex justify-around px-60 about:px-20 m:px-4 project:px-0"
      >
        <ColumnText ref={aboutYear} text01="02+" text02="Years experience" />
        <ColumnText
          ref={aboutProject}
          text01="30+"
          text02="Completed project"
        />
        <ColumnText ref={aboutClient} text01="10+" text02="Clients total" />
      </div>
    </div>
  );
});

export default About;
