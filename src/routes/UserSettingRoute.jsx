import React from "react";
import UserSettingPage from "../features/user-profile/pages/UserSettingPage";
import UserChangeNamePage from "../features/user-profile/pages/UserChangeNamePage";
import UserPasswordChangePage from "../features/user-profile/pages/UserPasswordChangePage";
import UserChangeProfileImagePage from "../features/user-profile/pages/UserChangeProfileImagePage";

const UserSettingRoute = [
  {
    path: "usersetting",
    element: <UserSettingPage />,
  },
  {
    path: "usersetting/changename",
    element: <UserChangeNamePage />,
  },
  {
    path: "usersetting/changepassword",
    element: <UserPasswordChangePage />,
  },
  {
    path: "usersetting/changeprofile",
    element: <UserChangeProfileImagePage />,
  },
];

export default UserSettingRoute;
