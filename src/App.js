import React from "react";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import View from "./components/View/Mview.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Services from "./components/Services/Services.jsx";

function App() {
  return (
    <div className="">
      <Nav />
      <View />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
