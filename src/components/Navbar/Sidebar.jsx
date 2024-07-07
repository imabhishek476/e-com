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
import { FaShop } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="absolute top-0 left-0 bg-white border-r-[1px] border-gray-700 w-[20%]">
      <div>
        <h2 className="text-4xl m-4">Vibepulse</h2>
      </div>
      <ul className="list-none m-4 p-0 flex flex-col">
        <li className="text-lg hover:bg-gray-300 hover:text-gray-800">
          <div className="flex items-center m-2 gap-3">
            <FaHome className="text-lg" />
            <span>Home</span>
          </div>
        </li>
        <li className="text-lg hover:bg-gray-300 hover:text-gray-800">
          <div className="flex items-center m-2 gap-3">
          <FaShop className="text-lg" />
            <span>Shop</span>
          </div>
        </li>
        <li className="text-lg hover:bg-gray-300 hover:text-gray-800">
          <div className="flex items-center m-2 gap-3">
            <FaCartPlus className="text-lg" />
            <span>Cart</span>
          </div>
        </li>
        <li className="text-lg hover:bg-gray-300 hover:text-gray-800">
          <div className="flex items-center m-2 gap-3">
            <FaHeart className="text-lg" />
            <span>Saved</span>
          </div>
        </li>
        <li className="text-lg hover:bg-gray-300 hover:text-gray-800">
          <div className="flex items-center m-2 gap-3">
            <FaUser className="text-lg" />
            <span>Profile</span>
          </div>
        </li>
        <li className="text-lg hover:bg-gray-300 hover:text-gray-800">
          <div className="flex items-center m-2 gap-3">
            <FaTags className="text-lg" />
            <span>On Sale</span>
          </div>
        </li>
        <li className="text-lg hover:bg-gray-300 hover:text-gray-800">
          <div className="flex items-center m-2 gap-3">
            <FaCogs className="text-lg" />
            <span>Customize</span>
          </div>
        </li>
        <li className="text-lg hover:bg-gray-300 hover:text-gray-800">
          <div className="flex items-center m-2 gap-3">
            <FaPhone className="text-lg" />
            <span>Contact Us</span>
          </div>
        </li>
        <li className="text-lg hover:bg-gray-300 hover:text-gray-800">
          <div className="flex items-center m-2 gap-3">
            <FaStar className="text-lg" />
            <span>New Arrival</span>
          </div>
        </li>
        <li className="text-lg hover:bg-gray-300 hover:text-gray-800">
          <div className="flex items-center m-2 gap-3">
            <FaFire className="text-lg" />
            <span>Most Popular</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
