import React from "react";
import { Link } from "react-router";

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
        <p className="text-[var(--n)] text-lg lg:text-xl">
          Be sure to review our FAQ's for common Questions and answers. Can't
          find what you're looking for? Reach out to us through:
        </p>
        <p className="text-[var(--n)] text-lg lg:text-xl mb-5">
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

        <p className="text-[var(--n)] text-lg lg:text-xl">
          By proceeding, you agree to our{" "}
          <Link to="/terms" className="text-blue-400 hover:text-blue-700">
            Terms & Conditions
          </Link>{" "}
          and our{" "}
          <Link to="/privacy" className="text-blue-400 hover:text-blue-700">
            Privacy Policy
          </Link>
          , and also agree and acknowledge that your chats with us and data
          collected in them may be viewed, used and saved by us and our third
          party vendors or agents to improve your experience and for customer
          service purposes. Please visit our{" "}
          <Link to="/privacy" className="text-blue-400 hover:text-blue-700">
            Privacy Policy
          </Link>{" "}
          for further information.
        </p>
      </div>
    </div>
  );
};

export default Contacts;
