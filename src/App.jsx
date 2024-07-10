import "./App.css";
import Hero from "./components/HeroSection/index";
import Sidebar from "./components/Navbar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Popular from "./components/Products/Popular/index";
import TopSale from "./components/Products/TopSale/index";
import Footer from "./components/Footer/index";
import Banner from "./components/Banner/index";
import Gurrantee from "./components/Service/Gurrantee";
import ProductCategory from "./components/Products/Category";
import NewArrival from "./components/Products/NewArrival";
import { useEffect, useState } from "react";
import { fetchUserProfile } from "./api/login";

function App() {

  const [userProfile, setUserProfile] = useState(null);

  const fetchUserData = async()=>{
    const data = await fetchUserProfile()
    if(data){
      setUserProfile(data.data)
    }
  }

  useEffect(()=>{
    fetchUserData()
  },[])

  return (
    <>
      <div className="grid grid-cols-12 bg-white">
        <div className="col-span-3 fixed h-screen bg-gray-100 w-[18%] hidden lg:block md:hidden">
          <Sidebar />
        </div>
        <div className="flex flex-col col-start-1 md:col-start-1 lg:col-start-3 col-end-13 md:col-end-13 lg:col-end-13 sticky bg-white container lg:container md:container">
          <Navbar userProfile={userProfile}/>
          <Hero />
          <Popular />
          <Gurrantee/>
          <TopSale />
          <ProductCategory/>
          <Banner />
          <NewArrival/>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
