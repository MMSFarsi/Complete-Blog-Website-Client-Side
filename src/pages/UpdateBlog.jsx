import axios from 'axios';
import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';

const UpdateBlog = () => {
  const data=useLoaderData()
  const {user}=useContext(AuthContext)
  const handleSubmit = async(e) => {
    e.preventDefault()
    const form=e.target
    const title=form.title.value
    const image=form.image.value
    const shortDescription=form.shortDescription.value
    const longDescription=form.longDescription.value
    const category=form.category.value
    const postAuther=user?.email
    const updatePostData={title,image,shortDescription,longDescription,category,postAuther}
    console.table(updatePostData);
    try{
      await axios.put(`http://localhost:4000/blog/${data._id}`,updatePostData)
      form.reset()
     
    
    }catch(err){
      console.log(err);
    }
  
 
   
  };
  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
      Update Blog Post
    </h2>
    <form onSubmit={handleSubmit} className="space-y-6">
  
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          defaultValue={data.title}
          name="title"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
          placeholder="Enter blog title"
          required
        />
      </div>
 
      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image URL
        </label>
        <input
          type="url"
          id="image"
          name="image"
          defaultValue={data.image}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
          placeholder="Enter image URL"
          required
        />
      </div>
  

      <div>
        <label
          htmlFor="shortDescription"
          className="block text-sm font-medium text-gray-700"
        >
          Short Description
        </label>
        <textarea
          id="shortDescription"
          name="shortDescription"
          defaultValue={data.shortDescription}
          rows="3"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
          placeholder="Enter a short description"
          required
        ></textarea>
      </div>
  
      {/* Long Description Input */}
      <div>
        <label
          htmlFor="longDescription"
          className="block text-sm font-medium text-gray-700"
        >
          Long Description
        </label>
        <textarea
          id="longDescription"
          name="longDescription"
          defaultValue={data.longDescription}
          rows="5"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
          placeholder="Enter a detailed description"
          required
        ></textarea>
      </div>
  
      {/* Category Selector */}
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          defaultValue={data.category}
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
        Update Blog
      </button>
    </form>
  </div>
  
  )
}

export default UpdateBlog