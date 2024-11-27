import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const LoadingOverlay = ({ onLoadComplete }) => {
  const [loading, setLoading] = React.useState(true);

  const containerBar = React.useRef();
  const containerAll = React.useRef();

  useGSAP(() => {
    gsap.to(containerBar.current, {
      width: "100%",
      duration: 1.5,
      delay: 0.2,
      ease: "power2.out",
    });
    gsap.to(containerAll.current, {
      clipPath: "circle(0% at 50% 50%)",
      duration: 1,
      ease: "power2.inOut",
      delay: 0.8,
    });
  });

  React.useEffect(() => {
    // Simulate a loading process (you can replace this with your own logic)
    setTimeout(() => {
      setLoading(true);
      onLoadComplete(); // Notify when loading is complete
    }, 1700); // 1.5-second delay for loading screen
  }, [onLoadComplete]);

  return (
    loading && (
      <div
        ref={containerAll}
        className="fixed inset-0 bg-black opacity-50 flex justify-center items-center z-50 flex-col space-y-3"
        style={{ clipPath: "circle(100% at 50% 50%)" }}
      >
        <div className="text-white text-3xl">Loading</div>
        <div className="bg-white w-[200px] h-[2.5px]">
          <div ref={containerBar} className="bg-[#14BECA] w-0 h-full"></div>
        </div>
      </div>
    )
  );
};

export default LoadingOverlay;
