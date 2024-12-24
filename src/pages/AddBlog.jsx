import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const { user } = useContext(AuthContext);
    const navigate=useNavigate()

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
      navigate('/all-blog')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        Add a New Blog Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            placeholder="Enter blog title"
            required
          />
        </div>

        {/* Image URL Input */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Short Description Input */}
        <div>
          <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">
            Short Description
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            rows="3"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            placeholder="Enter a short description"
            required
          ></textarea>
        </div>

        {/* Long Description Input */}
        <div>
          <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700">
            Long Description
          </label>
          <textarea
            id="longDescription"
            name="longDescription"
            rows="5"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            placeholder="Enter a detailed description"
            required
          ></textarea>
        </div>

        {/* Category Selector */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
