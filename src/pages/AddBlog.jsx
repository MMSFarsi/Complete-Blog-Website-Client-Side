import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const category = form.category.value;
    const postAuther = user?.email;
    const postData = {
      title,
      image,
      shortDescription,
      longDescription,
      category,
      postAuther,
    };

    try {
      await axios.post('http://localhost:4000/blogs', postData);
      form.reset();
      navigate('/all-blog');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen mx-2 lg:mx-0 flex items-center justify-center bg-cover bg-center my-6">
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-2xl border border-gray-200">
        <h2 className="text-xl lg:text-4xl font-extrabold text-center text-black mb-8">
          Add a New Blog Post
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
      
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-black"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-2 block w-full border border-black/40 rounded-md bg-transparent text-black placeholder-black shadow-sm focus:ring-blue-400 focus:border-blue-400 p-3"
              placeholder="Enter blog title"
              required
            />
          </div>

         
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-black"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              className="mt-2 block w-full border border-black/40 rounded-md bg-transparent text-black placeholder-black shadow-sm focus:ring-blue-400 focus:border-blue-400 p-3"
              placeholder="Enter image URL"
              required
            />
          </div>

      
          <div>
            <label
              htmlFor="shortDescription"
              className="block text-sm font-medium text-black"
            >
              Short Description
            </label>
            <textarea
              id="shortDescription"
              name="shortDescription"
              rows="3"
              className="mt-2 block w-full border border-black/40 rounded-md bg-transparent text-black placeholder-black shadow-sm focus:ring-blue-400 focus:border-blue-400 p-3"
              placeholder="Enter a short description"
              required
            ></textarea>
          </div>

   
          <div>
            <label
              htmlFor="longDescription"
              className="block text-sm font-medium text-black"
            >
              Long Description
            </label>
            <textarea
              id="longDescription"
              name="longDescription"
              rows="5"
              className="mt-2 block w-full border border-black/40 rounded-md bg-transparent text-black placeholder-black shadow-sm focus:ring-blue-400 focus:border-blue-400 p-3"
              placeholder="Enter a detailed description"
              required
            ></textarea>
          </div>

 
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-black"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="mt-2 block w-full border border-black/40 rounded-md bg-transparent text-black placeholder-white/60 shadow-sm focus:ring-blue-400 focus:border-blue-400 p-3"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Technology">Technology</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Science">Science</option>
              <option value="Education">Education</option>
            </select>
          </div>

      
          <button
            type="submit"
            className="w-full bg-[#484848] text-white font-semibold py-3 px-4 rounded-md shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white/20"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
