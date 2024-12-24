import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('User logged out');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <header className="bg-gray-800 text-white shadow-lg">
      {/* Top Bar */}
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="text-2xl font-bold">GenIdeas</span>
        </Link>
        <div className="flex items-center space-x-6">
          {user ? (
            <>
              <img
                src={user.photoURL || 'https://via.placeholder.com/40'}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={handleLogOut}
                className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gray-700">
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <ul className="flex space-x-8 text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 font-bold underline'
                    : 'text-white hover:text-blue-400'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-blog"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 font-bold underline'
                    : 'text-white hover:text-blue-400'
                }
              >
                Add Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-blog"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 font-bold underline'
                    : 'text-white hover:text-blue-400'
                }
              >
                All Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features-blog"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 font-bold underline'
                    : 'text-white hover:text-blue-400'
                }
              >
                Features Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 font-bold underline'
                    : 'text-white hover:text-blue-400'
                }
              >
                Wishlist
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
