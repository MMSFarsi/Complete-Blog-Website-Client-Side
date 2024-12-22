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
        text: 'You need to be logged in to add to the watchlist.',
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
            onClick={handleAddWishlist}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
