import React from "react";
import Home from "./Pages/Home";
import { Error, About, Projects, Contacts, HireMe } from "../src/Components/Home";
import HomeLayout from "./Pages/HomeLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/hireMe", element: <HireMe /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
