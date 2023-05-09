import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Blogs from "./pages/Home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Blogs />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
