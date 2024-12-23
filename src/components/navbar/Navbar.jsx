import { useState } from "react";
import { NavLink } from "react-router-dom";
import CartButton from "../cart/CartButton";

const links = ["Home", "Specialitites", "About Us", "Contact Us"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-screen  -z-10">
      {/* Navbar Container */}
      <div className="flex items-center justify-around p-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo/pizza-slice.png" alt="logo" className="h-16" />
          <h1 className="font-playwrite text-2xl font-bold">
            <span className="text-orange-400">Pizz</span>
            <span>ala</span>
          </h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-black focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Inline Navigation Links for Large Screens */}
        <ul className="hidden lg:flex space-x-6">
          {links.map((link) => {
            const route = link.toLowerCase().replace(/\s+/g, "-");
            return (
              <li key={link}>
                <NavLink
                  to={`/${route === "home" ? "" : route}`}
                  className={({ isActive }) =>
                    `text-lg font-medium hover:text-gray-400 ${
                      isActive ? "text-yellow-400" : "text-black"
                    }`
                  }
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <CartButton />
      </div>

      {/* Full-Screen Sliding Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-gradient-to-tl from-amber-500 to-yellow-400 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-white focus:outline-none"
          onClick={closeMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {links.map((link) => {
            const route = link.toLowerCase().replace(/\s+/g, "-");
            return (
              <li key={link} onClick={closeMenu}>
                <NavLink
                  to={`/${route === "home" ? "" : route}`}
                  className={({ isActive }) =>
                    `text-2xl font-semibold hover:text-gray-200 ${
                      isActive ? "text-white font-extrabold" : "text-gray-200"
                    }`
                  }
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
