import React from "react";
import Overlay from "./Overlay";
import WorkDetail from "./WorkDetail";
import img02 from "../images/img02.jpg";
import pte1 from "../images/pte/pte1.png";
import pte2 from "../images/pte/pte2.png";
import pte3 from "../images/pte/pte3.png";

function Work() {
  const [activeProject, setActiveProject] = React.useState(null);

  const project = {
    "Project 1": {
      title: "01. PTE Master",
      tools: [pte1, pte2, pte3, pte3, pte3],
    },
    "Project 2": {
      title: "Project 2",
      tools: [pte1, pte2, pte3],
    },
    "Project 3": {
      title: "Project 3",
      tools: [pte1, pte2, pte3],
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
