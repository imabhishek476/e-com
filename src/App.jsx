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


function App() {

  return (
    <>
      <div className="grid grid-cols-12 bg-white">
        <div className="col-span-3 fixed h-screen bg-white border-black shadow-2xl w-[16.6%] hidden lg:block md:hidden z-100">
          <Sidebar />
        </div>
        <div className="flex flex-col bg-gray-50 col-start-1 md:col-start-1 lg:col-start-3 col-end-13 md:col-end-13 lg:col-end-13 sticky">
          <Navbar/>
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
