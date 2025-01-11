import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

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
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import PrivateRoute from './PrivateRoutes/PrivateRoute.jsx';
import UpdateBlog from './pages/UpdateBlog.jsx';
import Error from './components/Error.jsx';
import { Toaster } from 'react-hot-toast'
import MyBlog from './pages/MyBlog.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ScrollTop from './components/ScrollTop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollTop /> 
        <MainLayout />
      </>
    ),
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      { path: "*", 
        element: <Error></Error>  
       },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/sign-up',
        element:<SignUp></SignUp>
      },
      {
        path:'/all-blog',
        element:<AllBlog></AllBlog>
      },
      {
        path:'/updateBlog/:id',
        element:<PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment-11-server-zeta-liart.vercel.app/blog/${params.id}`)
      },
      {
        path: '/blog/:id',
        element: <BlogDetails></BlogDetails>,
      },
      {
        path:'/features-blog',
        element:<FeaturedBlogs></FeaturedBlogs>
      },
      {
        path:'/aboutUs',
        element:<AboutUs></AboutUs>
      },
      {
        path:'/add-blog',
        element:<PrivateRoute><AddBlog></AddBlog></PrivateRoute>
      },
      {
        path:'/my-blog',
        element:<PrivateRoute><MyBlog></MyBlog></PrivateRoute>
      },
      {
        path:'/wishlist',
        element:<PrivateRoute><Wishlist></Wishlist></PrivateRoute>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> <RouterProvider router={router} />
    <Toaster position='top-right' reverseOrder={false} />
    </AuthProvider>
  </StrictMode>,
)
