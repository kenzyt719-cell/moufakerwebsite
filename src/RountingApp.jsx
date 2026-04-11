import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import ForSchool from './Pages/ForSchool';
import ContactUs from './Pages/ContactUs';
import FaqScreen from './Pages/FaqScreen';
import HomeMain from './Pages/HomeMain';
import IWorks from './Pages/IWorks';
import SevicesScreen from './Pages/SevicesScreen';
import Pricesscreen from './Pages/Pricesscreen';
import Blogs from './Pages/Blogs';
import Blogsdetails from './Pages/Blogsdetails';
import ForParents from './Pages/ForParents';

const RountingApp = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomeMain />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ForSchool" element={<ForSchool />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/FaqScreen" element={<FaqScreen />} />
        <Route path="/Pricesscreen" element={<Pricesscreen />} />
        <Route path="/IWorks" element={<IWorks />} />
        <Route path="/SevicesScreen" element={<SevicesScreen />} />
        <Route path="/ForParents" element={<ForParents />} />

        {/* Blogs */}
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blogsdetails />} /> {/* 👈 مهم */}

      </Routes>
    </BrowserRouter>
  );
}

export default RountingApp;