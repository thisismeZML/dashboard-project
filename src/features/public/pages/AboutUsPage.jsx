import React from "react";

const AboutUsPage = () => {
  return (
    <section className="min-h-[99.9dvh] bg-gradient-to-b from-gray-100 to-white flex flex-col items-center justify-center py-[130px] md:py-0 px-6">
      <div className="container text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-primary">Us</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Welcome to our Invoice Management App! Designed with simplicity and 
          efficiency in mind, our platform helps businesses streamline operations 
          with four essential modules:
        </p>

        {/* Modules Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {/* Products */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Products</h3>
            <p className="text-sm text-gray-500">
              Effortlessly manage your inventory and product details.
            </p>
          </div>

          {/* Sales */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Sales</h3>
            <p className="text-sm text-gray-500">
              Track transactions and gain real-time sales insights.
            </p>
          </div>

          {/* Vouchers */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Vouchers</h3>
            <p className="text-sm text-gray-500">
              Create and manage discounts and offers with ease.
            </p>
          </div>

          {/* User Profile */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">User Profile</h3>
            <p className="text-sm text-gray-500">
              Securely manage user information and profiles.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <p className="text-sm text-gray-400 mt-10">
          Built with modern technologies to ensure a seamless user experience.
        </p>
      </div>
    </section>
  );
};

export default AboutUsPage;
