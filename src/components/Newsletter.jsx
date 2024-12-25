import React, { useState } from "react";
import Swal from "sweetalert2";

const Newsletter = () => {


  const handleSubscription = (e) => {
    e.preventDefault();
 
      Swal.fire({
        icon: "success",
        title: "Subscription Successful",
        text: "Thank you for subscribing to our newsletter!",
        timer: 2000,
        showConfirmButton: false,
      })
  };

  return (
    <div className="border-black/50 border py-10 px-6 text-center w-[900px] mx-auto my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Subscribe to our Newsletter
      </h2>
      <p className="text-gray-600 mb-6">
        Get the latest updates, exclusive deals, and more straight to your inbox.
      </p>
      <form onSubmit={handleSubscription}className="flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email address"
          
          className="w-full md:w-1/3 border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-lg hover:border hover:border-black/50 hover:bg-white hover:text-black hover:font-bold transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
