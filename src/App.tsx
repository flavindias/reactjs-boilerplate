import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


import { Home } from './routes/Home';
import { About } from './routes/About';
import { Users } from './routes/Users';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/users",
        element: <Users />,
    }
  ]);

export function App() {
    return <RouterProvider router={router} />;
}