import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Shop from "./Pages/Shop.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import mens_banner from './Components/Assets/mens_banner.jpg'
import womens_banner from './Components/Assets/womens_banner.jpg'
import kidsbanner from './Components/Assets/kidsbanner.jpg'
import ShopContextProvider from "./Context/ShopContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Shop />} />
      <Route path="/men" element={<ShopCategory banner = {mens_banner} category="men" />}></Route>
      <Route path="/women" element={<ShopCategory banner = {womens_banner} category="women" />}></Route>
      <Route
        path="/kids"
        element={<ShopCategory banner={kidsbanner} category="kid" />}
      ></Route>
      <Route path="/product" element={<Product />}>
        <Route path=":productId" element={<Product />} />
      </Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<LoginSignup />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <React.StrictMode>
      <ShopContextProvider>
      <RouterProvider router={router} />
      </ShopContextProvider>
    </React.StrictMode>
  
);
