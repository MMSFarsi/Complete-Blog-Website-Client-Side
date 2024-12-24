import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";


const Login = () => {
  const { signInUser, setUser, signWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((data) => {
        if(data?.user?.email){
          setUser(data.user);
          Swal.fire({
            title: ' Login Successful!',
         
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(() => {
            navigate("/");
            
        });

        }
      })
      .catch((error) => {
       
        Swal.fire({
          title: 'Login Failed',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      });
  };

  const handleGoogle = () => {
  signWithGoogle()
    // generate token
  
      .then((result) => {
        if(result?.user?.email){
          setUser(result.user);
          Swal.fire({
            title: 'Google Login Successful!',
         
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(() => {
            navigate("/");
            
        });

        }
       
      })
      .catch((err) => {
     
        Swal.fire({
          title: 'Google Login Failed',
          text: err.message,
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800  min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-sm p-6 bg-white dark:bg-gray-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800  mb-6">Login</h2>
        <form onSubmit={handleLoginUser} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <button className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition">
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-indigo-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={handleGoogle}
            className="flex items-center justify-center w-full py-2 px-4 bg-white border rounded-lg shadow hover:shadow-lg transition gap-2"
          >
            <FaGoogle className="text-xl text-red-500" />
            <span className="font-medium text-gray-800">Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
