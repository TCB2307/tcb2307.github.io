import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillDetail from "./SkillDetail";
import website from "../images/website.png";
import email from "../images/email-icon.png";
import banner from "../images/banner.png";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import typescript from "../images/typescript.png";
import tailwind from "../images/tailwind.png";
import salesforce from "../images/salesforce.png";
import gulp from "../images/gulp.png";
import gsapImg from "../images/gsap.png";
import figma from "../images/figma.png";
import photoshop from "../images/photoshop.png";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Skill = React.forwardRef((props, ref) => {
  const section = React.useRef(null);
  useGSAP(() => {
    gsap.to(section.current, {
      y: "-5rem",
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section.current,
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });
  });
  return (
    <div
      ref={ref}
      className="flex justify-center relative bottom-20 skill:mx-10 skill-text:mx-4 skill-m:mx-6"
    >
      <div
        ref={section}
        className="bg-[#E6E6E6] max-w-[1500px] border-black rounded-3xl border-2 border-opacity-10 skill:max-w-[1300px] relative top-20 shadow-[0px_5px_5px_0_rgba(233,_240,_243,_0.5)]"
      >
        <div className="flex items-center skill-sm:block phone:block">
          <SkillDetail
            img={website}
            rightSideBorder={true}
            title="Website"
            description="I create responsive, user-centered websites that are visually appealing and performance-optimized, leveraging the latest front-end technologies to deliver smooth, intuitive designs across all devices."
            tools={[html, tailwind, js, react, typescript]}
            skill="skill-m:border-b-2"
          />
          <SkillDetail
            img={email}
            rightSideBorder={true}
            title="Electrical Direct Emails"
            description="
Designed dynamic EDMs for clients like Myer and NAB, creating visually impactful advertising campaigns that effectively conveyed the brand's message and drove audience engagement across digital platforms."
            tools={[html, css, salesforce, gulp, figma]}
            skill="skill-m:border-b-2"
          />
          <SkillDetail
            img={banner}
            rightSideBorder={false}
            title="Banner"
            description="Developed engaging banners using GSAP, in order to create smooth animations to highlight brand messages. Focused on high-performance designs for a great user experience across all devices."
            tools={[html, css, js, gsapImg, photoshop]}
            skill=""
          />
        </div>
      </div>
    </div>
  );
});

export default Skill;
