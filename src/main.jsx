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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader : () => fetch('category.json'),
      },
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('featurs.json')
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)