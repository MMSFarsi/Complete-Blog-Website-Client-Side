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
    <header className=" bg-slate-50 sticky top-0 backdrop-filter backdrop-blur-lg z-20">
      {/* Top Bar */}
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-3">
  <img
    src="https://i.ibb.co.com/R39RgW7/logoimage.png"
    className=" h-10  object-cover"
    alt="Logo"
  />

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
                className="px-6 py-2 rounded-lg bg-white/30 border border-black/50 text-black font-semibold backdrop-blur-md shadow-md hover:bg-red-500 hover:text-black transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
           <>
            <Link
              to="/login"
              className="px-6 py-2 rounded-lg bg-white/30 border border-black/50 text-black font-semibold backdrop-blur-md shadow-md hover:bg-white/50 hover:text-black transition-all duration-300"
            >
              Login
            </Link>
            <Link
  to="/sign-up"
  className="px-6 py-2 rounded-lg bg-white/30 border border-black/50 text-black font-semibold backdrop-blur-md shadow-md hover:bg-white/50 hover:text-black transition-all duration-300"
>
  Register
</Link>

           </>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="">
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <ul className="flex space-x-8 text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 font-bold underline'
                    : 'text-black hover:text-blue-400'
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
                    : 'text-black hover:text-blue-400'
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
                    : 'text-black hover:text-blue-400'
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
                    : 'text-black hover:text-blue-400'
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
                    : 'text-black hover:text-blue-400'
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
