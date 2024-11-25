import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import close from "../images/close.png";
import leftarrow from "../images/leftarrow.png";
import rightarrow from "../images/rightarrow.png";

gsap.registerPlugin(useGSAP);

const Overlay = ({ title, onClose, tools }) => {
  const overlay = React.useRef(); // Reference to the overlay container

  const containerImg = React.useRef();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    if (currentIndex < tools.length - 1) {
      const currentImg = containerImg.current.children[currentIndex];
      const nextImg = containerImg.current.children[currentIndex + 1];

      // Fade out the current image
      gsap.to(currentImg, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          // Move the next image into the same position of the previous img
          gsap.to(
            nextImg, // Starting position of the next image
            { x: -30, y: 30, opacity: 1, zIndex: 10, duration: 0.5 }
          );
        },
      });

      setCurrentIndex(currentIndex + 1);
    }
  };

  useGSAP(() => {
    // Fade-in animation when component show
    gsap.fromTo(
      overlay.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  });
  return (
    <div
      ref={overlay}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      {/* Content */}
      <div className="bg-[#F0F1F5] p-6 rounded-md shadow-lg w-[90%] flex flex-col">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-3xl font-bold ml-[10%]">{title}</h2>
          {/* Close button */}
          <img src={close} className="w-14 cursor-pointer" onClick={onClose} />
        </div>
        <div className="grid grid-cols-[5%_90%_5%] items-center justify-center">
          <img src={leftarrow} className="w-14 cursor-pointer" />
          <div
            className="flex justify-center relative w-full h-[600px]"
            ref={containerImg}
          >
            {tools.map((tool, index) => (
              <img
                key={index}
                src={tool}
                alt="logo"
                className={`w-[90%] max-w-[1100px] aspect-[16/9] rounded-br-[50px] max-h-[550px] absolute ${
                  index === 0
                    ? "translate-x-[-30px] translate-y-[30px] z-10"
                    : ""
                }`}
                style={{
                  zIndex: tools.length - index, // Highest z-index for the first image
                }}
              />
            ))}
          </div>
          <img
            src={rightarrow}
            className="w-14 cursor-pointer"
            onClick={handleNext}
          />
        </div>
        <div className="ml-[10%]">
          Skills: React, Redux, Nest.js, HTML, CSS, Typescript, PostgreSQL,
          Docker Git
        </div>
        <div className="ml-[10%]">
          PTE Master an automated online learning system that integrated AI
          technology, providing students with a comprehensive platform for
          improving their English skill in preparation for their PTE test.
        </div>
        <div className="ml-[10%]">Link: https://www.masterpte.com.au/</div>
      </div>
    </div>
  );
};

export default Overlay;
