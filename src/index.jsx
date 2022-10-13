import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Convert from "./Convert"

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"

import { loader as rootLoader } from "./root";

const router = createBrowserRouter([{
  path: "/", element: <App />, children: [{
    path: ":base/:text",
    element: <Convert />,
    loader: rootLoader
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)