import React, { useEffect } from "react";
import Header from "./Header";
import { Navigate, Outlet } from "react-router-dom";
import useCookie from "react-use-cookie";
import useUserStore from "../../../stores/ussUserStore";
import Sidebar from "./Sidebar";
import useGlobalStore from "../../../stores/useGlobalStore";
import { Toaster } from "react-hot-toast";

const DashboardLayout = () => {
  const [token] = useCookie("my_token");
  const [userInfo] = useCookie("user");
  const { setUser } = useUserStore();

  useEffect(() => {
    setUser(JSON.parse(userInfo));
  }, []);

  if (!token) {
    return <Navigate to={"/"} />;
  }

  const { isOpen } = useGlobalStore();

  return (
    <div>
      <Header />
      <Sidebar />
      <div className={`${isOpen ? "ml-[308px]" : "ml-[88px]"} transition-all duration-200`}>
        <Outlet />
      </div>
      <Toaster/>
    </div>
  );
};

export default DashboardLayout;
