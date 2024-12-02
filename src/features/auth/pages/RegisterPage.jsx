import React from "react";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
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
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
