import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './routes/Home';
import { Alerts } from './routes/Alerts';
import { Users } from './routes/Users';
import { Login } from './routes/Login';
import { Root } from './routes/Root';
import { RecoverPass } from './routes/RecoverPass';
import { ErrorPage } from './routes/ErrorPage';
import './i18n';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "alerts",
                element: <Alerts />
            },
        ],
    },
    {
        path: "home",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    
    {
        path: "users",
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