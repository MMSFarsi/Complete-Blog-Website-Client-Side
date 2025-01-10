import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { PhotoProvider, PhotoView } from 'react-photo-view'; 
import 'react-photo-view/dist/react-photo-view.css'; 
import toast from 'react-hot-toast';

const BlogCard = ({ blog }) => {
  const { user } = useContext(AuthContext);

  const handleAddWishlist = async () => {
    if (!user) {
     toast.error('You need to be logged in to add to the wishlist')
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
      const data = await axios.post('https://assignment-11-server-zeta-liart.vercel.app/wishlist', wishlistData);
      if (data.data.insertedId) {
     toast.success('Added to your Wishlist successfully')
      }
    } catch (error) {
      console.error('Error adding to Wishlist:', error);
    toast.error('Failed to add to the wishlist. Please try again')
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-400 hover:scale-95 hover:shadow-sm">
    <PhotoProvider>
      <PhotoView src={blog.image}>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover cursor-pointer"
        />
      </PhotoView>
    </PhotoProvider>
  
    <div className="p-5">
      <h3
        className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-600 transition"
        style={{ minHeight: "48px" }} // Ensures a consistent height
      >
        {blog.title}
      </h3>
  
      <span className="inline-block text-sm text-blue-500 bg-blue-50 px-2 py-1 rounded">
        {blog.category}
      </span>
      <div className="mt-4 flex justify-between items-center">
        <Link
          to={`/blog/${blog._id}`}
          className="bg-[#484848] text-white px-6 py-2 rounded-lg hover:border hover:border-[#484848] hover:bg-white hover:text-black transition duration-900"
        >
          Details
        </Link>
        <button
          onClick={handleAddWishlist}
          className="px-6 py-2 rounded-lg bg-white/30 border border-black/50 text-black font-semibold backdrop-blur-md shadow-md hover:bg-[#484848] hover:text-white transition-all duration-300"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default BlogCard;
