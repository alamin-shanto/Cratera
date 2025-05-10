import React from "react";
import CountUp from "react-countup";

const CountupCard = () => {
  return (
    <div>
      <h2 className="Text-3xl lg:text-4xl font-extrabold my-10 ml-5 lg:ml-0 text-[var(--n)]">
        Our Achievements
      </h2>
      <div className="lg:flex lg:justify-evenly space-y-5 lg:space-y-0 px-5 items-center">
        <div className="border text-center max-w-[350px] rounded-2xl bg-gradient-to-br from-[var(--n)] to-[var(--b2)] p-5 space-y-5">
          <h2 className="text-xl lg:text-2xl font-bold">Happy Clients</h2>
          <p className="text-2xl lg:text-5xl">
            <CountUp
              end={200}
              duration={3}
              suffix="k+"
              enableScrollSpy
              className="text-[var(--in)] font-extrabold"
            />
          </p>
          <p className="font-bold text-xs lg:text-md">
            We've Delighted over 200 thousand customers with personalized
            subscription experience.{" "}
          </p>
        </div>
        <div className="border text-center max-w-[350px] rounded-2xl bg-gradient-to-br from-[var(--n)] to-[var(--b2)] p-5 space-y-5">
          <h2 className="text-xl lg:text-2xl font-bold">Total Deliveries</h2>
          <p className="text-2xl lg:text-5xl">
            <CountUp
              end={500}
              duration={3}
              suffix="k+"
              enableScrollSpy
              className="text-[var(--in)] font-extrabold"
            />
          </p>
          <p className="font-bold text-xs lg:text-md">
            Over 500 thousand boxes delivered to our satisfied customers with
            love & care.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountupCard;
