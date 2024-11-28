import React from "react";
import { motion, MotionConfig } from "framer-motion";
import logo from "../images/logo.svg";

export default function Navigation({
  scrollToAbout,
  scrollToSkill,
  scrollToProject,
  scrollToContact,
}) {
  const [active, setActive] = React.useState("text");
  return (
    <motion.div
      className="relative h-[90px]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0,
        type: "spring", // Use spring for a bounce effect
        stiffness: 140, // Controls the stiffness of the spring (higher = stiffer)
        damping: 10,
      }}
    >
      <div className="flex pb-4 pt-[3rem] top-[-2rem] bg-white relative border-b-2 z-[101]">
        <div className="flex w-2/6 items-center">
          <img src={logo} alt="logo" className="w-10 ml-8 py-[7px] h-[56px]" />
        </div>
        <div className="w-4/6 mr-[8rem] md:mr-10">
          <div className="flex justify-between text-2xl font-semibold text-[#14BECA] md:hidden">
            <div
              onClick={scrollToAbout}
              className="text-[#14BECA] relative group text-2xl font-semibold cursor-pointer inline-block mx-5 py-3"
            >
              About
              <span className="absolute bottom-[5px] left-1/2 w-0 h-[3px] bg-[#54b3d6] transform -translate-x-1/2 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </div>
            <div
              onClick={scrollToSkill}
              className="text-[#14BECA] relative group text-2xl font-semibold cursor-pointer inline-block mx-5 py-3"
            >
              Skills
              <span className="absolute bottom-[5px] left-1/2 w-0 h-[3px] bg-[#54b3d6] transform -translate-x-1/2 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </div>
            <div
              onClick={scrollToProject}
              className="text-[#14BECA] relative group text-2xl font-semibold cursor-pointer inline-block mx-5 py-3"
            >
              Projects
              <span className="absolute bottom-[5px] left-1/2 w-0 h-[3px] bg-[#54b3d6] transform -translate-x-1/2 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </div>
            <div
              onClick={scrollToContact}
              className="text-[#14BECA] relative group text-2xl font-semibold cursor-pointer inline-block mx-5 py-3"
            >
              Contact
              <span className="absolute bottom-[5px] left-1/2 w-0 h-[3px] bg-[#54b3d6] transform -translate-x-1/2 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </div>
          </div>
          <div>
            <div className="justify-end hidden md:flex">
              <MotionConfig
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <motion.button
                  onClick={() =>
                    setActive((prev) => {
                      prev = prev === "text" ? true : !prev;
                      return prev;
                    })
                  }
                  className="relative h-10 w-20 bg-white mt-[7px]"
                  animate={
                    active === "text"
                      ? "default"
                      : active === true
                      ? "open"
                      : "close"
                  }
                >
                  <motion.span
                    style={{ left: "50%", top: "30%", x: "-50%", y: "50%" }}
                    className="absolute h-1 w-10 bg-black"
                    variants={{
                      open: {
                        rotate: ["0deg", "0deg", "45deg"],
                        top: ["30%", "45%", "45%"],
                      },
                      close: {
                        rotate: ["45deg", "0deg", "0deg"],
                        top: ["45%", "45%", "30%"],
                      },
                      default: {
                        rotate: "0deg",
                        top: "30%",
                      },
                    }}
                  ></motion.span>
                  <motion.span
                    style={{ left: "50%", top: "60%", x: "-50%", y: "50%" }}
                    className="absolute h-1 w-10 bg-black"
                    variants={{
                      open: {
                        rotate: ["0deg", "0deg", "-45deg"],
                        top: ["60%", "45%", "45%"],
                      },
                      close: {
                        rotate: ["-45deg", "0deg", "0deg"],
                        top: ["45%", "45%", "60%"],
                      },
                      default: {
                        rotate: "0deg",
                        top: "60%",
                      },
                    }}
                  ></motion.span>
                </motion.button>
              </MotionConfig>
            </div>
          </div>
        </div>
      </div>
      <MotionConfig
        transition={{
          duration: 0.6,
          ease: "backInOut",
        }}
      >
        <motion.div
          animate={
            active === "text" ? "default" : active === true ? "open" : "close"
          }
          variants={{
            open: {
              opacity: 1,
              top: "75px",
              transition: {
                opacity: { duration: 0.1 }, // First animate opacity
                top: { duration: 0.3, delay: 0.1 }, // Then move to 75px after opacity animation
              },
            },
            close: {
              top: "-225px",
              opacity: 0,
            },
            default: {
              top: "-225px",
              opacity: 0,
            },
          }}
          className="absolute h-fit top-[-225px] right-0 z-[100] opacity-0 bg-white overflow-hidden hidden md:flex"
        >
          <div className="font-extralight text-2xl text-center border-l-[1px] text-[#14BECA]">
            <div
              className="px-[3rem] pb-5 pt-10 border-b-[1px] cursor-pointer"
              onClick={() => {
                scrollToAbout();
                setActive(false);
              }}
            >
              About
            </div>
            <div
              className="px-[3rem] py-5 border-b-[1px] cursor-pointer"
              onClick={() => {
                scrollToSkill();
                setActive(false);
              }}
            >
              Skills
            </div>
            <div
              className="px-[3rem] py-5 border-b-[1px] cursor-pointer"
              onClick={() => {
                scrollToProject();
                setActive(false);
              }}
            >
              Projects
            </div>
            <div
              className="px-[3rem] py-5 border-b-[1px] cursor-pointer"
              onClick={() => {
                scrollToContact();
                setActive(false);
              }}
            >
              Contact
            </div>
          </div>
        </motion.div>
      </MotionConfig>
    </motion.div>
  );
}
