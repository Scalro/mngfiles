import React from "react";
import View from "./View/Mview";
import Services from "./Services/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function Home() {
  return (
    <div className="">
      <View />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
