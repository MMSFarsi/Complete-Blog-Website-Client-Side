import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx';
import AllBlog from './pages/AllBlog.jsx';
import FeaturedBlogs from './pages/FeaturedBlogs.jsx';
import AddBlog from './pages/AddBlog.jsx';
import Wishlist from './pages/Wishlist.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/all-blog',
        element:<AllBlog></AllBlog>
      },
      {
        path:'/features-blog',
        element:<FeaturedBlogs></FeaturedBlogs>
      },
      {
        path:'/add-blog',
        element:<AddBlog></AddBlog>
      },
      {
        path:'/wishlist',
        element:<Wishlist></Wishlist>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
