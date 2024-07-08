
function ProductCard({img, item, category}) {


  return (
    <div className=" rounded-xl shadow-md border group w-[14vw]">
      <div className="m-8">
        <img
          className="h-[35vh] bg-transparent mix-blend-multiply transition-transform duration-300 ease-in-out hover:scale-125"
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
