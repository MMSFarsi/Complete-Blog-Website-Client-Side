import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filter,setFilter]=useState('')
  const [search,setSearch]=useState('')


  useEffect(() => {
    const fetchAllBlogs = async () => {
      const { data } = await axios.get(`https://assignment-11-server-zeta-liart.vercel.app/all-blogs?filter=${filter}&search=${search}`);
      setBlogs(data);
  };
    fetchAllBlogs();
  }, [filter,search]);




 

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h2 className="tex-xl lg:text-3xl font-bold mb-6 bg-[#484848] w-fit mx-auto text-white px-4 py-3">All Blogs</h2>
      <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          <div>
            <select
              name='category'
              id='category'
              className='border p-2 lg:p-4 rounded-lg'
              onChange={(e)=>setFilter(e.target.value)}
            >
              <option value=''>Filter By Category</option>
              <option value='Technology'>Technology</option>
              <option value='Lifestyle'>Lifestyle</option>
              <option value='Science'>Science</option>
              <option value='Education'>Education</option>
            </select>
          </div>

       
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-1 lg:px-6 p-1 lg:py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                onChange={e=>setSearch(e.target.value)}
                placeholder='Enter Blog Title'
                aria-label='Enter Blog Title'
              />

              <button className='px-1 md:px-4 py-1 lg:py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#484848] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
     
       
       
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard    key={blog.id} blog={blog}></BlogCard> )
        ) : (
          <p className="text-gray-500">No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default AllBlog;
