import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/login/login';
import PageNotFound from './pages/PageNotFound/index';
import "./Global.css"
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/cadastro",
    element: <Register/>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
          <RouterProvider router={router} />
  </React.StrictMode>
);

