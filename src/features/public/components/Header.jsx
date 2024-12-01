import React from "react";
import { BiUser } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="fixed top-0 start-0 end-0 py-5 items-center">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-between">
          {/* Logo */}
          <Link to={"/"}>
            <li className="text-primary font-bold text-2xl">RAYY.</li>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button className="size-8 bg-primary flex items-center justify-center rounded-md">
              <MdMenu className="text-white" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                <li>About Us</li>
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                <li>Contact Us</li>
              </NavLink>
            </ul>
          </div>

          {/* Login Button */}
          <div className="hidden lg:inline-flex">
            <Link to='/login' className="bg-primary px-4 py-2 text-white flex items-center gap-3 rounded-md hover:bg-blue-600 duration-500">
              <BiUser />
              <span>Login</span>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
