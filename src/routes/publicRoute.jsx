import React from "react";
import HomePage from "../features/public/pages/HomePage";
import AboutUsPage from "../features/public/pages/AboutUsPage";
import ContactUsPage from "../features/public/pages/ContactUsPage";

const PublicRoute = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "about-us",
    element: <AboutUsPage />,
  },
  {
    path: "contact-us",
    element: <ContactUsPage />,
  },
];

export default PublicRoute;