import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home/index.jsx";
import Nav from './components/Nav/nav.jsx';
import Footer from './components/Footer/footer.jsx';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element : <><Nav /><Home /><Footer /></>
    // errorElement: <Error />,
  }
  // {
  //   path: "/user",
  //   element : <><Nav/><ProtectedRoute /><Footer/></>,
  //   // errorElement: <Error />,
  // },
  // {
  //   path: "/SignIn",
  //   element : <><Nav/><Signin /><Footer/></>,
  //   // errorElement: <Error />,
  // }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals();
