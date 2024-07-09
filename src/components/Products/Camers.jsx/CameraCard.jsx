import React from "react";

function CameraCard() {
  return (
    <div className="rounded-x overflow-hidden  transform transition-all hover:translate-y-2 duration-300 relative shadow-xl border group max-w-[300px] ">
      <div className=" flex justify-center items-center">
        <img
            className="w-[9vw]"
          src="https://pitamber-ecommerce.netlify.app/static/media/camera.3a9beb2112dd633a9630.jpg"
          alt=""
        />
      </div>
      <div className=" sm:p-6 p-3 text-black">
        <h1 className=" sm:text-base text-sm font-semibold">
          NIKON Z30 Mirrorless Camera Z DX 16 - 50 mm f/3.5 - 6.3 VR ....{" "}
        </h1>
        <div className=" flex items-center gap-2">
            <span className=" font-semibold text-sm text-red-500">$882.00</span>
            <span className=" text-sm line-through opacity-70">$980.00</span>
        </div>
        <div className="flex items-center mt-2 gap-1">
            <img className="w-5" src="https://pitamber-ecommerce.netlify.app/static/media/Star.56f9d9fd86c153495a12.png" alt="" />
            <img className="w-5" src="https://pitamber-ecommerce.netlify.app/static/media/Star.56f9d9fd86c153495a12.png" alt="" />
            <img className="w-5" src="https://pitamber-ecommerce.netlify.app/static/media/Star.56f9d9fd86c153495a12.png" alt="" />
            <img className="w-5" src="https://pitamber-ecommerce.netlify.app/static/media/Star.56f9d9fd86c153495a12.png" alt="" />
            <img className="w-5" src="https://pitamber-ecommerce.netlify.app/static/media/Star.56f9d9fd86c153495a12.png" alt="" />
            <p className=" text-sm text-gray-600">(1)</p>
        </div>
      </div>
    </div>
  );
}

export default CameraCard;
