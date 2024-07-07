import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/HeroSection/index";
import Sidebar from "./components/Navbar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Popular from "./components/Products/Popular/index";
import TopSale from "./components/Products/TopSale/index";
import Footer from "./components/Footer/index";
import Banner from "./components/Banner/index";


function App() {
  return (
    <>
        <div className="flex relative bg-black">
          <Sidebar />
          <Navbar />
          <Hero />
          <Popular />
          <TopSale />
          <TopSale />
          <Footer/>
          <Banner/>
        </div>
    </>
  );
}

export default App;
