import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const BlogCard = ({ blog }) => {
  const { user } = useContext(AuthContext);

  const handleAddWishlist = async () => {
    if (!user) {
      Swal.fire({
        title: 'Error',
        text: 'You need to be logged in to add to the wishlist.',
        icon: 'error',
      });
      return;
    }

    const wishlistData = {
      userEmail: user.email,
      userName: user.displayName,
      blogId: blog._id,
      title: blog.title,
      photo: blog.image,
      category: blog.category,
      description: blog.description,
    };

    try {
      const data = await axios.post('http://localhost:4000/wishlist', wishlistData);
      if (data.data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Added to your Wishlist successfully.',
          icon: 'success',
        });
      }
    } catch (error) {
      console.error('Error adding to Wishlist:', error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to add to the wishlist. Please try again.',
        icon: 'error',
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-600 transition">
          {blog.title}
        </h3>
   
        <span className="inline-block text-sm text-blue-500 bg-blue-50 px-2 py-1 rounded">
          {blog.category}
        </span>
        <div className="mt-4 flex justify-between items-center">
          <Link
            to={`/blog/${blog._id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Details
          </Link>
          <button
            onClick={handleAddWishlist}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
