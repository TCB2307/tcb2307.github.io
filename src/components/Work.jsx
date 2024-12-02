import React from "react";
import Overlay from "./Overlay";
import WorkDetail from "./WorkDetail";
import img02 from "../images/img02.jpg";
import pte from "../images/pte/pte.png";
import pte1 from "../images/pte/pte1.png";
import pte2 from "../images/pte/pte2.png";
import pte3 from "../images/pte/pte3.png";
import banner from "../images/banner/banner.jpg";
import banner1 from "../images/banner/banner1.mov";

const Work = React.forwardRef((props, ref) => {
  const [activeProject, setActiveProject] = React.useState(null);
  const tool1 = [pte1, pte2, pte3];
  const tool2 = [
    { type: "video", src: banner1 },
    { type: "video", src: banner1 },
    { type: "video", src: banner1 },
  ];
  const tool3 = [pte1, pte2, pte3];

  const project = {
    "Project 1": {
      title: "01. PTE Master",
      tools: tool1,
      skill: "React, Redux, Nest.js, HTML, CSS, Typescript",
      detail:
        "PTE Master an automated online learning system that integrated AI technology, providing students with a comprehensive platform for improving their English skill in preparation for their PTE test.",
      link: "https://www.masterpte.com.au",
    },
    "Project 2": {
      title: "Project 2",
      tools: tool2,
      skill: "React, Redux, Nest.js, HTML, CSS, Typescript",
      detail:
        "PTE Master an automated online learning system that integrated AI technology, providing students with a comprehensive platform for improving their English skill in preparation for their PTE test.",
      link: "https://www.masterpte.com.au",
    },
    "Project 3": {
      title: "Banners",
      tools: tool3,
      skill: "HTML, CSS, JS, GSAP, Photoshop, React",
      detail:
        "I created dynamic banner animations using GSAP library, delivering impactful effects for clients like NAB, MYER, and Officeworks, ensuring smooth performance across all platforms.",
      link: "https://www.masterpte.com.au",
    },
  };

  const handleShowOverlay = (projectName) => {
    setActiveProject(project[projectName]);
  };

  const handleHideOverlay = () => {
    setActiveProject(null);
  };

  return (
    <div ref={ref}>
      <div className="pb-20 border-black border-opacity-20 border-b">
        <div className="flex justify-center text-10 text-5xl font-medium pt-4 pb-16">
          Work
        </div>
        <div className="flex justify-center bottom-20 skill:mx-5">
          <div className=" max-w-[1540px]">
            <div className="flex skill-sm:block phone:block">
              <WorkDetail
                img={pte}
                name="PTE Master"
                onShowOverlay={() => handleShowOverlay("Project 1")}
              />
              <WorkDetail
                img={banner}
                name="Banners"
                onShowOverlay={() => handleShowOverlay("Project 2")}
              />
              <WorkDetail
                img={img02}
                name="Edms"
                onShowOverlay={() => handleShowOverlay("Project 3")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Shared Overlay */}
      {activeProject && (
        <Overlay
          title={activeProject.title}
          tools={activeProject.tools}
          skill={activeProject.skill}
          detail={activeProject.detail}
          link={activeProject.link}
          onClose={handleHideOverlay}
        />
      )}
    </div>
  );
});

export default Work;
