import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Body = () => {
  const route = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/Browse",
      element: <Browse />
    },
  ]);
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

export default Body;
