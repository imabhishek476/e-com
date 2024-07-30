import React from "react";
import Sidebar from "./components/Navbar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

function Layout({children, page}) {
  return (
    <>
      <div className="grid grid-cols-12 bg-white">
        <div className="col-span-3 fixed h-screen bg-white border-black shadow-2xl w-[16.6%] hidden lg:block md:hidden z-100">
          {page !== "custom" && <Sidebar />}
        </div>
        <div className="flex flex-col bg-gray-50 col-start-1 md:col-start-1 lg:col-start-3 col-end-13 md:col-end-13 lg:col-end-13 sticky">
          <Navbar page={page}/>
          {children}
          {page !== "custom" && <Footer />}
        </div>
      </div>
    </>
  );
}

export default Layout;
