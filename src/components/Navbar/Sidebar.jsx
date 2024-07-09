import { useState } from "react";
import { BsShop } from "react-icons/bs";
import {
  FaHome,
  FaHeart,
  FaUser,
  FaTags,
  FaCogs,
  FaPhone,
  FaStar,
  FaFire
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
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
    icon: <BsShop className="" />,
    list: [
      {
        id: 21,
        title: "Cart",
        route: "cart",
        icon: <MdShoppingCart className="" />
      },
      {
        id: 22,
        title: "Saved",
        route: "saved",
        icon: <FaHeart className="text-red-600" />
      }
    ]
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
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggleShop = () => setOpen(!open);

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
          {sideList?.map((item) => (
            <div key={item.id} className="flex flex-col">
              <li
                onClick={() => {
                  item.title === "Shop" && toggleShop();
                }}
                style={{
                  display: `${
                    item?.title === "Cart" || (item?.title === "Saved" && open)
                      ? "none"
                      : ""
                  }`
                }}
                className="text-xs px-8 pl-5 hover:bg-gray-300 rounded-lg hover:text-gray-800 cursor-pointer"
              >
                <div className="flex items-center m-2 gap-7">
                  <div className="text-[0.8rem]">{item.icon}</div>
                  <span>{item.title}</span>
                  {item.title === "Shop" && (
                    <div> {open ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                  )}
                </div>
              </li>
              {item.title === "Shop" && open && (
                <ul className="list-none my-2 ml-6 flex flex-col">
                  {item.list.map((subItem) => (
                    <li
                      key={subItem.id}
                      className="text-xs px-8 pl-0 hover:bg-gray-300 rounded-lg hover:text-gray-800 cursor-pointer"
                    >
                      <div className="flex items-center m-2 gap-7 text-black">
                        <div className="text-[0.8rem]">{subItem.icon}</div>
                        <span>{subItem.title}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
        <div className="my-4 ml-2 mr-8 relative">
          <img
            src="https://pitamber-ecommerce.netlify.app/static/media/Dash-Need.f43b91919e370cb7b12c.png"
            alt="Additional Info"
            className=""
          />
          <div className="absolute flex flex-col justify-between mr-3 items-center text-center max-w-[220px] top-[50%] left-[9%] -translate-y-[40%] space-y-3">
            <h3 className="text-sm font-bold">Need Help!</h3>
            <p className="px-4 text-[10px]  my-2">
              About account management, ordering, payment & refund
            </p>
            <button className="bg-blue-700 text-xs text-white rounded-md px-2 py-1 my-3 mt-8">
              Customer Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
