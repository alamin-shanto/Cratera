import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
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
    <div className="max-w-[1440px] mx-auto">
      <div className="my-8 mx-5">
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="Assets/overhead-view-of-a-sled-dog-team-cutting-through-winter-forest.jpg"
              alt="slider-1"
              className="w-full h-[40vh] lg:h-[60vh] xl:h-[40vh] object-cover rounded-xl"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="Assets/winter-sky-and-trees.jpg"
              alt="slider-1"
              className="w-full h-[40vh] lg:h-[60vh] xl:h-[40vh] object-cover rounded-xl"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="Assets/winter-woods-scene.jpg"
              alt="slider-1"
              className="w-full h-[40vh] lg:h-[60vh] xl:h-[40vh] object-cover rounded-xl"
            ></img>
          </SwiperSlide>
        </Swiper>
      </div>

      <section>
        <h2 className="Text-lg lg:text-3xl font-bold my-5">
          Subscription Services
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
          {displayService.map((service) => (
            <div
              key={service.id}
              className="border text-center max-w-[350px] rounded-2xl bg-[#f0f4f8]"
            >
              <img src={service.thumbnail} alt={service.name}></img>
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

        {services.length > 6 && (
          <div className="text-center my-5">
            <button onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
