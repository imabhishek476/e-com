import React, { useState } from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const EventModal = ({ checked, showEventModal, setShowEventModal}) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const navigate = useNavigate();


  return (
    showEventModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="bg-white text-black text-center flex flex-col gap-3 items-center p-6 px-10 rounded-xl shadow-lg z-10">
          <div>
            <RiCheckboxCircleLine className="text-[#EB268F] text-8xl"/>
          </div>
          <div className="text-4xl font-serif font-bold">
          Success
          <p className="text-xs font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur. Feugiat <br /> nibh proin orci mattis proin massa platea <br /> adipiscing odio</p>
          </div>
          <div className="">
            <button
              className="bg-[#EB268F] text-white px-8 py-2 rounded-full font-serif"
              onClick={() => navigate("/")}
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default EventModal;
