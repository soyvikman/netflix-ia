import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  //Add logic from auth changes

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
