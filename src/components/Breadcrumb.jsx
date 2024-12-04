import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  // Split the pathname into parts
  const pathParts = location.pathname.split("/").filter((part) => part);

  // Remove or replace the dynamic `id` parameter in the breadcrumbs
  const breadcrumbs = pathParts.map((part, index) => {
    const path = `/${pathParts.slice(0, index + 1).join("/")}`;

    // Capitalize the part name, and skip the ID if it's part of the path
    const name =
      isNaN(part) && part !== "" // Check if it's not an ID or "create"
        ? part.charAt(0).toUpperCase() + part.slice(1)
        : "Edit Product"; // Replace numeric IDs with "Edit"

    // Determine if the link is active by comparing the path with the current location
    const isActive = location.pathname === path;

    return (
      <li key={index} className="inline-flex items-center">
        {isNaN(part) && part !== "create" ? (
          <Link
            to={path}
            className={`${
              isActive ? "text-primary font-semibold" : "text-gray-500"
            } hover:text-blue-600 hover:underline transition duration-150`}
          >
            {name}
          </Link>
        ) : (
          <span
            className={`${
              isActive ? "text-primary font-semibold" : "text-gray-500"
            }`}
          >
            {name}
          </span>
        )}
        {index < pathParts.length - 1 && (
          <span className="mx-2 text-gray-400">/</span>
        )}
      </li>
    );
  });

  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className="flex flex-wrap list-none p-0">{breadcrumbs}</ol>
    </nav>
  );
};

export default Breadcrumb;
