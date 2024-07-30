import React from "react";

function FabricCanvas() {
  return (
    <div className="w-full absolute top-[52px] left-[98px]">
        <canvas id="fabric-canvas" width={160} height={280}  className=""></canvas>
    </div>
  );
}

export default FabricCanvas;
