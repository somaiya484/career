import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Statistics from './components/Statistics/Statistics';
import SingleFeatures from './components/SingleFeatures/SingleFeatures';
import Errorpage from './components/Errorpage/Errorpage';
import Blog from './components/Blog/Blog';
import AppliedJob from './components/AppliedJob/AppliedJob';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('category.json'),
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '/applied',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: '/jobs/:jobId',
        element: <SingleFeatures></SingleFeatures>,
        loader: ({params}) => fetch("/featurs.json")
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)