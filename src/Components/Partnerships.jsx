import React from "react";

const Partnerships = () => {
  return (
    <div>
      <h2 className="Text-3xl lg:text-4xl font-extrabold my-10 ml-5 lg:ml-0 text-[var(--n)]">
        Our Valuable Partners
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 items-center mx-5 my-10">
        <img
          src="assets/Google-logo.webp"
          alt=""
          className="w-40 lg:w-72 object-cover"
        />
        <img
          src="assets/airbnb-2-logo-png-transparent.png"
          alt=""
          className="w-40 lg:w-72 object-cover"
        />
        <img
          src="assets/amazon-logo-transparent.png"
          alt=""
          className="w-40 lg:w-72 object-cover"
        />
        <img
          src="assets/kiehls-logo-png-transparent.png"
          alt=""
          className="w-40 lg:w-72 object-cover"
        />
        <img
          src="assets/microsoft-xbox-2-logo-png-transparent.png"
          alt=""
          className="w-40 lg:w-72 object-cover"
        />
        <img
          src="assets/nespresso-1-logo-png-transparent.png"
          alt=""
          className="w-40 lg:w-72 object-cover"
        />
        <img
          src="assets/nike-6-logo-png-transparent.png"
          alt=""
          className="w-40 lg:w-72 object-cover"
        />
        <img
          src="assets/petco-logo-png-transparent.png"
          alt=""
          className="w-40 lg:w-72 object-cover"
        />
      </div>
    </div>
  );
};

export default Partnerships;
