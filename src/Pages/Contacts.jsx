import React from "react";

const Contacts = () => {
  return (
    <div className="my-8 mx-5">
      <div className="">
        <img
          src="assets/shipping-box.jpg"
          alt=""
          className="w-full h-[40vh] lg:h-[60vh] object-cover rounded-2xl"
        />
      </div>
      <div>
        <h2 className="text-3xl lg:text-4xl font-extrabold my-10 ml-5 lg:ml-0 text-[var(--a)]">
          Have Questions?
        </h2>
        <p className="text-[var(--n)] text-xl">
          Be sure to review our FAQ's for common Questions and answers. Can't
          find what you're looking for? Reach out to us through:
        </p>
        <p className="text-[var(--n)] text-xl">
          {" "}
          <a
            href="mailto:mash94402@gmail.com"
            className="text-[var(--p)] text-extrabold"
          >
            Gmail:
          </a>{" "}
          (Available through <b>Monday</b> to <b>Friday</b> between <b>8:00</b>
          am & <b>10:00</b>pm <b>GMT</b>)
        </p>
      </div>
    </div>
  );
};

export default Contacts;
