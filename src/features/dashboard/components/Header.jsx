import React from "react";
import useUserStore from "../../../stores/ussUserStore";
import { CgMenuLeft } from "react-icons/cg";
import useGlobalStore from "../../../stores/useGlobalStore";

const Header = () => {
  const {
    user: { name, email, profile_image },
  } = useUserStore();

  const { setIsActive } = useGlobalStore();

  return (
    <div className="fixed top-0 start-0 end-0 py-5 items-center bg-white border-b">
      <div className="px-11">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[150px]">
            <h1 className="text-primary font-bold text-2xl">RAYY.</h1>
            <button onClick={setIsActive}>
              <CgMenuLeft className="size-5 text-primary"/>
            </button>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <img
                src={profile_image ? profile_image : "../user.png"}
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <p>{name}</p>
              <span className="text-[13px] text-gray-400">{email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
