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
import Governance from "./components/Pages/Governance.jsx";

function App() {
  return (
    <div className="all">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filem" element={<Filem />} />
          <Route path="/earchive" element={<Cloud />} />
          <Route path="/dimaging" element={<Content />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/parchive" element={<DataA />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/heritage" element={<General />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
