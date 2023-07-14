import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import { CartProvider } from "./pages/CartContext"
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <ProductPage /> },
      { path: "/cart", element: <Cart /> },
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
