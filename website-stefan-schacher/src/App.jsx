import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Portrait from "./pages/Portrait";
import Product from "./pages/Product";
import Documentation from "./pages/Documentation";
import Artists from "./pages/Artists";
import Wedding from "./pages/Wedding";
import Landscape from "./pages/Landscape";
import Report from "./pages/Report";
import Contact from "./pages/Contact";
import Imprint from "./pages/Imprint";
import DataPrivacy from "./pages/DataPrivacy";
import WorkLayout from "./components/WorkLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "work",
        element: <WorkLayout />,
        children: [
          { index: true, element: <Work /> },
          { path: "portrait", element: <Portrait /> },
          {
            path: "product",
            element: <Product />,
          },
          { path: "documentation", element: <Documentation /> },
          { path: "artists", element: <Artists /> },
          { path: "wedding", element: <Wedding /> },
          { path: "landscape", element: <Landscape /> },
        ],
      },
      { path: "contact", element: <Contact /> },
      { path: "imprint", element: <Imprint /> },
      { path: "data-privacy", element: <DataPrivacy /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
