import React from "react";
import Nav from "../components/Header/Nav";
import Gallery from "../components/Contents/Gallery";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="App">
      <Nav/>   
      <Gallery/>
      <Footer title="Copyright@VidGo"/>
    </div>
  );
}

export default Home;
