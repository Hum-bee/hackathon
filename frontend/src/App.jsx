import "./App.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/produts", element: <Products /> },
      { path: "/produts/:productId", element: <ProductPage /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <header>
        <a href="/">Hardware Store</a>
      </header>
      <main> List products </main>
    </div>
  );
}

export default App;
