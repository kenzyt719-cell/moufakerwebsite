import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import ForSchool from './Pages/ForSchool';
import ContactUs from './Pages/ContactUs';
import FaqScreen from './Pages/FaqScreen';


const RountingApp = () => {
    return ( <>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
  
        <Route path="/ForSchool" element={<ForSchool />} />

        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/FaqScreen" element={<FaqScreen />} />

        

    </Routes>
    </BrowserRouter>
    
    </>  );
}
 
export default RountingApp ;