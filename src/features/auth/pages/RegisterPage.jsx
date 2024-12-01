import React, { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai"; // Import icons
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords must match";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form or handle registration logic
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="container">
        <div className="shadow-2xl p-[60px] max-w-[450px] mx-auto bg-white rounded-lg">
          <div className="flex flex-col gap-4">
            <h1 className="text-primary font-bold text-2xl">RAYY.</h1>
            <div className="flex flex-col gap-2 mb-4">
              <p className="font-semibold text-lg">Create Your Account</p>
              <p className="text-sm text-gray-500">Fill in the details below</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5">
                {/* Name Field */}
                <div className="relative">
                  <AiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border w-full px-10 py-2 bg-[#fafbfe] rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Full Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                {/* Email Field */}
                <div className="relative">
                  <AiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border w-full px-10 py-2 bg-[#fafbfe] rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Email Address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                {/* Password Field */}
                <div className="relative">
                  <AiOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border w-full px-10 py-2 bg-[#fafbfe] rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
                {/* Confirm Password Field */}
                <div className="relative">
                  <AiOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="border w-full px-10 py-2 bg-[#fafbfe] rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Confirm Password"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                  )}
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="py-2 bg-primary rounded-md text-white w-full hover:bg-primary-dark transition"
                >
                  Register
                </button>
              </div>
              {/* Footer */}
              <div className="flex items-center justify-center mt-10">
                <div className="text-sm">
                  <span>Already have an account? </span>
                  <Link to='/login' className="text-primary cursor-pointer hover:underline">
                    Log in
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

export default RegisterPage;
