import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom";
import AppRoutes from "./components/Routes";
import LoadingOverlay from "./components/LoadingOverlay";

console.log("index.js invoked!");

const domNode = document.getElementById('app')
const root = createRoot(domNode);

// const App = () => {
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       // Simulate an asynchronous operation (e.g., API call)
//       const fetchData = async () => {
//         // Your asynchronous operation here
//         await new Promise(resolve => setTimeout(resolve, 2000));
  
//         // After the operation is complete, hide the loading overlay
//         setLoading(false);
//       };

//       window.onload = () => {
//         fetchData();
//       };
  
//     }, []);

    // return (
    //     <React.StrictMode>
    //       {loading ? (
    //         <LoadingOverlay />
    //       ) : (
    //         <AppRoutes />
    //       )}
    //     </React.StrictMode>
    //   );
    // };
    
    // root.render(<App />);


    root.render(
        <React.StrictMode>
            <AppRoutes />
        </React.StrictMode>    
    );
    