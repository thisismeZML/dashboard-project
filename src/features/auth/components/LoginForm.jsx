import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai"; // Import icons
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/auth";
import toast, { Toaster } from "react-hot-toast";
import reactUseCookie from "react-use-cookie";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [token, setToken] = reactUseCookie('my_token')
  const [userInfo, setUserInfo] = reactUseCookie('user')

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const res = await login(data);
    const json = await res.json();

    if(res.status === 200) {
      toast.success('Successfully Login');
      setToken(json.token)
      setUserInfo(JSON.stringify(json.user))
      navigate('/dashboard')
    }else {
      toast.error('Login Fail')
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5">
        {/* Email Field */}
        <div className="relative">
          <AiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            className="border w-full px-10 py-2 bg-[#fafbfe] rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Email Address"
            {...register('email')}
          />
        </div>
        {/* Password Field */}
        <div className="relative">
          <AiOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            className="border w-full px-10 py-2 bg-[#fafbfe] rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Password"
            {...register('password')}
            autoComplete=""
          />
        </div>
        {/* Checkbox */}
        <div className="flex items-center gap-3">
          <input type="checkbox" id="check" className="accent-primary" />
          <label htmlFor="check" className="text-sm text-gray-500 select-none">
            Remember Me
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
          <Link
            to="/register"
            className="text-primary cursor-pointer hover:underline"
          >
            Create an account
          </Link>
        </div>
      </div>
      <Toaster/>
    </form>
  );
};

export default LoginForm;
