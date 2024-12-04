import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import close from "../images/close.png";
import leftarrow from "../images/leftarrow.png";
import rightarrow from "../images/rightarrow.png";

gsap.registerPlugin(useGSAP);

const Overlay = ({ title, onClose, tools, skill, detail, link }) => {
  const overlay = React.useRef(); // Reference to the overlay container
  const imgRefs = React.useRef([]); // Create a reference array for all images

  const containerImg = React.useRef();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  // Variables to track swipe gestures
  const startX = React.useRef(0);

  const videoRefs = React.useRef([]); // Ref to store each video element

  // UseEffect to ensure only the highest z-index video is playing
  React.useEffect(() => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      video.play(); // Play the video with the highest z-index
    }

    // Pause other videos when moving to the next one
    videoRefs.current.forEach((video, index) => {
      if (index !== currentIndex) {
        video.pause(); // Pause the videos that are not in the highest z-index position
        video.currentTime = 0; // Reset the video to the beginning
      }
    });
  }, [currentIndex]); // Re-run this when currentIndex changes

  // LEFT BUTTON
  const handleLeftButton = () => {
    if (isAnimating) return; // Prevent clicks if an animation is ongoing

    setIsAnimating(true); // Set the animation state to true

    const totalImages = tools.length;
    const currentImg = containerImg.current.children[currentIndex];
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages; // For infinite loop and track the previous img index
    const prevTwoIndex = (currentIndex + 1) % totalImages; // Track the previous two img index
    const prevImg = containerImg.current.children[prevIndex];
    const prevTwoImg = containerImg.current.children[prevTwoIndex];
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
          }
        );
        gsap.to(
          prevTwoImg, // Starting position of the next image
          {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              gsap.set(prevTwoImg, { x: 20, y: 0 });
              // Reset the current image to prepare it for future transitions
              setCurrentIndex(prevIndex); // Update the current index

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
    const nextTwoIndex = (currentIndex + 2) % totalImages; // track the next 2 imgs index
    const nextImg = containerImg.current.children[nextIndex];
    const nextTwoImg = containerImg.current.children[nextTwoIndex];

    // Fade out the current image
    gsap.to(currentImg, {
      opacity: 0,
      x: -90,
      duration: 0.4,
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
              gsap.set(currentImg, { opacity: 0, x: 20, y: 0, zIndex: 1 });
              gsap.to(
                nextTwoImg, // Starting position of the next image
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.5,
                  onComplete: () => {
                    setCurrentIndex(nextIndex); // Update the current index

                    // Adjust z-index for all images except the currentImg and nextImg
                    updateZIndexForRightButton(currentImg, nextImg);

                    // Re-enable clicking once animation is done
                    setIsAnimating(false);
                  },
                }
              );
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

  // SWIPE HANDLING
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX.current - endX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) handleRightButton(); // Swipe Left
      else handleLeftButton(); // Swipe Right
    }
  };

  useGSAP(() => {
    // Fade-in animation when component show
    gsap.fromTo(
      overlay.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
    // Animate images if imgRefs is not null
    if (imgRefs.current && imgRefs.current.length > 0) {
      gsap.to(imgRefs.current, {
        opacity: (index) => (index === 1 ? 1 : 0), // Show index 0 and 1, hide others
        duration: 0.5, // Duration
        ease: "power2.out",
        delay: 0.3, // Delay for smoothness
      });
      gsap.to(imgRefs.current, {
        opacity: (index) => (index === 0 || index === 1 ? 1 : 0), // Show index 0 and 1, hide others
        duration: 0.5, // Duration
        ease: "power2.out",
        delay: 0.6, // Delay for smoothness
      });
    }

    // Animate videos if videoRefs is not null
    if (videoRefs.current && videoRefs.current.length > 0) {
      gsap.to(videoRefs.current, {
        opacity: (index) => (index === 1 ? 1 : 0), // Show index 0 and 1, hide others
        duration: 0.5, // Duration
        ease: "power2.out",
        delay: 0.3, // Delay for smoothness
      });
      gsap.to(videoRefs.current, {
        opacity: (index) => (index === 0 || index === 1 ? 1 : 0), // Show index 0 and 1, hide others
        duration: 0.5, // Duration
        ease: "power2.out",
        delay: 0.6, // Delay for smoothness
      });
    }
  });

  const handleClose = () => {
    // Fade-out animation when the component closes
    gsap.to(overlay.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        onClose(); // Trigger the parent onClose callback
      },
    });
  };

  return (
    <div
      ref={overlay}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      {/* Content */}
      <div className="bg-[#F0F1F5] p-6 rounded-md shadow-lg w-[90%] flex flex-col">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-3xl font-bold ml-[10%] proj-sm:ml-0">{title}</h2>
          {/* Close button */}
          <img
            src={close}
            className="w-14 cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <div className="grid grid-cols-[10%_80%_10%] items-center justify-center proj-sm:block">
          <div className="proj-sm:hidden">
            <img
              src={leftarrow}
              className="w-14 cursor-pointer"
              onClick={handleLeftButton}
            />
          </div>
          <div
            className="flex justify-center relative w-full h-[600px] left-10 proj-lg:h-[550px] proj-semi-lg:h-[500px] proj-semi-lg:left-[2rem] proj-medium:h-[400px] proj-medium:left-[2rem] proj-sm:left-[2rem] proj-small:h-[420px] proj-semi-small:h-[350px] proj-very-small:h-[270px] proj-tiny:h-[230px] proj-very-tiny:h-[200px]"
            ref={containerImg}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {tools.map((tool, index) => {
              const isCurrent = index === currentIndex;
              return tool.type === "video" ? (
                <video
                  key={index}
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={tool.src}
                  alt="video"
                  autoPlay={isCurrent} // Auto-play if it's playing
                  loop
                  muted
                  preload="auto"
                  className={`opacity-0 proj-lg-video:w-[62%] rounded-br-[50px] max-h-[550px] absolute proj-sm:w-[85%] shadow-[5px_3px_5px_0_rgba(0,_0,_0,_0.5)] ${
                    index === 0 ? "translate-x-[-60px] translate-y-[50px]" : ""
                  } ${index > 1 ? "opacity-0 translate-x-[20px]" : ""}`}
                  style={{
                    zIndex: tools.length - index, // Highest z-index for the first image
                  }}
                />
              ) : (
                <img
                  ref={(el) => (imgRefs.current[index] = el)} // Assign each img to the ref array
                  key={index}
                  src={tool}
                  alt="logo"
                  preload="auto"
                  className={`opacity-0 w-[90%] max-w-[1100px] aspect-[16/9] rounded-br-[50px] max-h-[550px] absolute proj-sm:w-[85%] shadow-[5px_3px_5px_0_rgba(0,_0,_0,_0.5)] ${
                    index === 0 ? "translate-x-[-60px] translate-y-[50px]" : ""
                  } ${index > 1 ? "opacity-0 translate-x-[20px]" : ""}`}
                  style={{
                    zIndex: tools.length - index, // Highest z-index for the first image
                  }}
                />
              );
            })}
          </div>
          <div className="flex justify-end proj-sm:hidden">
            <img
              src={rightarrow}
              className="w-14 cursor-pointer"
              onClick={handleRightButton}
            />
          </div>
        </div>
        <div className="ml-[13%] w-[75%] mt-6 text-lg proj-semi-lg:ml-[11%] proj-medium:ml-[11%] proj-sm:ml-[1%] proj-sm:w-[95%] phone:text-base">
          <p>
            <span className="font-semibold">Skills: </span>
            {skill}
          </p>
        </div>
        <div className="ml-[13%] w-[75%] text-lg mt-4 proj-semi-lg:ml-[11%] proj-medium:ml-[11%] proj-sm:ml-[1%] proj-sm:w-[95%] phone:text-base">
          {detail}
        </div>
        {link && (
          <div className="ml-[13%] text-lg mt-4 proj-semi-lg:ml-[11%] proj-medium:ml-[11%] proj-sm:ml-[1%] proj-sm:w-[95%] phone:text-base">
            <p>
              <span className="font-semibold">Link: </span>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {link}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overlay;
