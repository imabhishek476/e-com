import React from 'react'

function Bags() {
  return (
    <div
      className="w-[25vw] h-[46vh] bg-gray-200 rounded-lg bg-cover relative"
      style={{
        backgroundImage:
          "url('https://pitamber-ecommerce.netlify.app/static/media/bag.894a52c2a67edc542605.jpg')",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute mt-6 px-10">
        <div className="text-2xl font-semibold text-gray-800">Best of Bags</div>
        <div className="text-4xl font-semibold text-blue-950 mb-20 ">
          Up to 70% Off
        </div>
        <div>
          <button className="bg-blue-950 sm:px-8 px-5  sm:py-3 py-2  font-semibold hover:bg-blue-900 text-white rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Bags