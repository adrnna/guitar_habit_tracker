// Routes.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import Home from './Home';
import textContent from '../../textContent';

const AppRoutes = () => {
    console.log("AppRoutes.js invoked!");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout textContent={textContent} />}>
            <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
