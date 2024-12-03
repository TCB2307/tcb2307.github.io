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
import banner2 from "../images/banner/banner2.mov";
import banner3 from "../images/banner/banner3.mov";
import edm from "../images/edm/edm.png";
import edm1 from "../images/edm/edm1.jpg";
import edm2 from "../images/edm/edm2.jpg";
import edm3 from "../images/edm/edm3.jpg";

const Work = React.forwardRef((props, ref) => {
  const [activeProject, setActiveProject] = React.useState(null);
  const tool1 = [pte1, pte2, pte3];
  const tool2 = [edm1, edm2, edm3];
  const tool3 = [
    { type: "video", src: banner1 },
    { type: "video", src: banner2 },
    { type: "video", src: banner3 },
  ];

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
      title: "Edms",
      tools: tool2,
      skill: "HTML, CSS, JS, Gusp, Photoshop, Salesforce",
      detail:
        "Developed static and dynamic EDMs for Myer and NAB, making visually appealing designs that enhanced brand impact and boosted digital engagement.",
      link: "",
    },
    "Project 3": {
      title: "Banners",
      tools: tool3,
      skill: "HTML, CSS, JS, GSAP, Photoshop, React",
      detail:
        "Created dynamic banner animations using GSAP library, delivering impactful effects for clients like NAB, MYER, and Officeworks, ensuring smooth performance across all platforms.",
      link: "",
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
                img={edm}
                name="Electrical Direct Emails"
                onShowOverlay={() => handleShowOverlay("Project 2")}
              />
              <WorkDetail
                img={banner}
                name="Banners"
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
