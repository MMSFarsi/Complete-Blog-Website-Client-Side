import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

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
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              MY BLOG SITE
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {user ? (
              <>
                <img
                  src={user.photoURL || 'https://via.placeholder.com/40'}
                  alt="User Avatar"
                  className="lg:w-10 lg:h-10 w-6 h-6 rounded-full my-anchor-element"
                />
                
                <button
                  onClick={handleLogOut}
                  className="text-sm text-red-600 dark:text-red-500 hover:underline"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="login"
                className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-blog"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  ADD BLOG
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="all-blog"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  ALL BLOG
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/features-blog"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  FEATURES BLOG
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/wishlist"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  WISHLIST
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
