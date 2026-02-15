import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, type = 'fade', className = '', delay = 0 }) => {
  // Word/Character splitting logic could be added for more complex typing effects
  // For now, we'll implement word-by-word reveal or simple fade

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: type === 'slideUp' ? 20 : 0,
      x: type === 'slideRight' ? -20 : 0,
    },
  };

  if (type === 'typing') {
    const letters = Array.from(text);
    return (
      <motion.div
        className={`flex flex-wrap ${className}`}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {letters.map((letter, index) => (
          <motion.span variants={child} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Default staggered word reveal
  const words = text.split(" ");
  return (
    <motion.div
      className={`flex flex-wrap gap-x-[0.25em] ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;