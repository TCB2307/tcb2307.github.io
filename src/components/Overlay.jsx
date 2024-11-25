import React from "react";

const Overlay = ({ title, onClose, tools }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Content */}
      <div className="bg-white p-6 rounded-md shadow-lg h-5/6 w-5/6">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <p>Here are the details of the project.</p>
        {/* Close button */}
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
        <div className="flex space-x-2 justify-center">
          {tools.map((tool, index) => (
            <img
              key={index}
              src={tool}
              alt="logo"
              className="w-14 about:w-[3rem] skill-text:w-[2.7rem] skill-sm:w-[3.5rem] phone:w-[3.1rem]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
