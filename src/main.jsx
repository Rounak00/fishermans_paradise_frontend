import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "./components/ui/toaster.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import { CartContextProvider } from "./context/CartContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <AuthContextProvider>
        <Toaster />
        <App />
      
      </AuthContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);
