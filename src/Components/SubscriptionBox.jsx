import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SubscriptionBox = () => {
  const [services, setServices] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Data/Services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Services:", data);
        setServices(data);
      })
      .catch((err) => console.error("Failed to load Services", err));
  }, []);

  const displayService = showAll ? services : services.slice(0, 6);

  const handleViewMore = (service) => {
    navigate(`/service/${service.id}`, { state: { service } });
  };

  return (
    <section>
      <h2 className="Text-3xl lg:text-4xl font-extrabold my-10 ml-5 lg:ml-0 text-[var(--n)]">
        Subscription Services
      </h2>
      <div className="flex justify-center mx-5">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-20">
          {displayService.map((service) => (
            <div
              key={service.id}
              className="border text-center max-w-[350px] rounded-2xl bg-gradient-to-r from-slate-700 to-gray-800"
            >
              <img
                src={service.thumbnail}
                alt={service.name}
                className="rounded-t-2xl"
              ></img>
              <div className="m-2 lg:m-5">
                <h3 className="font-bold text-xl lg:text-3xl">
                  {service.name}
                </h3>
                <div className="flex gap-5 justify-center lg:space-y-1">
                  <p className="font-semibold text-sm lg:text-xl">
                    {service.category}
                  </p>
                  <p className="font-semibold text-sm lg:text-xl">
                    {service.price}
                  </p>
                </div>

                <p className="text-[10px] lg:text-sm">{service.description}</p>
              </div>

              <button
                onClick={() => handleViewMore(service)}
                className="text-blue-400 text-xs lg:text-sm cursor-pointer mb-2 lg:mb-5 font-bold"
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </div>

      {services.length > 6 && (
        <div className="text-center my-5">
          <button
            className="bg-[#3b82f6] text-white px-5 py-3 rounded-2xl cursor-pointer"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default SubscriptionBox;
