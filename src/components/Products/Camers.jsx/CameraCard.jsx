import React from "react";

function CameraCard() {
  return (
    <div className="rounded-x overflow-hidden  transform transition-all hover:translate-y-2 duration-300 relative shadow-xl group max-w-[300px]">
      <div className=" flex justify-center items-center">
        <img
          src="https://pitamber-ecommerce.netlify.app/static/media/camera.3a9beb2112dd633a9630.jpg"
          alt=""
        />
      </div>
      <div className=" sm:p-6 p-3">
        <h1 className=" sm:text-base text-sm  font-semibold">
          NIKON Z30 Mirrorless Camera Z DX 16 - 50 mm f/3.5 - 6.3 VR ....{" "}
        </h1>
        <div className=" flex items-center gap-2"></div>
      </div>
    </div>
  );
}

export default CameraCard;
