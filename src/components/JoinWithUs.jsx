import React from 'react';
import { Link } from 'react-router-dom';

const JoinWithUs = () => {
  return (
    <div className="border-black/50 border py-10 px-6 text-center w-[900px] mx-auto my-12">
      <h2 className="text-3xl font-extrabold mb-4">Join Our Blogging Community</h2>
      <p className=" text-lg sm:text-base leading-relaxed">
        Share your stories, ideas, and expertise with a global audience. Join now and be a part of a
        thriving community of writers and readers.
      </p>
      <div className="mt-6 flex justify-center">
        <Link
          to="/add-blog"
          className="px-8 py-3 text-lg font-semibold border  bg-white text-blue-700 rounded-lg shadow hover:bg-gray-100 transition duration-300"
        >
          Write a Blog
        </Link>
      </div>
    </div>
  );
};

export default JoinWithUs;
