import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 shadow-md fixed w-full top-0 z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white">Spice Garden</h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-8 text-white font-medium">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-yellow-200 cursor-pointer transition-colors duration-300"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute top-full left-0 w-full bg-orange-500 text-white md:hidden shadow-lg"
          >
            <ul className="flex flex-col space-y-4 py-4 px-6 text-lg font-medium">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="hover:text-yellow-200 cursor-pointer transition-colors duration-300"
                  onClick={() => {
                    navigate(item.path); // navigate to the path
                    setIsOpen(false);   // close the dropdown
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
