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
import { HiClipboardDocumentList } from "react-icons/hi2";

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
    <div className="">
      <div className="m-4">
        <img className="w-[10vw]" src={logo} alt="Brand" />
      </div>
      <div>
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
        <div className="mx-5">
          <li className="list-none ml-6 flex items-center font-bold text-[#050a44]">
            <i>
              <HiClipboardDocumentList />
            </i>
            <button
              onClick={() => navigate("/terms&condition")}
              className="text-sm"
            >
              Terms of Use
            </button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
