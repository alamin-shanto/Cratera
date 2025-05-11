import React from "react";
import { TriangleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NoSubscription = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="">
        <div className="flex justify-center">
          <TriangleAlert className="text-[var(--er)] w-20 h-20" />
        </div>
        <div className="text-center">
          <p className="text-[var(--n)] text-4xl">No Subscription Found </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#3b82f6] text-white px-5 py-3 rounded-2xl cursor-pointer my-5"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoSubscription;
