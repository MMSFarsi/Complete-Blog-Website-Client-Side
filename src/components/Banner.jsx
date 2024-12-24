import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <img
        src="https://i.ibb.co/T4ND1NZ/handsome-young-man-shirt-pointing-fingers-left-promo-showing-logo-standing-blue-background.jpg"
        alt="Banner Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
        <div className="text-white max-w-md">
          {/* Animated Heading */}
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore Blogs and Discover Things You Never Knew
          </motion.h2>

          {/* Animated Description */}
          <motion.p 
            className="text-lg md:text-xl mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dive into a world of fascinating stories, tips, and insights.
          </motion.p>

          {/* Animated Button */}
          <motion.button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
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
