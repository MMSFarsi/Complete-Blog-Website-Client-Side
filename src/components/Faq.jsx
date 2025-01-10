import React from "react";

const Faq = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-8 px-4">
      <h1 className="text-2xl lg:text-3xl font-bold text-center text-white bg-[#484848] w-fit mx-auto px-4 py-2 rounded-md mb-6">
        Frequently Asked Questions
      </h1>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-gray-300 rounded-md mb-2">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-lg font-semibold bg-gray-100 p-3">
            What is this website about?
          </div>
          <div className="collapse-content p-4 bg-white">
            <p>
              This website is a platform for sharing and exploring blogs on various topics like technology, lifestyle, education, and more.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-gray-300 rounded-md mb-2">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold bg-gray-100 p-3">
            How can I add my own blog?
          </div>
          <div className="collapse-content p-4 bg-white">
            <p>
              To add your blog, sign in to your account, navigate to the "Add Blog" section, and fill in the required details about your blog post.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-gray-300 rounded-md mb-2">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold bg-gray-100 p-3">
            Is there a limit to how many blogs I can post?
          </div>
          <div className="collapse-content p-4 bg-white">
            <p>
              No, you can post as many blogs as you'd like. However, make sure to adhere to the community guidelines for quality content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
