import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Blogs from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";

function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Blogs />,
      },
      {
        path: ":id",
        element: <SingleBlog />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ],
  },{
    element: <Login />,
    path: "sign-up"
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
