import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';

const BlogDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    fetchSingleBlog();
    fetchComments();
  }, [id]);

  const fetchSingleBlog = async () => {
    try {
      const { data } = await axios.get(`https://assignment-11-server-zeta-liart.vercel.app/blog/${id}`);
      setBlog(data);
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`https://assignment-11-server-zeta-liart.vercel.app/comments/${id}`);
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const commentData = {
      blogId: id,
      userName: user.displayName,
      userPhoto: user.photoURL,
      text: commentText,
    };

    try {
      await axios.post('https://assignment-11-server-zeta-liart.vercel.app/comments', commentData);
      setCommentText('');
      fetchComments();
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6 ">
      <h1 className="text-[15px] lg:text-3xl font-bold mb-4 text-gray-800">{blog.title}</h1>
      <p className="text-sm lg:text-lg text-gray-600 leading-relaxed mb-6">{blog.shortDescription}</p>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto object-cover"
        />

<div className="flex items-center space-x-4">
            <span className="inline-block mb-5 mt-4 bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-sm">
              Category: {blog.category}
            </span>
          </div>
        <div className="p-6">
          <p className="text-sm lg:text-lg leading-relaxed mb-6">{blog.longDescription}</p>
       
          
          {blog.postAuther === user?.email && (
            <Link 
              to={`/updateBlog/${blog._id}`} 
              className=" px-4 py-2 mt-6 bg-[#484848] text-white rounded-md "
            >
              Update Blog
            </Link>
          )}
        </div>
      </div>

      <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl lg:text-2xl font-bold mb-4">Comments</h2>

        {blog.postAuther === user?.email ? (
          <p className="text-sm lg:text-xl text-gray-600 mb-8">You cannot comment on your own blog.</p>
        ) : (
          <>
            <form onSubmit={handleCommentSubmit} className="mb-6">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                className="w-full border border-gray-300 rounded-lg p-3"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Submit Comment
              </button>
            </form>
          </>
        )}

        <div>
          {comments.map((comment) => (
            <div key={comment._id} className="flex items-start mb-4 border-b pb-4">
              <img
                src={comment.userPhoto}
                alt={comment.userName}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h4 className="text-lg font-bold">{comment.userName}</h4>
                <p className="text-gray-600">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
