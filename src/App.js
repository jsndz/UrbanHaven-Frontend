import "./App.css";
import Home from "./pages/Home";
import SignUpPage from "./pages/Signup";
import LogInPage from "./pages/Login";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import productDetailsPage from "./pages/productDetails";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LogInPage></LogInPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <CheckoutPage></CheckoutPage>,
  },
  {
    path: "/product-details",
    element: <productDetailsPage></productDetailsPage>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
