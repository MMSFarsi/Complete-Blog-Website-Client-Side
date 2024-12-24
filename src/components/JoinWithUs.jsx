import React from 'react';
import { Link } from 'react-router-dom';

const JoinWithUs = () => {
  return (
    <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Join Our Blogging Community</h2>
      <p className="text-white">
        Share your stories, ideas, and expertise with a global audience. Join now and be a part of a
        thriving community of writers and readers.
      </p>
      <div className="mt-6 flex justify-center space-x-4">
     
        <Link
          to="/add-blog"
          className="px-6 py-2 bg-blue-700 text-white font-bold rounded-md hover:bg-blue-800"
        >
          Write a Blog
        </Link>
      </div>
    </div>
  );
};

export default JoinWithUs;
