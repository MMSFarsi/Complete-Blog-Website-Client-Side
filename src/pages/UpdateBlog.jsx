import axios from 'axios';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const UpdateBlog = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const category = form.category.value;
    const postAuther = user?.email;
    const updatePostData = {
      title,
      image,
      shortDescription,
      longDescription,
      category,
      postAuther,
    };
    console.table(updatePostData);
    try {
      await axios.put(`http://localhost:4000/blog/${data._id}`, updatePostData);
      form.reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen mx-2 lg:mx-0 flex items-center justify-center bg-cover bg-center my-6">
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-2xl border border-gray-200">
        <h2 className="text-xl lg:text-3xl font-bold mb-8  text-white bg-[#484848] w-fit mx-auto px-4 py-3 text-center">
          Update Post
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
        
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-black">
              Title
            </label>
            <input
              type="text"
              id="title"
              defaultValue={data.title}
              name="title"
              className="mt-2 block w-full border border-black/40 rounded-md bg-transparent text-black placeholder-black shadow-sm focus:ring-blue-400 focus:border-blue-400 p-3"
              placeholder="Enter blog title"
              required
            />
          </div>

       
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-black">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              defaultValue={data.image}
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
              defaultValue={data.shortDescription}
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
              defaultValue={data.longDescription}
              rows="5"
              className="mt-2 block w-full border border-black/40 rounded-md bg-transparent text-black placeholder-black shadow-sm focus:ring-blue-400 focus:border-blue-400 p-3"
              placeholder="Enter a detailed description"
              required
            ></textarea>
          </div>

      
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-black">
              Category
            </label>
            <select
              id="category"
              name="category"
              defaultValue={data.category}
              className="mt-2 block w-full border border-black/40 rounded-md bg-transparent text-black shadow-sm focus:ring-blue-400 focus:border-blue-400 p-3"
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
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
