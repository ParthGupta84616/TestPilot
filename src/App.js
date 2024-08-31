import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Fullfilled from "./component/Fullfilled";
import Navbar from "./component/Navbar";
import Animation from "./component/Animation";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/request/:id",
    element: <Fullfilled />,
  },
]);

function App() {
  return (
    <div className="h-full">
      <Animation />
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
