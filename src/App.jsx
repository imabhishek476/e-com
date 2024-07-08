import "./App.css";
import Hero from "./components/HeroSection/index";
import Sidebar from "./components/Navbar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Popular from "./components/Products/Popular/index";
import TopSale from "./components/Products/TopSale/index";
import Footer from "./components/Footer/index";
import Banner from "./components/Banner/index";
import Gurrantee from "./components/Service/Gurrantee";

function App() {
  return (
    <>
      <div className="grid grid-cols-12 bg-black">
        {/* Sidebar will span 2 columns by default, and adjust to 3 columns on medium and large screens */}
        <div className="col-span-3 fixed h-screen bg-gray-100 md:col-span-3 lg:col-span-3 w-[18%]">
          <Sidebar />
        </div>
        {/* Main content will start from the next column after the sidebar ends and span the remaining columns */}
        <div className="col-start-3 col-end-13 sticky bg-white md:col-start-3 lg:col-start-3">
          <Navbar />
          <Hero />
          <Popular />
          <Gurrantee/>
          <TopSale />
          <TopSale />
          <Banner />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
