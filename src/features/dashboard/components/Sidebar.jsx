import React from "react";
import { FaBox, FaChartLine, FaTags, FaXmark } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { SlSettings } from "react-icons/sl";
import { Link } from "react-router-dom";
import useGlobalStore from "../../../stores/useGlobalStore";

const Sidebar = () => {

  const {isActive, setIsActive} = useGlobalStore();

  return (
    <div className={`fixed top-0 bottom-0 bg-white shadow-lg w-[300px] flex flex-col min-h-dvh p-3 px-4 transition-all duration-200 ${isActive ? " translate-x-0" : " -translate-x-[300px]"}`}>
      <div className="flex items-center justify-between border-b py-5">
        <h1 className="text-primary font-bold text-2xl">MENU</h1>
        <button onClick={setIsActive} className="bg-primary p-2 rounded-md">
          <FaXmark className="text-white" />
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <Link
          to="."
          className="flex items-center gap-2 hover:bg-blue-50 py-3 px-2 group transition-all duration-200"
        >
          <HiHome className=" group-hover:text-primary" />
          <p className=" group-hover:text-primary">Dashboard</p>
        </Link>
        <Link
          to="product"
          className="flex items-center gap-2 hover:bg-blue-50 py-3 px-2 group transition-all duration-200"
        >
          <FaBox className=" group-hover:text-primary" />
          <p className=" group-hover:text-primary">Products</p>
        </Link>
        <Link
          to="sale"
          className="flex items-center gap-2 hover:bg-blue-50 py-3 px-2 group transition-all duration-200"
        >
          <FaChartLine className=" group-hover:text-primary" />
          <p className=" group-hover:text-primary">Sales</p>
        </Link>
        <Link
          to="voucher"
          className="flex items-center gap-2 hover:bg-blue-50 py-3 px-2 group transition-all duration-200"
        >
          <FaTags className=" group-hover:text-primary" />
          <p className=" group-hover:text-primary">Vouchers</p>
        </Link>
      </div>
      <div className="mt-auto">
        <Link
          to="."
          className="flex items-center gap-2 hover:bg-blue-50 py-3 px-2 group transition-all duration-200"
        >
          <SlSettings className=" group-hover:text-primary" />
          <p className=" group-hover:text-primary">Settings</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
