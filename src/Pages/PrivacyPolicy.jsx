import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-5">
      <h2 className="text-[var(--n)] text-2xl lg:text-4xl text-center font-extrabold">
        Privacy Policy
      </h2>

      <div className="space-y-5">
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Introduction
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg">
            We value your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            safeguard your data when you use our website and services.
          </p>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Information We Collect
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg mb-1">
            {" "}
            We may collect the following information:
          </p>

          <ul className="text-[var(--n)] ml-5 list-disc font-medium text-[10px] lg:text-sm">
            <li>Name</li>
            <li>Email address</li>
            <li>Shipping/billing address</li>
            <li>Payment information (processed securely via third-party)</li>
            <li>Preferences and feedback</li>
            <li>Usage data (via cookies, analytics tools)</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Sharing Your Information
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg mb-1">
            {" "}
            We do not sell your personal data. We may share it with:
          </p>

          <ul className="text-[var(--n)] ml-5 list-disc font-medium text-[10px] lg:text-sm">
            <li>Payment gateways (e.g., Stripe, PayPal)</li>
            <li>Shipping providers</li>
            <li>Analytics tools (e.g., Google Analytics)</li>
            <li>Legal authorities if required</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            How We Use Your Information
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg mb-1">
            {" "}
            We use your information to:
          </p>

          <ul className="text-[var(--n)] ml-5 list-disc font-medium text-[10px] lg:text-sm">
            <li>Process subscriptions and orders</li>
            <li>Communicate with you (newsletters, updates)</li>
            <li>Improve our website and services</li>
            <li>Personalize user experience</li>
            <li>Prevent fraud and ensure security</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Cookies & Tracking
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg">
            We use cookies to enhance site performance and user experience. You
            can manage or disable cookies via your browser settings.
          </p>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Data Security
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg">
            We implement secure methods (SSL, encryption) to protect your data.
            However, no method is 100% secure.
          </p>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Your Rights
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg mb-1">
            {" "}
            Depending on your region (e.g., GDPR in EU, CCPA in California), you
            may have the right to:
          </p>

          <ul className="text-[var(--n)] ml-5 list-disc font-medium text-[10px] lg:text-sm">
            <li>Access your data</li>
            <li>Correct or delete data</li>
            <li>Opt out of marketing emails</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Third-Party Links
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg">
            Our website may contain links to third-party sites. We are not
            responsible for their privacy practices.
          </p>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Children's Privacy
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg">
            We do not knowingly collect data from users under 13 years of age.
          </p>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Changes to This Policy
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg">
            We may update this policy from time to time. Changes will be posted
            with a new "Effective Date."
          </p>
        </div>
        <div>
          <h4 className="text-[var(--n)] text-lg lg:text-2xl font-bold">
            Contact Us
          </h4>
          <p className="text-[var(--n)] text-sm lg:text-lg">
            If you have any questions, please contact us at: <br />
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

export default PrivacyPolicy;
