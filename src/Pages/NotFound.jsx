import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-white m-10 lg:m-20 text-center p-10">
      <div className="max-w-96 object-cover mx-auto">
        <img src="assets/glitch-error-404-page_23-2148105404.avif" alt="" />
      </div>
      <button
        onClick={() => navigate("/")}
        className="bg-[#3b82f6] text-white px-5 py-3 rounded-2xl cursor-pointer my-5"
      >
        Return to Home
      </button>
    </div>
  );
};

export default NotFound;
