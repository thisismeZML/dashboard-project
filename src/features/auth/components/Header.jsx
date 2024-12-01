import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="fixed top-0 start-0 end-0 py-5 items-center">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-between">
          {/* Logo */}
          <Link to={"/"}>
            <li className="text-primary font-bold text-2xl">RAYY.</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
