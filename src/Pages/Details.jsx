import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
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
      <h1 className="text-4xl text-center font-extrabold my-10 text-[var(--p)]">
        Subscribe Now
      </h1>
      <div className="bg-gradient-to-r from-slate-700 to-gray-800 p-5 rounded-2xl">
        <h1 className="text-3xl font-bold mb-4 text-[var(--p)]">
          {service.name}
        </h1>
        <img
          src={service.thumbnail}
          alt={service.name}
          className="w-full h-64 object-cover rounded-2xl mb-5"
        />
        <p className="text-3xl font-bold text-[var(--p)] mb-5">
          {" "}
          {service.description}
        </p>
        <div className="text-sm text-[var(--b1)]">
          <p>
            <b>Price:</b> {service.price}
          </p>

          <p>
            {" "}
            <b>Category:</b> {service.category}
          </p>

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
          onClick={() => {
            toast.success(`Subscribed Successfully to ${service.name}`);
            navigate("/subscribe", { state: { service } });
          }}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-2xl mt-5 font-bold"
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Details;
