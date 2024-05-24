import React from 'react'
import ReactDOM from 'react-dom/client'
import {

    RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.css';
// import 'react-tabulator/lib/styles.css';
import {router} from "./router.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
