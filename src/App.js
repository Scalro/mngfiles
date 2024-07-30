import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer.jsx";
import Filem from "./components/Services/Filem.jsx";
import Cloud from "./components/Services/Cloud.jsx";
import Content from "./components/Services/Content.jsx";
import General from "./components/Services/General.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Pages/Contact.jsx";
import DataA from "./components/Services/DataA.jsx";
import Services from "./components/Services/Services.jsx";
import About from "./components/Pages/About.jsx";

function App() {
  return (
    <div className="all">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filem" element={<Filem />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/content" element={<Content />} />
          <Route path="/advisory" element={<General />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dataA" element={<DataA />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/general" element={<General />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
