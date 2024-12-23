import React from "react";

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: `url("https://i.ibb.co.com/5nV7wmG/social-media-networking-online-communication-connect-concept-53876-124862.jpg")`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover amazing deals and exclusive content!
        </p>
        <a
          href="/get-started"
          className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Banner;
