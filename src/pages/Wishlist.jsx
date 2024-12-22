import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      if (user?.email) {
        try {
          const { data } = await axios.get(`http://localhost:4000/wishlist/${user.email}`);
          setWishlist(data);
        } catch (err) {
          console.error('Error fetching wishlist:', err);
          setError('Failed to load your wishlist. Please try again later.');
        }
      }
    };

    fetchWishlist();
  }, [user?.email]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Your Wishlist</h2>
      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : wishlist.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => (
                <tr
                  key={item._id}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-2">
                    <img
                      src={item.photo}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 text-gray-800 font-medium">{item.title}</td>
                  <td className="px-4 py-2 text-blue-500">{item.category}</td>
                  <td className="px-4 py-2 text-gray-600">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">
          Your wishlist is empty. Start adding your favorite blogs!
        </p>
      )}
    </div>
  );
};

export default Wishlist;
