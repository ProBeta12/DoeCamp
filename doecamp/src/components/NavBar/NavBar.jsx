import React, { useState, useEffect } from "react";
import Button from "../botoes/Button";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const buttons = [
    { url: "/", texto: "home" },
    { url: "/", texto: "Campanhas" },
    { url: "/put", texto: "Editar" },
    { url: "/post", texto: "Criar" },
    { url: "/delete", texto: "Deletar" },
  ];

  useEffect(() => {
    const currentIndex = buttons.findIndex(
      (button) => button.url === router.pathname
    );
    setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
  }, [router.pathname]);

  return (
    <nav className="bg-[#F5F5F5] text-black  transition-colors duration-500 md:max-w-[1200px] md:mx-auto md:flex md:justify-between py-2 px-4 grid grid-rows-[auto_auto] grid-cols-1">
      <div className="flex items-center justify-between">
        <img src="/logo/logo.png" alt="Logo" className="w-12 md:w-18 h-auto" />
        <h1 className="text-[#f8941c] text-xl md:ml-4 font-bold">DoeCamp</h1>

        <button
          className="md:hidden text-white flex flex-col items-center space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-1 bg-[#263741] rounded-full"></div>
          <div className="w-6 h-1 bg-[#263741] rounded-full"></div>
          <div className="w-6 h-1 bg-[#263741] rounded-full"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <section
        className={`md:hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-500 ease-in-out text-white mt-2 overflow-hidden`}
      >
        <ul className="flex flex-col items-start mt-4 space-y-4">
          {buttons.map((button, index) => (
            <li key={index}>
              <Button
                url={button.url}
                classes={`hover:text-gray-400 text-[#263741] ${
                  activeIndex === index ? "border-b border-[#f8941c]" : ""
                }`}
                texto={button.texto}
                onClick={() => {
                  setActiveIndex(index);
                  setIsOpen(false);
                }}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Desktop Menu */}
      <section className="hidden md:flex space-x-6 items-center">
        <ul className="flex space-x-4">
          {buttons.map((button, index) => (
            <li key={index}>
              <Button
                url={button.url}
                classes={`hover:text-gray-400 text-[#263741] ${
                  activeIndex === index ? "border-b border-[#f8941c]" : ""
                }`}
                texto={button.texto}
                onClick={() => setActiveIndex(index)}
              />
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
}

export default NavBar;
