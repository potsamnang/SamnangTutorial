import React from "react";
import RootLayout from "./Layout/RootLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import HtmlIndex from "./Components/PageHome/PageHtml/HtmlIndex";
import CssIndex from "./Components/PageHome/PageCss/CssIndex";
import ReactIndex from "./Components/PageHome/PageReact/ReactIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "link-html",
        element: <HtmlIndex />,
      },
      {
        path: "link-css",
        element: <CssIndex />,
      },
      {
        path: "link-react",
        element: <ReactIndex />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
