import { useState } from "react";
import { BsPlusCircleFill, BsShop } from "react-icons/bs";
import {
  FaHome,
  FaHeart,
  FaUser,
  FaTags,
  FaCogs,
  FaPhone,
  FaStar,
  FaFire,
  FaHandHoldingHeart
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { MdFilterVintage, MdNewReleases, MdShoppingCart } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import logo from "../../assets/images/signup/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { HiClipboardDocumentList, HiMiniPlusCircle } from "react-icons/hi2";
import vector1 from "../../assets/images/login/Vector_1.png";
import vector2 from "../../assets/images/login/Vector_2.png";

const sideList = [
  {
    id: 1,
    title: "Home",
    route: "/",
    icon: <IoHomeSharp />
  },
  {
    id: 2,
    title: "Shop",
    route: "/shop",
    icon: <BsShop />,
    list: [
      {
        id: 21,
        title: "Men's Wear",
        navigate: "/mens_wear"
        // icon: <MdShoppingCart className="text-[#050a44]" />
      },
      {
        id: 22,
        title: "Women's wear",
        navigate: "/womens_wear"
        // icon: <FaHeart className="text-red-600" />
      }
    ]
  },
  {
    id: 6,
    title: "Profile",
    route: "/profile",
    icon: <FaUser />
  },
  {
    id: 7,
    title: "On Sale",
    route: "/sale",
    icon: <MdFilterVintage />
  },
  {
    id: 8,
    title: "Customize",
    route: "/customize",
    icon: <VscSettings />
  },
  {
    id: 9,
    title: "Contact Us",
    route: "/contact",
    icon: <div>@</div>
  },
  {
    id: 10,
    title: "New Arrival",
    route: "/new",
    icon: <MdNewReleases />
  },
  {
    id: 11,
    title: "Most Popular",
    route: "/popular",
    icon: <FaHandHoldingHeart />
  }
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggleShop = () => setOpen(!open);
  const navigate = useNavigate();
  const location = useLocation();

  const checkCurrentPage = (route) => {
    // if(route === '\mens_wear' || route === '\mens_wear'){
    //   return true;
    // }
    return location.pathname === route;
  };

  return (
    <div className=" bg-white">
      <div className="m-4 bg-transparent">
        <img
          className="w-[10vw] bg-transparent object-cover"
          src={logo}
          alt="Brand"
        />
      </div>
      <div className="">
        <ul className="list-none my-4 mr-8 flex flex-col">
          {sideList?.map((item) => (
            <div key={item.id} className="flex flex-col">
              <li
                onClick={() => {
                  if (item.title !== "Shop") {
                    navigate(item.route);
                  } else {
                    item.title === "Shop" && toggleShop();
                  }
                }}
                className="flex items-center gap-2 text-xs hover:bg-gray-300 rounded-lg cursor-pointer"
              >
                <div
                  style={{
                    visibility: checkCurrentPage(item.route) ? "" : "hidden"
                  }}
                  className="text-pink-600 text-xs"
                >
                  <TbRectangleVerticalFilled />
                </div>
                <div className="flex items-center m-2 gap-7 text-[#050a44]">
                  <div
                    className="text-[0.8rem] "
                    style={{ filter: "drop-shadow(0px 3px 1px gray)" }}
                  >
                    {item.icon}
                  </div>
                  <span className="font-semibold">{item.title}</span>
                  {item.title === "Shop" && (
                    <div> {open ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                  )}
                </div>
              </li>
              {item?.title === "Shop" && open && (
                <ul className="list-none my-2 ml-6 flex flex-col">
                  {item.list.map((subItem) => (
                    <li
                      key={subItem.id}
                      onClick={() => navigate(subItem?.navigate)}
                      className="text-xs px-8 pl-0 hover:bg-gray-300 rounded-lg cursor-pointer"
                    >
                      <div className="flex justify-center mx-0 m-2 text-black font-bold">
                        {/* <div className="text-[0.8rem]">{subItem.icon}</div> */}
                        <div className="font-semibold">{subItem?.title}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
        <div className="my-4 mx-5 w-fit p-8 pt-3 px-2 relative text-sm bg-[#808aff] text-center flex flex-col items-center space-y-3 rounded-xl overflow-hidden text-[#050A44]">
          <img className="absolute top-0 left-0" src={vector1} alt="vector" />
          <img
            className="absolute bottom-0 -right-1"
            src={vector2}
            alt="vector"
          />
          <div>
            <HiMiniPlusCircle style={{ filter: "drop-shadow(1px 1px 5px white)" }} className="text-[#050A44] text-3xl" />
          </div>
          <div className="font-bold text-lg">
            <h1 style={{ filter: "drop-shadow(1px 4px 6px black)" }}>Need help!</h1>
          </div>
          <div>
            <p className="text-xs font-semibold">
              About Account management <br />ordering, payment & refund
            </p>
          </div>
          <div className="mx-4">
            <button
              style={{ filter: "drop-shadow(1px 3px 4px black)" }}
              className="px-5 py-2 font-semibold rounded-lg bg-blue-700 text-white text-xs"
            >
              <p style={{ filter: "drop-shadow(1px 3px 1px black)" }}>
                Customer service
              </p>
            </button>
          </div>
        </div>
        <li className="list-none rounded-lg cursor-pointer font-semibold">
          <div className="flex items-center gap-2 text-[#050a44]">
            <div
              style={{
                visibility: checkCurrentPage("/terms&condition") ? "" : "hidden"
              }}
              className="text-pink-600 text-xs"
            >
              <TbRectangleVerticalFilled />
            </div>
            <div className="flex items-center m-2 gap-7">
              <div>
                <HiClipboardDocumentList
                  style={{ filter: "drop-shadow(0px 3px 1px gray)" }}
                />
              </div>
              <button
                onClick={() => navigate("/terms&condition")}
                className="text-sm"
              >
                Terms of Use
              </button>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
