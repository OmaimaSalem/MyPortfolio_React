import { Fragment } from "react";
import MasterLayout from "./components/MasterLayout/MasterLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "experience",
          element: <Experience />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "work",
          element: <Work />,
        },
      ],
    },
  ]);
  return (
    <Fragment>
      <RouterProvider router={routes}></RouterProvider>
    </Fragment>
  );
}

export default App;
