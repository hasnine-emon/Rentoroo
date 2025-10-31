import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { assets, cities, dummyCars } from "../assets/data";
import Title from "./Title";
import Item from "./Item";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const FeaturedCar = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    // Filter cars whose city appears in the cities array
    const data = dummyCars.filter((car) => cities.includes(car.city));
    setFeatured(data);
    // if dummyCars can change from props, add it to deps; it's an imported constant here so empty deps are fine
  }, []);

  return (
    <section className="max-padd-container py-16 xl:py-28 !pt-36">
      <Title
        title1={"Your Next Car Awaits"}
        title2={"Start Driving With Ease"}
        titleStyles={"mb-10"}
      />

      <div className="flex items-center justify-between mt-8 mb-6 gap-4">
        <h5>
          <span className="font-bold">Displaying 1–6</span> from 3k listings
        </h5>
        <Link
          to={"/listing"}
          onClick={() => scrollTo(0, 0)}
          className="inline-flex items-center justify-center bg-solid text-white rounded-md p-2 w-8 h-8 flex-shrink-0"
        >
          <img
            src={assets.sliders}
            alt=""
            className="invert w-4 h-4 object-contain"
          />
        </Link>
      </div>

      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          600: { slidesPerView: 2, spaceBetween: 30 },
          1124: { slidesPerView: 3, spaceBetween: 30 },
          1300: { slidesPerView: 4, spaceBetween: 30 },
        }}
        modules={[Autoplay]}
        className="h-[488px] md:h-[533px] xl:h-[422px] mt-5"
      >
        {featured.slice(0, 6).map((car) => (
          // use a stable key (use _id if your data uses that)
          <SwiperSlide key={car._id ?? car.id}>
            <Item car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedCar;

