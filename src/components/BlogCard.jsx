import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({blog}) => {
  return (
    <div
 
    className="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
      <p className="text-gray-600 mb-4">{blog.description}</p>
      <span className="block text-sm text-blue-500 mb-4">
        Category: {blog.category}
      </span>
      <div className="flex space-x-4">
        <Link
         to={`/blog/${blog._id}`}
          
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Details
        </Link>
        <button
          onClick={() => handleAddToWishlist(blog)}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Wishlist
        </button>
      </div>
    </div>
  </div>
  )
}

export default BlogCard