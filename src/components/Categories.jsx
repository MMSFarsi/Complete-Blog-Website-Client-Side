import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Technology', image: 'https://via.placeholder.com/100' },
  { name: 'Lifestyle', image: 'https://via.placeholder.com/100' },
  { name: 'Education', image: 'https://via.placeholder.com/100' },
  { name: 'Science', image: 'https://via.placeholder.com/100' },
];

const Categories = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Featured Categories</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <Link
            to={`/category/${category.name.toLowerCase()}`}
            key={category.name}
            className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:bg-gray-100"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <span className="text-lg font-semibold text-gray-700">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
