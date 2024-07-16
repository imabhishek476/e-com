
function WomenProductCard({item, img, category }) {
  return (
    <div className="bg-white rounded-xl border group w-[15vw] p-2" style={{filter:"drop-shadow(0px 6px 3px gray)"}}>
        <div className="bg-gray-100 rounded-lg p-6">
          <img
            className="mr-7 h-[35vh] object-contain transition-transform duration-300 ease-in-out hover:scale-125"
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

export default WomenProductCard;
