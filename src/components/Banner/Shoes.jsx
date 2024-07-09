import React from "react";

function Shoes() {
  return (
    <div
      className="w-[53vw] h-[97vh] bg-gray-200 rounded-lg bg-cover relative"
      style={{
        backgroundImage:
          "url('https://pitamber-ecommerce.netlify.app/static/media/shoes.1d37ddcad4ee5b1276cb.jpg')",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute sm:top-[30%] lg:top-[15%] top-[10%] p-8  space-y-6">
        <div className="text-xl font-semibold text-gray-800">Shoes Collection</div>
        <div className="sm:text-6xl text-3xl font-semibold text-blue-950">Up to <br /> 50% <br /> Off</div>
        <div>
          <button className="bg-blue-950 sm:px-8 px-5  sm:py-3 py-2 font-semibold hover:bg-blue-900 text-white rounded-lg">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Shoes;
