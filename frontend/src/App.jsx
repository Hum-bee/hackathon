import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import { CartProvider } from "./pages/CartContext";
import RootLayout from "./pages/Root";
import ShippingAddressPage from "./pages/ShippingAddressPage";
import CreditCard from "./pages/CreditCard";
import React from "react";
import ThankYou from "./pages/ThankYou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <ProductPage /> },
      { path: "/cart", element: <Cart /> },
      { path: "/cart/ShippingAddress", element: <ShippingAddressPage /> },
      { path: "/cart/CreditCard", element: <CreditCard /> },
      { path: "/cart/ThankYou", element: <ThankYou /> },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </CartProvider>
  );
}

export default App;
