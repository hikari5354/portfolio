import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Works from "./pages/Works.jsx";
import WorksDetail from "./pages/WorksDetail.jsx";
import WorksDTPDetail from "./pages/WorksDTPDetail.jsx";
import WorksOtherDetail from "./pages/WorksOtherDetail.jsx";

const Main = () => {
  return <></>;
};

export default Main;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      { path: "/about", element: <About /> },
      { path: "/works", element: <Works /> },
      { path: "worksdate/:slug", element: <WorksDetail /> },
      { path: "DTPData/:slug", element: <WorksDTPDetail /> },
      { path: "OtherData/:slug", element: <WorksOtherDetail /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <Main />
    </HelmetProvider>
  </React.StrictMode>
);
