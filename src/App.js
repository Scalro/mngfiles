import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer.jsx";
import Filem from "./components/Services/Filem.jsx";
import Cloud from "./components/Services/Cloud.jsx";
import Content from "./components/Services/Content.jsx";
import Advisory from "./components/Services/Advisory.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Pages/Contact.jsx";

function App() {
  return (
    <div className="">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filem" element={<Filem />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/content" element={<Content />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
