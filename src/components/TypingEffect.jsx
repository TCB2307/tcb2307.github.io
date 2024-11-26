import React from "react";
import { motion } from "framer-motion";

const TypingEffect = ({ text }) => {
  const letters = text.split(""); // Split the text into individual letters

  return (
    <div style={{ display: "inline-block" }}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, display: "none" }} // Start with opacity 0
          animate={{ opacity: 1, display: "inline" }} // Fade in to opacity 1
          transition={{
            delay: 0.5 + index * 0.15, // Delay each letter to simulate typing
            duration: 0.01,
            ease: "easeOut",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default TypingEffect;
