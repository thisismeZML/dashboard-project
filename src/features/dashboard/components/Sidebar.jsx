import React from "react";
import { FaBox, FaChartLine, FaTags } from "react-icons/fa6";
import { HiHome, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { SlSettings } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import useGlobalStore from "../../../stores/useGlobalStore";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useGlobalStore();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-[83.8px] bottom-0 bg-white shadow-lg ${
        isOpen ? "w-[300px]" : "w-[80px]"
      } flex flex-col p-3 transition-all duration-200`}
    >
      {/* Header */}
      <div
        className={`flex items-center border-b py-5 ${
          isOpen ? "justify-end" : "justify-center"
        }`}
      >
        <button onClick={handleToggle} className="bg-primary p-2 rounded-md">
          {isOpen ? (
            <HiOutlineArrowNarrowLeft className="text-white" />
          ) : (
            <HiOutlineArrowNarrowRight className="text-white" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-2 mt-8">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `flex items-center gap-2 hover:bg-blue-50 py-3 px-2 group transition-all duration-200 ${
              !isOpen ? "justify-center" : ""
            } ${isActive ? "bg-blue-100 text-primary" : ""}`
          }
        >
          <HiHome />
          <p className={`${isOpen ? "" : "hidden"}`}>Dashboard</p>
        </NavLink>

        <NavLink
          to="product"
          className={({ isActive }) =>
            `flex items-center gap-2 hover:bg-blue-50 py-3 px-2 group transition-all duration-200 ${
              !isOpen ? "justify-center" : ""
            } ${isActive ? "bg-blue-100 text-primary" : ""}`
          }
        >
          <FaBox />
          <p className={`${isOpen ? "" : "hidden"}`}>Products</p>
        </NavLink>
        <NavLink
          to="sale"
          className={({ isActive }) =>
            `flex items-center gap-2 hover:bg-blue-50 py-3 px-2 group transition-all duration-200 ${
              !isOpen ? "justify-center" : ""
            } ${isActive ? "bg-blue-100 text-primary" : ""}`
          }
        >
          <FaChartLine />
          <p className={`${isOpen ? "" : "hidden"}`}>Sales</p>
        </NavLink>
        <NavLink
          to="voucher"
          className={({ isActive }) =>
            `flex items-center gap-2 hover:bg-blue-50 py-3 px-2 group transition-all duration-200 ${
              !isOpen ? "justify-center" : ""
            } ${isActive ? "bg-blue-100 text-primary" : ""}`
          }
        >
          <FaTags />
          <p className={`${isOpen ? "" : "hidden"}`}>Vouchers</p>
        </NavLink>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <NavLink
          to="usersetting"
          className={({ isActive }) =>
            `flex items-center gap-2 hover:bg-blue-50 py-3 px-2 group transition-all duration-200 ${
              !isOpen ? "justify-center" : ""
            } ${isActive ? "bg-blue-100 text-primary" : ""}`
          }
        >
          <SlSettings />
          <p className={`${isOpen ? "" : "hidden"}`}>Settings</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
