import React from 'react';
import { motion } from 'framer-motion';

const GlassmorphicCard = ({ children, className = "", hoverEffect = true, onClick }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { 
        y: -10, 
        scale: 1.02,
        boxShadow: "0 20px 40px -10px rgba(255, 193, 7, 0.1)"
      } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        relative overflow-hidden
        bg-white/5 backdrop-blur-md 
        border border-white/10 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
        rounded-xl
        group
        ${className}
      `}
      onClick={onClick}
    >
      {/* Gradient Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/0 via-transparent to-[#FFC107]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
      
      {/* Shine Effect */}
      <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:animate-shine" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassmorphicCard;