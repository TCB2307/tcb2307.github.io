import React, { forwardRef } from "react";

const Button = forwardRef(({ text, onMouseEnter }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[#14BECA] text-white rounded-3xl px-4 py-2 cursor-default relative"
      onMouseEnter={onMouseEnter}
    >
      {text}
    </div>
  );
});

export default Button;
