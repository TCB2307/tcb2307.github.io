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
  const [isAnimating, setIsAnimating] = React.useState(false);

  // LEFT BUTTON
  const handleLeftButton = () => {
    if (isAnimating) return; // Prevent clicks if an animation is ongoing

    setIsAnimating(true); // Set the animation state to true

    const totalImages = tools.length;
    const currentImg = containerImg.current.children[currentIndex];
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages; // For infinite loop and track the previous img index
    const prevImg = containerImg.current.children[prevIndex];

    gsap.set(prevImg, { opacity: 0, x: -90, y: 50, zIndex: tools.length });

    // Adjust z-index for all images except the currentImg and nextImg
    updateZIndexForLeftButton(currentImg, prevImg);

    // Fade out the current image
    gsap.to(currentImg, {
      x: 0,
      y: 0,
      duration: 0.3,
      zIndex: tools.length - 1,
      onComplete: () => {
        //setup the previous img
        gsap.set(prevImg, { opacity: 0, x: -90, y: 50, zIndex: tools.length });
        // Move the next image into the same position of the previous img
        gsap.to(
          prevImg, // Starting position of the next image
          {
            x: -60,
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
              // Reset the current image to prepare it for future transitions
              setCurrentIndex(prevIndex); // Update the current index

              // Adjust z-index for all images except the currentImg and nextImg

              // Re-enable clicking once animation is done
              setIsAnimating(false);
            },
          }
        );
      },
    });
  };

  // Function to update the z-index for all elements except currentImg and prevImg
  const updateZIndexForLeftButton = (currentImg, prevImg) => {
    // Loop through all the images and increase z-index for images except currentImg and nextImg
    Array.from(containerImg.current.children).forEach((img, index) => {
      if (img !== currentImg && img !== prevImg) {
        const currentZIndex = parseInt(img.style.zIndex, 10);
        gsap.set(img, { zIndex: currentZIndex - 1 });
      }
    });
  };

  // RIGHT BUTTON
  const handleRightButton = () => {
    if (isAnimating) return; // Prevent clicks if an animation is ongoing

    setIsAnimating(true); // Set the animation state to true

    const totalImages = tools.length;
    const currentImg = containerImg.current.children[currentIndex];
    const nextIndex = (currentIndex + 1) % totalImages; // For infinite loop and track the next img index
    const nextImg = containerImg.current.children[nextIndex];

    // Fade out the current image
    gsap.to(currentImg, {
      opacity: 0,
      x: -90,
      duration: 0.5,
      onComplete: () => {
        // Move the next image into the same position of the previous img
        gsap.to(
          nextImg, // Starting position of the next image
          {
            x: -60,
            y: 50,
            opacity: 1,
            zIndex: tools.length,
            duration: 0.3,
            onComplete: () => {
              // Reset the current image to prepare it for future transitions
              gsap.set(currentImg, { opacity: 1, x: 0, y: 0, zIndex: 1 });
              setCurrentIndex(nextIndex); // Update the current index

              // Adjust z-index for all images except the currentImg and nextImg
              updateZIndexForRightButton(currentImg, nextImg);

              // Re-enable clicking once animation is done
              setIsAnimating(false);
            },
          }
        );
      },
    });
  };

  // Function to update the z-index for all elements except currentImg and nextImg
  const updateZIndexForRightButton = (currentImg, nextImg) => {
    // Loop through all the images and increase z-index for images except currentImg and nextImg
    Array.from(containerImg.current.children).forEach((img, index) => {
      if (img !== currentImg && img !== nextImg) {
        const currentZIndex = parseInt(img.style.zIndex, 10);
        gsap.set(img, { zIndex: currentZIndex + 1 });
      }
    });
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
          <img
            src={leftarrow}
            className="w-14 cursor-pointer"
            onClick={handleLeftButton}
          />
          <div
            className="flex justify-center relative w-full h-[600px]"
            ref={containerImg}
          >
            {tools.map((tool, index) => (
              <img
                key={index}
                src={tool}
                alt="logo"
                className={`w-[90%] max-w-[1100px] aspect-[16/9] rounded-br-[50px] max-h-[550px] absolute border-2 border-gray-300 ${
                  index === 0
                    ? "translate-x-[-60px] translate-y-[50px] z-10"
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
            onClick={handleRightButton}
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
