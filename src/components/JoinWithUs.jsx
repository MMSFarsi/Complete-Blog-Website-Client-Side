
import { Link } from 'react-router-dom';

const JoinWithUs = () => {
  return (
    <div className="border-black/50 border py-3 lg:py-10 px-2 lg:px-6 text-center w-[320px] lg:w-[900px] mx-auto my-12">
      <h2 className="text-sm lg:text-2xl md:text-3xl font-bold mb-4">Join Our Blogging Community</h2>
      <p className="text-xs lg:text-sm text-gray-600 mb-6">
        Share your stories, ideas, and expertise with a global audience. Join now and be a part of a
        thriving community of writers and readers.
      </p>
      <div className="mt-6 flex justify-center">
        <Link
          to="/add-blog"
          className="px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-lg font-semibold border  bg-[#484848] text-white hover:text-black   rounded-lg shadow  hover:bg-white transition duration-300"
        >
          Write a Blog
        </Link>
      </div>
    </div>
  );
};

export default JoinWithUs;
