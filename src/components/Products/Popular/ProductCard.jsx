import RedShirt from "../../../assets/images/home/RedShirt.png";
import BlackShirt from "../../../assets/images/home/BlackShirt.png";
import BlueShirt from "../../../assets/images/home/BlueShirt.png";
import WhiteShirt from "../../../assets/images/home/WhiteShirt.png";
import { AddToCart } from "../../../utils/cart";
import { useState } from "react";
import Snack from "../../Warning/Snackbar";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, title, description, img, price , urlSlug}) {
  const [cartStatus, setCartStatus] = useState("Cart");
  const [showSnackBar,setShowSnackbar]= useState({show:false, message:"Something Went Wrong", type: "success"})
  const navigate = useNavigate()

  // const shirtIMage =[
  //   BlackShirt,
  //   RedShirt,
  //   BlueShirt,
  //   WhiteShirt,
  // ]

  const handleCart = () => {
    const obj = {
      id: id,
      title: title,
      description: description,
      img: img,
      price: price
    };
    const response = AddToCart(obj);
    if (!response.error) {
      setCartStatus(response.message);
      setShowSnackbar({
        ...showSnackBar,
        show:true,
        message: "Product added in cart",
        type: "success"
      })
    } else {
      console.log(response);
      setShowSnackbar({
        ...showSnackBar,
        show:response.error,
        message: response.message,
        type: "warning"
      })
    }
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar({ ...showSnackBar, show: false })
    setCartStatus("Cart")
  }

  return (
    <>
      {showSnackBar.show && <Snack duration={3000} message={showSnackBar.message} type={showSnackBar.type} onClose={handleCloseSnackbar} />}
      <div onClick={()=>navigate(`/product-info/${urlSlug}`)} className="bg-white rounded-xl shadow-md border w-[200px] cursor-pointer">
        <div
          className="p-4 flex items-center justify-center"
          style={{ filter: "drop-shadow(0px 12px 8px gray)" }}
        >
          <img
            className="h-[120px] mix-blend-multiply transition-transform duration-300 ease-in-out hover:scale-125"
            src={img}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-start m-3 p-1 space-y-2">
          <span className="font-semibold text-xs">{(title).slice(0,30)}...</span>
          <span className="font-semibold text-xs">Price: ₹{price}</span>
          <div className="flex justify-between items-center w-full mr-3 my-2 font-semibold text-xs">
            <div>⭐ 4.8</div>
            <button
              onClick={handleCart}
              className="px-3 py-1 border-2 border-black rounded-2xl"
            >
              {cartStatus}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
