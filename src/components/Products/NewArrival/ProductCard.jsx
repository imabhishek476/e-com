function ProductCard({ img, price, category }) {
  return (
    <div className="w-[15vw] ">
      <div className="rounded-xl bg-slate-500 relative transform transition hover:scale-90 shadow-xl duration-300 ease-in-out group object-cover">
        <div className="">
          <img className=" h-[55vh]" src={img} alt="" />
        </div>
        <div className="absolute top-[4%] right-[5%]">
          <button className="bg-blue-950 rounded-md text-white px-3 pb-[1px]">
            New
          </button>
        </div>
      </div>
      <div>
        <span className="mx-3 font-semibold">{category}</span>
        <div className="flex justify-between mx-3">
          <span>{price}</span>{" "}
          <div>
            <button className="border rounded-lg px-3 border-blue-600 hover:border-black">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
