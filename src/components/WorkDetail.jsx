import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function WorkDetail({ img, name, onShowOverlay }) {
  const imgRef = React.useRef();

  const handleMouseEnter = () => {
    gsap.to(imgRef.current, {
      opacity: 0.5,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div className="flex flex-col w-11/12 skill-m:mx-[5%]">
      <div className="flex justify-center skill-m:border-l-[1px] skill-m:border-r-[1px]">
        <img
          ref={imgRef}
          src={img}
          alt="logo"
          className="w-11/12 skill-m:w-full cursor-pointer"
          onClick={onShowOverlay}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="flex justify-center text-4xl font-medium pb-2 pt-8 skill-m:pl-[5%] skill-m:pt-[8%] skill-m:pb-[3%] skill-m:border-l-[1px] skill-m:border-r-[1px]">
        <div className="w-11/12 text-[1.3rem]">{name}</div>
      </div>
      <div className="flex justify-center text-[0.9rem] font-light skill-m:pl-[5%] skill-m:pb-[10%] skill-m:border-l-[1px] skill-m:border-r-[1px] skill-m:border-b-[1px]">
        <div className="w-11/12">
          <div
            className="px-3 py-[6px] border-2 inline-block cursor-pointer"
            onClick={onShowOverlay}
          >
            VIEW PROJECT
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkDetail;
