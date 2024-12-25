import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  const words = ["blog", "world", "ideas", "stories"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px]">
      <img
        src="https://i.ibb.co.com/Z8LLh8R/handsome-young-man-shirt-pointing-fingers-left-promo-showing-logo-standing-blue-background.jpg"
        alt="Banner Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>


      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
        <div className="text-white max-w-md">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-pink-400"
            >
              {words[currentWord]}
            </motion.span>{" "}
            and Discover Things You Never Knew
          </motion.h2>

   
          <motion.p
            className="text-lg md:text-xl mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dive into a world of fascinating stories, tips, and insights.
          </motion.p>

    
          <motion.button
            className="bg-[#484848] text-white px-6 py-2 rounded-lg "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Start Exploring
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
