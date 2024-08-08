import React, { useState } from "react";
import { ImSpinner2 } from "react-icons/im";

function Loading({ showModal }) {
  // const [showModal, useState] = useState(false);

  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="">
          <ImSpinner2
            className="animate-spin text-6xl text-white"
            aria-label="loading"
          />
        </div>
      </div>
    )
  );
}

export default Loading;
