import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  const axiosSecure=useAxiosSecure()

  useEffect(() => {
    function fetchWishlist() {
      if (user?.email) {
        axiosSecure
          .get(`/wishlist/${user?.email}`)
          .then(({ data }) => setWishlist(data));
      }
    }

    fetchWishlist();
  }, [user?.email]);

  const handleRemoveFromWishlist = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/wishlist/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Wishlist has been deleted.", "success");
              setWishlist((prev) => prev.filter((item) => item._id !== id));
            }
          });
      }
    });
  };

  const handleViewDetails = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Wishlist
      </h2>
      <div className="w-full">
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md text-sm md:text-base">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item) => (
              <tr
                key={item._id}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-3 text-gray-800 font-medium">
                  {item.title}
                </td>
                <td className="px-4 py-3 text-blue-500">{item.category}</td>
                <td className="px-4 py-3">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleViewDetails(item.blogId || item._id)}
                      className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-xs md:text-sm"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => handleRemoveFromWishlist(item._id)}
                      className="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition text-xs md:text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
