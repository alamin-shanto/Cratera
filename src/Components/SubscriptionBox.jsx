import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubscriptionBox = () => {
  const [services, setServices] = useState([]);
  const [showAll, setShowAll] = useState(false);

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

  return (
    <section>
      <h2 className="Text-lg lg:text-3xl font-bold my-10 ml-5 lg:ml-0">
        Subscription Services
      </h2>
      <div className="flex justify-center mx-5">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-20">
          {displayService.map((service) => (
            <div
              key={service.id}
              className="border text-center max-w-[350px] rounded-2xl bg-[#f0f4f8] my-5"
            >
              <img
                src={service.thumbnail}
                alt={service.name}
                className="rounded-t-2xl"
              ></img>
              <div>
                <h3 className="font-bold text-lg lg:text-3xl">
                  {service.name}
                </h3>
                <div className="flex gap-5 justify-center">
                  <p className="font-semibold text-md lg:text-xl">
                    {service.category}
                  </p>
                  <p className="font-semibold text-md lg:text-xl">
                    {service.price}
                  </p>
                </div>

                <p className="text-xs lg:text-sm">{service.description}</p>
              </div>

              <Link
                to={`/service/${service.id}`}
                className="text-blue-400 text-xs lg:text-sm"
              >
                View More
              </Link>
            </div>
          ))}
        </div>
      </div>

      {services.length > 6 && (
        <div className="text-center my-5">
          <button
            className="bg-[#3b82f6] text-white px-5 py-3 rounded-2xl"
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
