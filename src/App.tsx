import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import { Home } from './routes/Home';
import { About } from './routes/About';
import { Users } from './routes/Users';
import { Login } from './routes/Login';
import { RecoverPass } from './routes/RecoverPass';
import { ErrorPage } from './routes/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/users",
        element: <Users />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/recover-pass",
        element: <RecoverPass />,
        errorElement: <ErrorPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    }
  ]);

export function App() {
    return <RouterProvider router={router} />;
}