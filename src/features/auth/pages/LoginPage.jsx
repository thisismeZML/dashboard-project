import React from "react";
import LoginForm from "../components/LoginForm";

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
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
