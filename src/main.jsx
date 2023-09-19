import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import './index.css'

import { ThemeProvider } from "@material-tailwind/react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Shop'
import Signup from './shop/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Shop',
    element: <Shop />
  },
  {
    path: '/Signup',
    element: <Signup />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,<React.StrictMode>
    
    <ThemeProvider>
      <App/>
      
      {/* <Product/> */}
{/*  
  <Indexshop/> */}
    </ThemeProvider>
  </React.StrictMode>,
)
