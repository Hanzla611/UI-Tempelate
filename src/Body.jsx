import React, { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter } from "react-router-dom";
const Browse = lazy(() => import("./pages/Browse"));
const Login = lazy(() => import("./pages/Login"));
import { RouterProvider } from "react-router-dom";
function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Toaster />
      <RouterProvider router={appRouter} />
    </Suspense>
  );
}

export default Body;
