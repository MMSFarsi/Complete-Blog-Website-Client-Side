
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-3 text-white bg-[#484848] rounded-lg hover:bg-primary-focus transition duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default Error;
