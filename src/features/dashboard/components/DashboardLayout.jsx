import React, { useEffect } from "react";
import Header from "./Header";
import { Navigate, Outlet } from "react-router-dom";
import useCookie from "react-use-cookie";
import useUserStore from "../../../stores/ussUserStore";
import Sidebar from "./Sidebar";

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

  return (
    <div>
      <Header />
      <Sidebar/>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
