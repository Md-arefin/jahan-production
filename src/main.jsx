import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Home from './components/Home';
import Adri from './Adri';
import Shops from './components/Shops';
import About from './components/About';

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
        path:"/shops",
        element:<Shops></Shops>,
        loader: () => fetch('/duck.json')
      },
      {
        path: "/adri",
        element: <Adri></Adri>
      },
      {
        path: "/about",
        element: <About></About>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
