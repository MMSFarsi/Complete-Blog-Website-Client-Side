import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

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
      Swal.fire({
    
        icon: "error",
        title: "Password Must be 6 character or more",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]+$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
     
        icon: "error",
        title: "Password must include at least one uppercase letter, one lowercase letter, and one digit.",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser(user);
            Swal.fire({
              title: "Success!",
              text: "Registration successful.",
              icon: "success",
            });
            navigate("/");
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              text: "Failed to update user profile.",
              icon: "error",
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      });
  };

  const handleGoogle = () => {
    signWithGoogle()
      .then((result) => {
        setUser(result.user);
  
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Logged in with Google successfully!",
        });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to log in with Google. Please try again.",
        });
      });
  };

  return (
    <div className="py-10  min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-sm p-6 border-[#676767] border bg-white dark:bg-gray-100 shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleCreateUser} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
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
             <span><img width="25" height="25" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/></span>
            <span className="font-medium text-gray-800">Register with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
