import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import myAva from "../images/avatar.png";
import arrow from "../images/arrow.svg";
import hero01 from "../images/hero01.png";
import hero02 from "../images/hero02.png";
import Button from "./Button";
import TypingEffect from "./TypingEffect";
import { motion } from "framer-motion";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollToPlugin);

function Intro({ scrollAbout }) {
  const type = React.useRef();
  const tag = React.useRef();
  const describe = React.useRef();
  const text = React.useRef();
  const cta = React.useRef();
  const copy01 = React.useRef();
  const copy02 = React.useRef();
  const tag01 = React.useRef();
  const tag02 = React.useRef();
  const tag03 = React.useRef();
  const img01 = React.useRef();
  const img02 = React.useRef();
  const icon = React.useRef();
  const arrowRef = React.useRef();

  useGSAP(() => {
    // Fade-in animation when component show
    gsap.fromTo(
      type.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.25,
        ease: "none",
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse the animation on each repeat
      }
    );

    gsap.to(arrowRef.current, {
      y: "5px", // Move down 2px
      repeat: -1, // Infinite loop
      yoyo: true, // Reverse the animation
      duration: 0.5, // Duration for each cycle
      ease: "power1.inOut", // Smooth easing
    });

    gsap.fromTo(
      tag.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.inOut",
        delay: 0,
      }
    );

    gsap.fromTo(
      [img01.current, img02.current],
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
      }
    );

    gsap.fromTo(
      describe.current,
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "none",
        delay: 0.7,
      }
    );

    gsap.fromTo(
      text.current,
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "none",
        delay: 0.9,
      }
    );

    gsap.fromTo(
      cta.current,
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "none",
        delay: 1.1,
      }
    );

    gsap.fromTo(
      icon.current,
      { scale: 0.5, opacity: 0, transformOrigin: "bottom center" },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(0.5, 0.3)",
        transformOrigin: "bottom center",
        delay: 1.4,
      }
    );
  });

  const handleHover = (ele) => {
    // Clear previous animations and properties
    gsap.killTweensOf(ele.current);
    gsap.set(ele.current, { clearProps: "all" });
    gsap.set(ele.current, {
      backgroundColor: "#14BECA",
      color: "#FFFFFF",
      borderColor: "#14BECA",
    });
    gsap.to(ele.current, {
      scaleX: 1.3,
      scaleY: 0.9,
      duration: 0.3, // Time for scaling
    });
    gsap.to(ele.current, {
      scaleX: 1,
      scaleY: 1,
      duration: 0.8, // Time for scaling
      ease: "elastic.out(0.8, 0.3)", // Bouncing effect for the scaling
      delay: 0.3,
    });
  };

  const handleLeave = (ele) => {
    // Clear previous animations and properties
    gsap.set(ele.current, {
      backgroundColor: "#FFFFFF",
      color: "#14BECA",
      borderColor: "#e5e7eb",
    });
  };

  const handleHoverTag = (ele) => {
    if (gsap.isTweening(ele.current)) {
      // Prevent a new animation if the current one is still in progress
      return;
    }
    // Clear previous animations and properties
    gsap.killTweensOf(ele.current);
    gsap.set(ele.current, { clearProps: "all" });
    gsap.to(ele.current, {
      y: -15,
      duration: 0.15, // Time for scaling
    });
    gsap.to(ele.current, {
      y: 0,
      duration: 0.5, // Time for scaling
      ease: "bounce", // Bouncing effect for the scaling
      delay: 0.15,
    });
  };

  // Usage for copy01 and copy02
  const handleHover01 = () => handleHover(copy01);
  const handleHover02 = () => handleHover(copy02);
  const handleLeave01 = () => handleLeave(copy01);
  const handleLeave02 = () => handleLeave(copy02);

  const handleHoverTag01 = () => handleHoverTag(tag01);
  const handleHoverTag02 = () => handleHoverTag(tag02);
  const handleHoverTag03 = () => handleHoverTag(tag03);

  return (
    <div>
      <div className="px-12 pt-8 ">
        <div
          className="text-1xl justify-center items-center pt-10 hidden md:flex"
          ref={img02}
        >
          <img src={myAva} alt="Avatar" className="w-60" />
        </div>
        <div className="flex py-8">
          <div className="flex flex-col space-y-4 w-3/5 pt-10 pl-14 mac:w-[70%] md:w-[100%] mac:pl-6 md:pl-[0px] sm:pt-0">
            <div className="text-7xl font-semibold py-4 m:text-6xl phone:text-5xl">
              <span>
                <TypingEffect text="I'm Andy" />
              </span>
              <span className="text-6xl translate-y-[-10px]" ref={type}>
                _
              </span>
            </div>
            <div
              className="flex space-x-5 font-normal text-[2.8rem] pt-4 lg:text-[2rem] phone:text-[1.4rem] sm:flex-col sm:space-x-0 sm:space-y-6"
              ref={tag}
            >
              <div
                ref={copy01}
                className="px-5 py-3 border-2 text-[#14BECA] lg:py-2 self-start cursor-default border-gray-200"
                onMouseEnter={handleHover01}
                onMouseLeave={handleLeave01}
              >
                Digital
              </div>
              <div className="flex items-center font-medium sm:hidden">&</div>
              <div
                ref={copy02}
                className="px-5 py-3 border-2 text-[#14BECA] lg:py-2 self-start cursor-default border-gray-200"
                onMouseEnter={handleHover02}
                onMouseLeave={handleLeave02}
              >
                Frontend Developer
              </div>
            </div>
            <div
              className="text-[1.1rem] pt-5 phone:text-[1rem] relative"
              ref={describe}
            >
              <span>
                I design and build clean, simple solutions websites with
                code.&nbsp;
              </span>
              <br className="phone:hidden" />
              Bringing ideas to life through thoughtful design is what I love
              most.
            </div>
            <div
              className="flex space-x-4 text-xs pt-3 phone:text-[0.65rem]"
              ref={text}
            >
              <Button
                text="WEBSITES"
                ref={tag01}
                onMouseEnter={handleHoverTag01}
              />
              <Button text="EDMS" ref={tag02} onMouseEnter={handleHoverTag02} />
              <Button
                text="ANIMATIONS"
                ref={tag03}
                onMouseEnter={handleHoverTag03}
              />
            </div>
            <div
              className="flex space-x-4 pt-3 w-[180px] h-[60px] btn cursor-pointer"
              ref={cta}
              onClick={scrollAbout}
            >
              {/* SVG with animation */}
              <svg width="180px" height="60px" viewBox="0 0 180 60">
                <polyline points="179,1 179,59 1,59 1,1 179,1" />
                <polyline points="179,1 179,59 1,59 1,1 179,1" />
              </svg>
              <div className="text-1xl relative top-2">FIND OUT MORE</div>
              <img
                ref={arrowRef}
                src={arrow}
                alt="arrow"
                className="w-5 relative bottom-2 right-1"
              />
            </div>
          </div>
          <div
            className="text-1xl w-2/5 flex justify-center items-center pt-10 mac:w-[30%] md:hidden"
            ref={img01}
          >
            <img src={myAva} alt="Avatar" className="w-80" />
          </div>
        </div>
      </div>
      <div className="w-full absolute">
        <motion.img
          src={hero02} // Using the imported image
          alt="IMG01"
          className="w-full"
          initial={{ clipPath: "inset(0 100% 0 0)" }} // Starts hidden (from the right)
          animate={{ clipPath: "inset(0 0% 0 0)" }} // Reveals fully
          transition={{
            duration: 2, // Animation duration (2 seconds)
            ease: "easeInOut", // Smooth transition
            delay: 1.5,
          }}
        />
      </div>
      <div className="w-full" ref={icon}>
        <img src={hero01} alt="IMG01" className="" />
      </div>
    </div>
  );
}

export default Intro;
