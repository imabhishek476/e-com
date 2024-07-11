import RedShirt from '../../../assets/images/home/RedShirt.png'
import BlackShirt from '../../../assets/images/home/BlackShirt.png'
import BlueShirt from '../../../assets/images/home/BlueShirt.png'
import WhiteShirt from '../../../assets/images/home/WhiteShirt.png'

function ProductCard() {

  const shirtIMage =[
    BlackShirt,
    // RedShirt,
    // BlueShirt,
    // WhiteShirt,
  ]

  return (
    <div className=" rounded-xl shadow-md border min-w-[14vw] m-1 ml-0 bg-gray-50">
      <div className="p-4 flex items-center justify-center">
        <img
          className="h-[120px] bg-transparent mix-blend-multiply transition-transform duration-300 ease-in-out hover:scale-125"
          src={shirtIMage[Math.floor(Math.random() * 1)]}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-start m-3 p-1">
        <span className="font-semibold text-xs">Oversize Men&apos;s t-shirt</span>
        <span className="font-semibold text-xs">Price: $ 599</span>
        <div className="flex justify-between items-center w-full mr-3 my-2 font-semibold text-xs">
          <div>⭐ 4.8</div>
          <button className="px-3 py-1 border-2 border-black rounded-2xl">Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
