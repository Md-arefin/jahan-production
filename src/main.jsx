import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Home from './components/Home';
import Love from './components/Love';
import Adri from './Adri';
import Shop from './components/Shop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/love",
        element:<Love></Love>
      },
      {
        path:"/shop",
        element:<Shop></Shop>
      },
      {
        path: "/adri",
        element: <Adri></Adri>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
