import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductContextProvider } from "./context/productContext/ProductContext";
import CartContextProvider from "./context/cartContext/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
