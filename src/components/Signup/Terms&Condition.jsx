import React, { useState } from "react";
import { CustomerSignup } from "../../api/signup";

const TermsModal = ({ showModal, setShowModal , UserData, setShowEventModal, setLoading}) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleConfirm = async() => {
    if (isChecked1 && isChecked2 && isChecked3) {
      try {
        setShowModal(false);
        // Proceed to signup
        setLoading(true)
        console.log(UserData)
        const data = await CustomerSignup(UserData)
        console.log(data)
        setLoading(false)
        setIsChecked1(false)
        setIsChecked2(false)
        setIsChecked3(false)
        setShowEventModal(true)
      } catch (error) {
        alert(error)
      }
      
    } else {
      alert("Please agree to all terms.");
    }
  };

  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="bg-white text-black  p-6 rounded-xl shadow-lg z-10">
          <div className="text-2xl font-serif mb-4">
          Accept our terms of service
          <p className="text-xs font-normal">To continue, please accept our Terms of Service</p>
          </div>
          
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox w-4 h-4 border-2 border-[#EB268F] rounded-sm"
                checked={isChecked1}
                required
                onChange={(e) => setIsChecked1(e.target.checked)}
              />
              <span className="ml-2 ">
                I agree to the Terms of Use and Privacy (required).
              </span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox w-4 h-4 border-2 border-[#EB268F] rounded-sm"
                checked={isChecked2}
                required
                onChange={(e) => setIsChecked2(e.target.checked)}
              />
              <span className="ml-2 ">
                I agree to receive activity emails from this vibepulse. I can refine or <br /> revoke this consent anytime. (opt-in)
              </span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox w-4 h-4 border-2 border-[#EB268F] rounded-sm"
                style={{ borderColor: "pink" }}
                checked={isChecked3}
                required
                onChange={(e) => setIsChecked3(e.target.checked)}
              />
              <span className="ml-2 ">
              I agree to receive commercial emails from this vibepulse. I can revoke <br /> this consent at any time by unsubscribing to any commercial email <br /> from this Host. (opt-in)
              </span>
            </label>
          </div>
          <div className="flex justify-start">
            <button
              className="bg-[#EB268F] text-white px-8 py-2 rounded-full mr-2 font-serif"
              onClick={handleConfirm}
            >
              Confirm
            </button>
            <button
              className="borders px-8 py-2 rounded"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default TermsModal;
