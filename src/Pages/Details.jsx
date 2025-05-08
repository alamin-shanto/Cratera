import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [service, setService] = useState(location.state?.service || null);

  useEffect(() => {
    if (!service) {
      fetch("/Data/Services.json")
        .then((res) => res.json())
        .then((data) => {
          const matched = data.find((item) => item.id === parseInt(id));
          setService(matched);
          document.title = matched ? `${matched.name}` : "service Not Found";
        });
    } else {
      document.title = `${service.name}`;
    }
  }, [id, service]);

  if (!service) return <div>Loading Service Details...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div>
        <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
        <img
          src={service.thumbnail}
          alt=""
          className="w-full h-64 object-cover rounded-2xl mb-5"
        />
        <p className="text-lg text-gray-700 mb-5"> {service.description}</p>
        <div>
          <p>
            <b>Price:</b> {service.price}
          </p>

          <p>
            {" "}
            <b>Category:</b> {service.category}
          </p>
        </div>
        <div>
          <p>
            <b>Frequency:</b> {service.frequency}
          </p>
          <p>
            <b>Ratings:</b> {service.ratings}
          </p>

          <p>
            {" "}
            <b>Reviews:</b> {service.Reviews}
          </p>
        </div>
        <button
          onClick={() => navigate("/subscribe", { state: { service } })}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-2xl mt-5"
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Details;
