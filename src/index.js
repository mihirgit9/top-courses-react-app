import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="w-[100vw] min-h-[100vh] bg-slate-600">
        <App />
        <ToastContainer></ToastContainer>
    </div>
);
