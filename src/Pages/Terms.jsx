import React from "react";

const Terms = () => {
  return (
    <div className="p-5">
      <h2 className="text-[var(--n)] text-2xl lg:text-4xl text-center font-extrabold">
        Terms & Conditions
      </h2>

      <div className="space-y-5">
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Acceptance of Terms
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg">
            By accessing or using our website, you agree to be bound by these
            Terms. If you do not agree, do not use the site.
          </p>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Subscription Services
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg mb-1">
            {" "}
            We offer subscription boxes on a [monthly/quarterly] basis. Your
            subscription will auto-renew unless canceled before the billing
            cycle ends.
          </p>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Payments
          </h4>

          <ul className="text-[var(--n)] ml-5 list-disc font-medium text-[10px] lg:text-sm">
            <li>All prices are in [US Dollar].</li>
            <li>Payments are processed via secure third-party services.</li>
            <li>You agree to provide accurate and up-to-date billing info.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Shipping
          </h4>
          <ul className="text-[var(--n)] ml-5 list-disc font-medium text-[10px] lg:text-sm">
            <li>Boxes are shipped to the address provided.</li>
            <li>
              We are not responsible for delays due to carrier or incorrect
              address.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Cancellations & Refunds
          </h4>
          <ul className="text-[var(--n)] ml-5 list-disc font-medium text-[10px] lg:text-sm">
            <li>You can cancel anytime before the renewal date.</li>
            <li>Refunds are not guaranteed after a box has shipped.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            User Conduct
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg mb-1">
            {" "}
            You agree not to:
          </p>
          <ul className="text-[var(--n)] ml-5 list-disc font-medium text-[10px] lg:text-sm">
            <li>Use the website for illegal purposes</li>
            <li>Interfere with website functionality</li>
            <li>Copy or redistribute content without permission</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Intellectual Property
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg mb-1">
            {" "}
            All content (logos, text, images) belongs to [Your Business Name]
            unless otherwise stated.
          </p>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Limitation of Liability
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg">
            We are not liable for indirect or incidental damages from use of the
            website or products.
          </p>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Changes to Terms
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg">
            We may update these terms. Continued use after updates means you
            accept the new terms.
          </p>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Governing Law
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg">
            These Terms are governed by the laws of [US].
          </p>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Contact Us
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg">
            Have questions? Contact us at: <br />
            <a
              href="mailto:mash94402@gmail.com"
              className="text-[var(--p)] text-extrabold"
            >
              Gmail
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
