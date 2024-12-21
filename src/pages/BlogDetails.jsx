import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
 
    const { id } = useParams()
    const [blog, setBlog] = useState([])
    useEffect(() => {
      fetchSingleBlog()
    }, [id])
  
    const fetchSingleBlog = async () => {
      const { data } = await axios.get(`http://localhost:4000/blog/${id}`)
      setBlog(data)
    }
    console.log(blog);
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{blog.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {blog.description}
          </p>
          <div className="flex items-center space-x-4">
            <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-sm">
              Category: {blog.category}
            </span>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails