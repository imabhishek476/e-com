import BlackShortSleeveDress from "../../../assets/images/home/black-short-sleeve-dress.png"
import LightBlueJeans from "../../../assets/images/home/light-blue-jeans.png"
import RayBan from "../../../assets/images/home/ray-ban.png"
import BlackCoat from "../../../assets/images/home/black-coat.png"



function ProductCard({ img, price, category }) {
  return (
    <div className="rounded-xl">
      <div className="border rounded-xl shadow-xl p-2 relative transition-transform duration-300 ease-in-out hover:scale-90">
        <img src={img} alt="" />
        <div className="absolute text-sm top-4 right-4 px-4 py-1 rounded-xl bg-blue-950 text-white">
          New
        </div>
      </div>
      <div className="my-3">
        <span className="mx-3 font-semibold">{category}</span>
        <div className="flex justify-between items-center mx-3">
          <span>{price}</span>{" "}
          <div>
            <button className="border text-sm rounded-xl px-2 py-1 border-blue-900 hover:border-black">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
