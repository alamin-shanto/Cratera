import React from "react";

const Blogs = () => {
  return (
    <div className="px-5 py-10">
      <div className="collapse collapse-plus bg-base-100 border border-base-300 font-bold">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold rounded-t-md">
          Why should I choose a subscription box over buying individually?
        </div>
        <div className="collapse-content text-sm bg-[var(--s)] text-[var(--n)] p-4 rounded-t-md">
          Subscription boxes save time, often offer better value, introduce
          customers to new or exclusive products, and create an exciting
          unboxing experience each cycle.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 font-bold">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          I forgot my password. What should I do?
        </div>
        <div className="collapse-content text-sm bg-[var(--s)] text-[var(--n)] p-4 rounded-t-md">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 font-bold">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Can I customize the contents of my subscription box?
        </div>
        <div className="collapse-content text-sm bg-[var(--s)] text-[var(--n)] p-4 rounded-t-md">
          Yes! Our platform allows you to select preferences during sign-up, and
          many of our plans offer partial or full customization based on your
          profile or previous choices.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 font-bold">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Are your products eco-friendly or sustainably sourced?
        </div>
        <div className="collapse-content text-sm bg-[var(--s)] text-[var(--n)] p-4 rounded-t-md">
          We prioritize working with brands that are eco-conscious,
          cruelty-free, and use recyclable packaging wherever possible.
          Sustainability is at the heart of our curation.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 font-bold">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          What happens if I don't like something in the box?
        </div>
        <div className="collapse-content text-sm bg-[var(--s)] text-[var(--n)] p-4 rounded-t-md">
          Customer satisfaction is our priority. We offer a feedback system, and
          depending on your plan, you may be eligible for returns, swaps, or
          discounts in future boxes.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 font-bold">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Can I gift a subscription box to someone else?
        </div>
        <div className="collapse-content text-sm bg-[var(--s)] text-[var(--n)] p-4 rounded-t-md">
          Absolutely! We offer gift subscriptions with personalized messages.
          You can choose the duration and frequency to make it special for your
          loved ones.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 font-bold">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          How do I manage or cancel my subscription?
        </div>
        <div className="collapse-content text-sm bg-[var(--s)] text-[var(--n)] p-4 rounded-t-md">
          Log in to your account and visit the "Subscriptions" section. You can
          cancel your subscription at any time with no hassle.
        </div>
      </div>
    </div>
  );
};

export default Blogs;
