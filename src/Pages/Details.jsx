import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
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

  return <div></div>;
};

export default Details;
