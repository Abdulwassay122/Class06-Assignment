"use client"
import Conatct from "./component/Conatct";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Section from "./component/Section";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <> 
    <BrowserRouter>
      <Navbar/>
      {/* <Conatct/> */}
      <Routes>
        <Route path="/" element={<Section class='Class 06 Assignment'/>}/>
        <Route  path="/contact" element={<Conatct/>}/>
        <Route  path="/features" element={<Features/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
     );
}
