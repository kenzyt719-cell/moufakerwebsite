import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
const RountingApp = () => {
    return ( <>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
    
    </>  );
}
 
export default RountingApp ;