import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Fullfilled from './component/Fullfilled';

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
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;