import React from "react";

const ContactUs = () => {
  return (
    <div className=" py-10 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Contact Us
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
      
        <div className="flex-1 border border-[#484848] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-4">
            Have any questions or feedback? We'd love to hear from you. Reach
            out to us using the information below or fill out the form.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Email:</strong>{" "}
            
                mir.blooger@yahoo.com
          
            </li>
            <li>
              <strong>Phone:</strong> +880 783 4782
            </li>
            <li>
              <strong>Address:</strong> Bohoddarhat, Chittagong,Bangladesh
            </li>
          </ul>
        </div>

    
        <div className="flex-1 bg-white border border-[#484848] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Send a Message
          </h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#484848] text-white py-2 rounded-lg  transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
