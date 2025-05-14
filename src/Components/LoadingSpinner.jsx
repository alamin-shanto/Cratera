import React from "react";
import { PulseLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <PulseLoader color="#3b82f6" size={20} />
    </div>
  );
};

export default LoadingSpinner;
