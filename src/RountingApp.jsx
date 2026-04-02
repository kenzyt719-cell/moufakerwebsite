import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import ForSchool from './Pages/ForSchool';

const RountingApp = () => {
    return ( <>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
  
        <Route path="/ForSchool" element={<ForSchool />} />


    </Routes>
    </BrowserRouter>
    
    </>  );
}
 
export default RountingApp ;