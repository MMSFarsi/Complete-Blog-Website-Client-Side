import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, setUser, signWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((data) => {
        if (data?.user?.email) {
          setUser(data.user);
          toast.success("Login Successful");
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("Login Failed");
      });
  };

  const handleGoogle = () => {
    signWithGoogle()
      .then((result) => {
        if (result?.user?.email) {
          setUser(result.user);
          toast.success("Google Login Successful");
          navigate("/"); 
        }
      })
      .catch((err) => {
        toast.error("Google Login Failed");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-sm p-6 border-[#676767] border bg-white shadow-lg rounded-lg">
        <h2 className="text-sm font-bold text-[#676767] mb-6">
          Dive into a world of fascinating stories, tips, and insights.
        </h2>
        <form onSubmit={handleLoginUser} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <button className="w-full py-2 px-4 bg-[#484848] text-white font-semibold rounded-lg transition">
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-[#000000]">
            Don't have an account?{" "}
            <Link to="/sign-up" className="underline">
              Register
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
            <span className="font-medium text-gray-800">Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
