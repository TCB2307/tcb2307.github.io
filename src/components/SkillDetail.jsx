import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function SkillDetail({
  img,
  rightSideBorder,
  title,
  description,
  tools,
  skill,
}) {
  const borderCss = rightSideBorder === true ? "border-r-2" : "";

  const sectionImg = React.useRef(null);
  const sectionDetail = React.useRef(null);
  const section = React.useRef(null);

  const scaleImage = (scaleValue, target) => {
    gsap.to(target, {
      scale: scaleValue, // Scale uniformly on both axes (scaleX and scaleY)
      duration: 0.3,
      ease: "power2.out",
    });
  };

  useGSAP(() => {
    gsap.to([sectionDetail.current, sectionImg.current], {
      x: "2.5rem",
      opacity: 1,
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section.current,
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div
      ref={section}
      className={`${borderCss} border-black border-opacity-10 w-full h-[36rem] skill-m:border-r-0 skill-m:h-[30rem] ${skill}`}
    >
      <div
        ref={sectionImg}
        className="flex justify-center mt-16 relative right-10 opacity-0"
      >
        <img src={img} alt="logo" className="w-20" />
      </div>
      <div
        ref={sectionDetail}
        className=" flex justify-center mt-8 text-[#000000] relative right-10 opacity-0"
      >
        <div className="text-center w-4/5 about:w-[85%] skill-text:w-[90%] skill-sm:w-[80%] phone:w-[90%]">
          <div className="text-2xl font-semibold about:text-[1.3rem] skill-text:text-[1.2rem] skill-m:text-2xl">
            {title}
          </div>
          <div className="mt-6 font-normal h-[9rem] about:text-[0.95rem] skill-sm:h-[6rem]">
            {description}
          </div>
          <div className="text-2xl mt-6 text-[#EB4A4A] font-medium about:mt-14 skill-text:mt-20 skill-sm:mt-14 phone:mt-8">
            Tools
          </div>
          <div className="font-light mb-10 mt-4">
            <div className="flex space-x-2 justify-center">
              {tools.map((tool, index) => (
                <img
                  key={index}
                  src={tool}
                  alt="logo"
                  className="w-14 about:w-[3rem] skill-text:w-[2.7rem] skill-sm:w-[3.5rem] phone:w-[3.1rem]"
                  onMouseEnter={(e) => scaleImage(1.3, e.target)} // Scale to 1.3 on hover
                  onMouseLeave={(e) => scaleImage(1, e.target)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillDetail;
