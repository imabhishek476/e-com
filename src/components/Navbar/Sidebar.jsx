import { BsShop } from "react-icons/bs";
import {
  FaHome,
  FaCartPlus,
  FaHeart,
  FaUser,
  FaTags,
  FaCogs,
  FaPhone,
  FaStar,
  FaFire
} from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const sideList = [
  {
    id: 1,
    title: "Home",
    route: "home",
    icon: <FaHome className="" />
  },
  {
    id: 2,
    title: "Shop",
    route: "shop",
    icon: <BsShop className="" />
  },
  {
    id: 3,
    title: "Cart",
    route: "cart",
    icon: <MdShoppingCart className="" />
  },
  {
    id: 4,
    title: "Saved",
    route: "saved",
    icon: <FaHeart className=" text-red-600" />
  },
  {
    id: 6,
    title: "Profile",
    route: "profile",
    icon: <FaUser className="" />
  },
  {
    id: 7,
    title: "On Sale",
    route: "on_sale",
    icon: <FaTags className="" />
  },
  {
    id: 8,
    title: "Customize",
    route: "customize",
    icon: <FaCogs className="" />
  },
  {
    id: 9,
    title: "Contact Us",
    route: "contact",
    icon: <FaPhone className="" />
  },
  {
    id: 10,
    title: "New Arrival",
    route: "new_arrival",
    icon: <FaStar className="" />
  },
  {
    id: 11,
    title: "Most Popular",
    route: "popular",
    icon: <FaFire className="" />
  }
]

const Sidebar = () => {
  return (
    <div className="">
      <div className="m-4">
        <img
          className="w-[10vw]"
          src="https://pitamber-ecommerce.netlify.app/static/media/logo.57073df31ae12b223c29.png"
          alt=""
        />
      </div>
      <div>
        <ul className="list-none my-4 ml-2 mr-8 flex flex-col">
          {
            sideList?.map((item)=>(
                <li key={item.id} className="text-xs px-8 pl-5 hover:bg-gray-300 rounded-lg hover:text-gray-800">
                <div className="flex items-center m-2 gap-7">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              </li>
            ))
          }
        </ul>
        <div className="my-4 ml-2 mr-8">
          <img src="https://pitamber-ecommerce.netlify.app/static/media/Dash-Need.f43b91919e370cb7b12c.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
