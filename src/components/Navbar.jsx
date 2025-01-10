import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <header className=" bg-slate-50 sticky top-0 backdrop-filter backdrop-blur-lg z-20">

      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://i.ibb.co.com/R39RgW7/logoimage.png"
            className=" h-10  object-cover"
            alt="Logo"
          />

        </Link>

        <div className="flex items-center space-x-3 lg:space-x-6">
          {user ? (
            <>
              <img
                src={user.photoURL || 'https://via.placeholder.com/40'}
                alt="User Avatar"
                className="lg:w-10 lg:h-10 w-7 h-7 rounded-full border-2 border-white"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={handleLogOut}
                className="px-1 py-1  :px-6 lg:py-2 rounded-lg text-[10px] lg:text-sm bg-white/30 border border-black/50 text-black font-semibold backdrop-blur-md shadow-md hover:bg-red-500 hover:text-black transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-1 py-1  :px-6 lg:py-2 text-[10px] lg:text-sm rounded-lg bg-[#484848] border border-black/50 text-white font-semibold backdrop-blur-md shadow-md hover:bg-white/50 hover:text-black transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="px-1 py-1  :px-6 lg:py-2 text-[10px] lg:text-sm rounded-lg bg-white/30 border border-black/50 text-black font-semibold backdrop-blur-md shadow-md hover:bg-[#484848] hover:text-white transition-all duration-300"
              >
                Register
              </Link>

            </>
          )}
        </div>
      </div>


      <nav className="">
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <ul className="flex space-x-4 lg:space-x-8  text-[11px] lg:text-sm ">
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
           {user?.email &&
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
           }
           {user?.email &&
            <li>
            <NavLink
              to="/my-blog"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-400 font-bold underline'
                  : 'text-black hover:text-blue-400'
              }
            >
              My Blog
            </NavLink>
          </li>}
           {
            user?.email &&
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
           }
             <li>
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 font-bold underline'
                    : 'text-black hover:text-blue-400'
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
