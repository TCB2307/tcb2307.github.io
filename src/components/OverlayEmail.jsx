import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const OverlayEmail = ({ onClose }) => {
  const [focusState, setFocusState] = React.useState({
    name: false,
    email: false,
    message: false,
  });

  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const messageRef = React.useRef();

  const inputName = React.useRef();
  const inputEmail = React.useRef();
  const inputMessage = React.useRef();

  // Mapping of field names to refs
  const inputRefs = {
    name: nameRef,
    email: emailRef,
    message: messageRef,
  };
  // Mapping of field names to refs
  const inputDatas = {
    name: inputName,
    email: inputEmail,
    message: inputMessage,
  };

  const handleFocus = (field) => {
    setFocusState((prev) => ({ ...prev, [field]: true }));

    // Use the ref to access the corresponding input field
    const inputRef =
      inputRefs[field] || (field === "message" ? messageRef : null);
    const isMobile = window.innerWidth <= 768; // Adjust the breakpoint for mobile screens

    // Apply different styles for "message" field
    const isMessage = field === "message";
    gsap.to(inputRef.current, {
      color: isMessage ? "#28c3cf" : "#28c3cf",
      scale: 0.75,
      top: isMessage ? -40 : -45,
      left: isMessage ? -30 : -30,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleBlur = (field) => {
    setFocusState((prev) => ({ ...prev, [field]: false }));

    // Use the ref to access the corresponding input field
    const inputRef =
      inputRefs[field] || (field === "message" ? messageRef : null);

    const inputData = inputDatas[field];

    // Check if the input field is empty or filled
    const inputValue = inputData.current ? inputData.current.value : "";

    const isMessage = field === "message";
    if (!inputValue && inputRef.current) {
      gsap.to(inputRef.current, {
        color: isMessage ? "#9ca7b6" : "#9ca7b6",
        scale: 1,
        top: -0,
        left: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(inputRef.current, {
        color: isMessage ? "#9ca7b6" : "#9ca7b6",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const overlay = React.useRef(); // Reference to the overlay container

  useGSAP(() => {
    const inputFields = document.querySelectorAll("input, textarea");

    // For each input/textarea element
    inputFields.forEach((field) => {
      const mouseEnterHandler = () => {
        gsap.to(field, { duration: 0.3, backgroundColor: "#e2eaf3" });
      };

      const mouseLeaveHandler = () => {
        gsap.to(field, { duration: 0.3, backgroundColor: "#f0f4fa" });
      };

      const addMouseEvents = () => {
        field.addEventListener("mouseenter", mouseEnterHandler);
        field.addEventListener("mouseleave", mouseLeaveHandler);
      };

      const removeMouseEvents = () => {
        field.removeEventListener("mouseenter", mouseEnterHandler);
        field.removeEventListener("mouseleave", mouseLeaveHandler);
      };

      // Add mouse hover effects initially
      addMouseEvents();

      // On focus, remove hover effects and set the focus background color
      field.addEventListener("focus", () => {
        removeMouseEvents();
        gsap.to(field, { duration: 0.3, backgroundColor: "#fefefc" });
      });

      // On blur, reset the background and re-enable hover effects
      field.addEventListener("blur", () => {
        gsap.to(field, { duration: 0.3, backgroundColor: "#f0f4fa" });
        addMouseEvents();
      });
    });

    // Fade-in animation when component show
    gsap.fromTo(
      overlay.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
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
      <div className="bg-[#D6D6D6] p-6 w-[60%] flex flex-col rounded-lg shadow-md proj-sm:px-2 relative proj-sm:w-[80%] proj-sm:pt-[2rem]">
        <div
          onClick={handleClose}
          className="cursor-pointer absolute top-0 right-0 w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 border-l-2 border-b-2 border-gray-400 rounded transition duration-200"
        >
          X
        </div>
        <div className="text-black text-5xl mb-10 flex justify-center text-center proj-sm:text-2xl proj-sm:mb-1">
          How can I help you today?
        </div>
        <form className="w-[70%] mx-auto bg-[#D6D6D6] p-6 proj-sm:px-0 proj-sm:w-[95%]">
          <div className="flex space-x-10 mb-4 proj-sm:flex-col proj-sm:space-x-0 proj-sm:space-y-3 proj-sm:mb-0">
            <div className="w-6/12 proj-sm:w-full">
              <input
                ref={inputName}
                type="text"
                id="name"
                name="name"
                required
                className="w-full pl-5 relative pb-5 pt-4 rounded-2xl border-[rgba(20, 190, 202)] focus:outline-none focus:ring-2 border-2 focus:border-[rgba(20,190,202,0.91)] bg-[#f0f4fa]"
                style={{
                  boxShadow: focusState.name
                    ? "0 0 0 5px rgba(20, 190, 202, 0.11)"
                    : "none",
                }}
                onFocus={() => handleFocus("name")}
                onBlur={() => handleBlur("name")}
              />
              <label
                htmlFor="name"
                className="text-[#9ca7b6] font-medium mb-2 z-10 relative top-[-50%] left-5 cursor-auto pointer-events-none proj-sm:bottom-12"
              >
                <div ref={nameRef} className="relative w-[150px]">
                  Full name
                </div>
              </label>
            </div>

            <div className="w-6/12 proj-sm:w-full">
              <input
                ref={inputEmail}
                type="email"
                id="email"
                name="email"
                required
                className="w-full pl-5 relative pb-5 pt-4 rounded-2xl border-[rgba(20, 190, 202)] focus:outline-none focus:ring-2 border-2 focus:border-[rgba(20,190,202,0.91)] bg-[#f0f4fa]"
                style={{
                  boxShadow: focusState.email
                    ? "0 0 0 5px rgba(20, 190, 202, 0.11)"
                    : "none",
                }}
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
              />
              <label
                htmlFor="email"
                className="text-[#9ca7b6] font-medium mb-2 relative top-[-50%] left-5 cursor-auto pointer-events-none proj-sm:bottom-12"
              >
                <div ref={emailRef} className="relative w-[150px]">
                  Email
                </div>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="text-[#9ca7b6] font-medium mb-2 relative top-10 left-5 cursor-auto pointer-events-none z-10"
            >
              <div ref={messageRef} className="relative w-[150px]">
                Send a message
              </div>
            </label>
            <textarea
              ref={inputMessage}
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-5 relative pb-5 pt-7 rounded-2xl border-[rgba(20, 190, 202)] focus:outline-none focus:ring-2 border-2 focus:border-[rgba(20,190,202,0.91)] bg-[#f0f4fa]"
              style={{
                boxShadow: focusState.message
                  ? "0 0 0 5px rgba(20, 190, 202, 0.11)"
                  : "none",
              }}
              onFocus={() => handleFocus("message")}
              onBlur={() => handleBlur("message")}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-[180px] bg-[#14BECA] text-white font-bold py-3 rounded-lg hover:bg-[#12a6b2] transition-all mt-10 proj-sm:mt-2"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default OverlayEmail;
