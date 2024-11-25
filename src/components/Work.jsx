import React from "react";
import Overlay from "./Overlay";
import WorkDetail from "./WorkDetail";
import img02 from "../images/img02.jpg";
import js from "../images/js.png";
import react from "../images/react.png";
import typescript from "../images/typescript.png";
import tailwind from "../images/tailwind.png";
import salesforce from "../images/salesforce.png";
import gulp from "../images/gulp.png";
import gsap from "../images/gsap.png";
import figma from "../images/figma.png";
import photoshop from "../images/photoshop.png";

function Work() {
  const [activeProject, setActiveProject] = React.useState(null);

  const project = {
    "Project 1": {
      title: "Project 1",
      tools: [js, react, typescript],
    },
    "Project 2": {
      title: "Project 2",
      tools: [tailwind, salesforce, gulp],
    },
    "Project 3": {
      title: "Project 3",
      tools: [gsap, figma, photoshop],
    },
  };

  const handleShowOverlay = (projectName) => {
    setActiveProject(project[projectName]);
  };

  const handleHideOverlay = () => {
    setActiveProject(null);
  };

  return (
    <div>
      <div className="pb-20 border-black border-opacity-20 border-b">
        <div className="flex justify-center text-10 text-5xl font-medium pt-4 pb-16">
          Work
        </div>
        <div className="flex justify-center bottom-20 skill:mx-5">
          <div className=" max-w-[1540px]">
            <div className="flex skill-sm:block phone:block">
              <WorkDetail
                img={img02}
                name="Project 1"
                onShowOverlay={() => handleShowOverlay("Project 1")}
              />
              <WorkDetail
                img={img02}
                name="Project 2"
                onShowOverlay={() => handleShowOverlay("Project 2")}
              />
              <WorkDetail
                img={img02}
                name="Project 3"
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
          onClose={handleHideOverlay}
        />
      )}
    </div>
  );
}

export default Work;
