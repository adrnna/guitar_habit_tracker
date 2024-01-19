import React from "react";
import { createRoot } from "react-dom";
import AppRoutes from "./components/Routes";

console.log("index.js invoked!");

const domNode = document.getElementById('app')
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>    
);