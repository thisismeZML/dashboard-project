import React from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai"; // Import icons
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="container">
        <div className="shadow-2xl p-[60px] max-w-[450px] mx-auto bg-white rounded-lg">
          <div className="flex flex-col gap-4">
            <h1 className="text-primary font-bold text-2xl">RAYY.</h1>
            <div className="flex flex-col gap-2 mb-4">
              <p className="font-semibold text-lg">Login to your Account</p>
              <p className="text-sm text-gray-500">Welcome Back!</p>
            </div>
            <form action="">
              <div className="flex flex-col gap-5">
                {/* Email Field */}
                <div className="relative">
                  <AiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    className="border w-full px-10 py-2 bg-[#fafbfe] rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Email Address"
                  />
                </div>
                {/* Password Field */}
                <div className="relative">
                  <AiOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    className="border w-full px-10 py-2 bg-[#fafbfe] rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Password"
                  />
                </div>
                {/* Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="check"
                    className="accent-primary"
                  />
                  <label
                    htmlFor="check"
                    className="text-sm text-gray-500 select-none"
                  >
                    Terms and Conditions
                  </label>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="py-2 bg-primary rounded-md text-white w-full hover:bg-primary-dark transition"
                >
                  Log in
                </button>
              </div>
              {/* Footer */}
              <div className="flex items-center justify-center mt-10">
                <div className="text-sm">
                  <span>Don't have an account? </span>
                  <Link to='/register' className="text-primary cursor-pointer hover:underline">
                    Create an account
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
