import React from "react";

const ContactUsPage = () => {
  return (
    <section className="min-h-[99.9dvh] bg-gradient-to-b from-gray-100 to-white flex flex-col items-center justify-center py-[130px] md:py-0 px-6">
      <div className="container text-center">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Have questions or need assistance? We’re here to help! Reach out to
          us through any of the following channels.
        </p>

        {/* Contact Info Section */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Email */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              📧 Email
            </h3>
            <p className="text-sm text-gray-500">
              wrayyburmese@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              📞 Phone
            </h3>
            <p className="text-sm text-gray-500">
              +959 - 09784063395
            </p>
          </div>

          {/* Address */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              📍 Address
            </h3>
            <p className="text-sm text-gray-500">
              Building (D), Room (28), Yeborhoung, Mayangone, Yangon
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400 mt-10">
          We strive to respond to all inquiries within 24 hours.
        </p>
      </div>
    </section>
  );
};

export default ContactUsPage;
