import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "./components/ui/toaster.jsx";
import { AuthContextProvider } from "./context/AuthContext";

import CartContext from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContext>
      <AuthContextProvider>
        <Toaster />
        <App />
      </AuthContextProvider>
    </CartContext>
  </React.StrictMode>
);
