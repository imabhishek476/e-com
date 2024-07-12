
function ProductCard({img, item, category}) {


  return (
    <div className="bg-white rounded-xl shadow-md border group w-[15vw]">
      <div className="" style={{filter:"drop-shadow(0px 12px 8px gray)"}}>
        <img
          className="mr-7 h-[35vh] mix-blend-multiply transition-transform duration-300 ease-in-out hover:scale-125"
          src={img}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center m-3">
        <span className="font-semibold text-md">{category}</span>
        <span className="text-xs text-gray-400">({item})</span>
      </div>
    </div>
  );
}

export default ProductCard;
