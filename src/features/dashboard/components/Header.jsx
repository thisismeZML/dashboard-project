import React, { useEffect, useState } from "react";
import useUserStore from "../../../stores/ussUserStore";
import { Link, useNavigate } from "react-router-dom";
import { GrPowerShutdown } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { removeCookie } from "react-use-cookie";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const {
    user: { name, email, profile_image },
  } = useUserStore();

  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("my_token");
    removeCookie("user");
    navigate("/");
  };

  const [isClick, setIsClick] = useState(false);

  const toggleClick = (e) => {
    e.stopPropagation();
    setIsClick((prev) => !prev);
  };

  // Close dropdown when clicking outside
  const closeDropdown = () => {
    setIsClick(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className="fixed top-0 start-0 end-0 py-5 items-center bg-white border-b">
      <div className="px-11">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[150px]">
            <Link to="." className="text-primary font-bold text-2xl">
              RAYY.
            </Link>
          </div>
          <div
            onClick={toggleClick}
            className="flex items-center gap-6 cursor-pointer relative"
          >
            <div className="cursor-pointer">
              <img
                src={profile_image ? profile_image : "/user.png"}
                className="w-8 h-8 rounded-full cursor-pointer"
              />
            </div>
            <div className="flex flex-col cursor-pointer">
              <p>{name}</p>
              <span className="text-[13px] text-gray-400">{email}</span>
            </div>

            <div>
              <IoIosArrowDown/>
            </div>

            {/* Dropdown */}
            {isClick && (
              <div className="absolute top-[60px] right-0 w-[200px] p-4 shadow-xl bg-white">
                <div className="flex flex-col gap-2">
                  <Link
                    to="usersetting"
                    className={`flex items-center gap-2 hover:bg-blue-50 py-3 px-2 group transition-all duration-200`}
                  >
                    <BiUser className={`group-hover:text-primary`} />
                    <p className={`group-hover:text-primary`}>User Profile</p>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={`flex items-center gap-2 hover:bg-blue-50 py-3 px-2 group transition-all duration-200`}
                  >
                    <GrPowerShutdown className={`group-hover:text-primary`} />
                    <p className={`group-hover:text-primary`}>Logout</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
