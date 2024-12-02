import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { register as accRegister } from "../../../services/auth";
import toast, { Toaster } from "react-hot-toast";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await accRegister(data);
      const json = await res.json();

      if (res.status === 200) {
        toast.success("Successfully Registered");
        reset();
        navigate('/login')
      } else {
        toast.error(json.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5">
        <div className="relative">
          <AiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="name"
            className="border w-full px-10 py-2 bg-[#fafbfe] rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Full Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="relative">
          <AiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            className="border w-full px-10 py-2 bg-[#fafbfe] rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Email Address"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="relative">
          <AiOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            name="password"
            className="border w-full px-10 py-2 bg-[#fafbfe] rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            autoComplete=""
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <div className="relative">
          <AiOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            name="confirmPassword"
            className="border w-full px-10 py-2 bg-[#fafbfe] rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Confirm Password"
            {...register("password_confirmation", {
              required: "Password confirmation is required",
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            })}
            autoComplete=""
          />
          {errors.password_confirmation && (
            <p className="text-red-500 text-sm">
              {errors.password_confirmation.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="py-2 bg-primary rounded-md text-white w-full hover:bg-primary-dark transition"
        >
          Register
        </button>
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="text-sm">
          <span>Already have an account? </span>
          <Link
            to="/login"
            className="text-primary cursor-pointer hover:underline"
          >
            Log in
          </Link>
        </div>
      </div>
      <Toaster />
    </form>
  );
};

export default RegisterForm;
