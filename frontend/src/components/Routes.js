import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ChooseRoutine from '../pages/ChooseRoutine';
import JustJam from '../pages/JustJam';
import EditRoutine from '../pages/EditRoutine';
import AddRoutine from '../pages/AddRoutine';
import Success from '../pages/SuccessPage';


const AppRoutes = () => {
    console.log("AppRoutes.js invoked!");

    const [success, setSuccess] = useState(false);

    // Function to reset success state
    const resetSuccess = () => {
      setSuccess(false);
    };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="choose-routine" element={<ChooseRoutine />} />
            <Route path="just-jam" element={<JustJam />} />
            <Route path="edit-routine" element={<EditRoutine />} />
            <Route path="add-routine" element={<AddRoutine success={success} resetSuccess={resetSuccess}/>} />
            <Route path="add-routine/success" element={<Success />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
