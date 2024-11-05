import React from "react";
import { motion, MotionConfig } from "framer-motion";
import logo from "../images/logo.svg";

export default function Navigation() {
  const [active, setActive] = React.useState("text");
  console.log(active);
  return (
    <div>
      <div className="flex border-b-2 pb-4 pt-4 bg-white">
        <div className="flex w-2/6 items-center">
          <img src={logo} alt="logo" className="w-10 ml-8" />
        </div>
        <div className="w-4/6 mr-[8rem] lg:mr-10">
          <div className="hidden flex justify-between text-2xl font-semibold text-[#14BECA]">
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
          <div className="flex justify-end">
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
                className="relative h-20 w-20 bg-white"
                animate={
                  active === "text"
                    ? "default"
                    : active === true
                    ? "open"
                    : "close"
                }
              >
                <motion.span
                  style={{ left: "50%", top: "35%", x: "-50%", y: "50%" }}
                  className="absolute h-1 w-10 bg-black"
                  variants={{
                    open: {
                      rotate: ["0deg", "0deg", "45deg"],
                      top: ["35%", "45%", "45%"],
                    },
                    close: {
                      rotate: ["45deg", "0deg", "0deg"],
                      top: ["45%", "45%", "35%"],
                    },
                    default: {
                      rotate: "0deg",
                      top: "35%",
                    },
                  }}
                ></motion.span>
                <motion.span
                  style={{ left: "50%", top: "55%", x: "-50%", y: "50%" }}
                  className="absolute h-1 w-10 bg-black"
                  variants={{
                    open: {
                      rotate: ["0deg", "0deg", "-45deg"],
                      top: ["55%", "45%", "45%"],
                    },
                    close: {
                      rotate: ["-45deg", "0deg", "0deg"],
                      top: ["45%", "45%", "55%"],
                    },
                    default: {
                      rotate: "0deg",
                      top: "55%",
                    },
                  }}
                ></motion.span>
              </motion.button>
            </MotionConfig>
          </div>
        </div>
      </div>
      <div className="absolute h-[200px] top-[110px] right-0 z-[100]">
        <div>
          <div>About</div>
          <div>Skills</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
}
