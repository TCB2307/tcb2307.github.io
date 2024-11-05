import React from "react";
import { motion, MotionConfig } from "framer-motion";
import logo from "../images/logo.svg";

export default function Navigation() {
  const [active, setActive] = React.useState("text");
  console.log(active);
  return (
    <div className="relative h-[90px]">
      <div className="flex pb-4 pt-4 bg-white relative border-b-2 z-[101]">
        <div className="flex w-2/6 items-center">
          <img src={logo} alt="logo" className="w-10 ml-8 py-[7px]" />
        </div>
        <div className="w-4/6 mr-[8rem] md:mr-10">
          <div className="flex justify-between text-2xl font-semibold text-[#14BECA] md:hidden">
            <div className="flex items-center justify-center px-5 py-3">
              About
            </div>
            <div className="flex items-center justify-center px-5 py-3">
              Skills
            </div>
            <div className="flex items-center justify-center px-5 py-3">
              Projects
            </div>
            <div className="flex items-center justify-center px-5 py-3">
              Contact
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
              top: "75px",
            },
            close: {
              top: "-225px",
            },
            default: {
              top: "-225px",
            },
          }}
          className="absolute h-fit top-[-225px] right-0 z-[100] bg-white overflow-hidden"
        >
          <div className="font-extralight text-2xl text-center border-l-[1px] text-[#14BECA]">
            <div className="px-[3rem] pb-5 pt-10 border-b-[1px]">About</div>
            <div className="px-[3rem] py-5 border-b-[1px]">Skills</div>
            <div className="px-[3rem] py-5 border-b-[1px]">Projects</div>
            <div className="px-[3rem] py-5 border-b-[1px]">Contact</div>
          </div>
        </motion.div>
      </MotionConfig>
    </div>
  );
}
