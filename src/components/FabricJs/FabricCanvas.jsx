function FabricCanvas({ canvasSide }) {
  return (
    <>
      <div
        style={{ display: canvasSide === "front" ? "block" : "none" }}
        className="w-full absolute top-[52px] left-[98px]"
      >
        <canvas
          id="fabric-canvas"
          width={160}
          height={280}
          className=""
        ></canvas>
      </div>
      <div
        style={{ display: canvasSide === "back" ? "block" : "none" }}
        className="w-full absolute top-[52px] left-[98px]"
      >
        <canvas
          id="fabric-canvas-back"
          width={160}
          height={280}
          className=""
        ></canvas>
      </div>
    </>
  );
}

export default FabricCanvas;
