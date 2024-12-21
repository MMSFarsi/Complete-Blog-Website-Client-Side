import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const AddBlog = () => {
  const{user}=useContext(AuthContext)
 

  const handleSubmit = async(e) => {
    e.preventDefault()
    const form=e.target
    const title=form.title.value
    const image=form.image.value
    const description=form.description.value
    const category=form.category.value
    const postAuther=user?.email
    const postData={title,image,description,category,postAuther}
    console.table(postData);
    try{
      await axios.post('http://localhost:4000/blogs',postData)
      form.reset()
     
    
    }catch(err){
      console.log(err);
    }
  
 
   
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4">Add a New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
    
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
           
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter blog title"
            required
          />
        </div>

 
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
         
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter image URL"
            required
          />
        </div>

      
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Short Description
          </label>
          <textarea
            id="description"
            name="description"
          
            rows="4"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter a short description"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
          
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
          </select>
        </div>

    
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
