import React, { useEffect } from "react";
// import Snackbar from "@mui/material/Snackbar";
// import { Alert, Slide } from "@mui/material";

function Snack({ message, type, duration, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <>
      <div style={{zIndex:10000}}
        className={`fixed top-10 right-0 mt-4 mr-4 p-2 px-3 rounded shadow-lg text-white ${
          type === "success" ? "bg-green-500" : "bg-red-500"
        } transition-transform transform duration-300 ease-in-out slide-in`}
      >
        {message}
      </div>
    </>
  );
}

export default Snack;
