import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./components/Routes";

console.log("index.js invoked!");

ReactDOM.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>,
    document.getElementById('app')
);