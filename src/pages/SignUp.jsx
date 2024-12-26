import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast"; 

const SignUp = () => {
  const { createUser, updateUserProfile, setUser, signWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;


    if (password.length < 6) {
      toast.error("Password must be 6 characters or more.");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]+$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must include at least one uppercase letter, one lowercase letter, and one digit.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser(user);
            toast.success("Registration successful.");
            navigate("/"); // Navigate after successful registration
          })
          .catch((error) => {
            toast.error("Failed to update user profile.");
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogle = () => {
    signWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Logged in with Google successfully!");
        navigate("/"); 
      })
      .catch(() => {
        toast.error("Failed to log in with Google. Please try again.");
      });
  };

  return (
    <div className="py-10 min-h-screen flex items-center justify-center">
      <div className="card w-[300px] lg:w-[400px]  p-6 border-[#676767] border bg-white dark:bg-gray-100 shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleCreateUser} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <button className="w-full py-2 px-4 bg-[#484848] text-white font-semibold rounded-lg transition">
              Register
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-[#000000]">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={handleGoogle}
            className="flex items-center justify-center w-full py-2 px-4 bg-white border rounded-lg shadow hover:shadow-lg transition gap-2"
          >
            <span>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
              />
            </span>
            <span className="font-medium text-gray-800">Register with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
