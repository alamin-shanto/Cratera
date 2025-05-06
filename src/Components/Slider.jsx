import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
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
            src="assets/overhead-view-of-a-sled-dog-team-cutting-through-winter-forest.jpg"
            alt="slider-1"
            className="w-full h-[40vh] lg:h-[60vh] xl:h-[40vh] object-cover rounded-xl"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/winter-shore-line.jpg"
            alt="slider-1"
            className="w-full h-[40vh] lg:h-[60vh] xl:h-[40vh] object-cover rounded-xl"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/winter-sky-and-trees.jpg"
            alt="slider-1"
            className="w-full h-[40vh] lg:h-[60vh] xl:h-[40vh] object-cover rounded-xl"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/winter-season-by-the-shore.jpg"
            alt="slider-1"
            className="w-full h-[40vh] lg:h-[60vh] xl:h-[40vh] object-cover rounded-xl"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/winter-woods-scene.jpg"
            alt="slider-1"
            className="w-full h-[40vh] lg:h-[60vh] xl:h-[40vh] object-cover rounded-xl"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/dried-winter-wildflowers.jpg"
            alt="slider-1"
            className="w-full h-[40vh] lg:h-[60vh] xl:h-[40vh] object-cover rounded-xl"
          ></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
