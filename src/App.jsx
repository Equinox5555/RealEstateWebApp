import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Query from "./Pages/Query";
import AppLayout from "./Pages/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/query',
        element: <Query />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;