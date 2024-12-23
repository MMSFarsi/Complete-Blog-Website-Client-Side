import React, { useState } from "react";
import Swal from "sweetalert2";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscription = (e) => {
    e.preventDefault();

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }

 
    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "Subscription Successful",
        text: "Thank you for subscribing to our newsletter!",
        timer: 2000,
        showConfirmButton: false,
      });
      setEmail(""); 
    }, 500);
  };

  return (
    <div className="bg-gray-100 py-10 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Subscribe to our Newsletter
      </h2>
      <p className="text-gray-600 mb-6">
        Get the latest updates, exclusive deals, and more straight to your inbox.
      </p>
      <form
        onSubmit={handleSubscription}
        className="flex flex-col md:flex-row justify-center items-center gap-4"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full md:w-1/3 border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
