import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const themeDeEn = {
    light: { de: "HELL", en: "LIGHT" },
    dark: { de: "DUNKEL", en: "DARK" },
  };

  return (
    <header>
      <nav className="flex  items-center justify-between px-8 py-12 gap-8 tracking-widest font-light sticky top-0">
        {/* py-4 margin, px-8 padding, tracking-widest für letter spacing */}
        <div className="text-2xl text-black">
          <NavLink to="/">STEFAN SCHACHER</NavLink>
        </div>
        <ul className="hidden md:flex justify-center items-center gap-6 ">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors hover:text-red-500 ${
                  isActive ? "text-red-500" : "text-gray-500"
                }`
              }
            >
              {language === "de" ? "ÜBER MICH" : "ABOUT"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `transition-colors hover:text-red-500 ${
                  isActive ? "text-red-500" : "text-gray-500"
                }`
              }
            >
              {language === "de" ? "PORTFOLIO" : "WORK"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors hover:text-red-500 ${
                  isActive ? "text-red-500" : "text-gray-500"
                }`
              }
            >
              {language === "de" ? "KONTAKT" : "CONTACT"}
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.instagram.com/stefanschacher/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-red-500 text-gray-500 cursor-pointer"
            >
              INSTAGRAM
            </a>
          </li>
        </ul>
        <div className="hidden md:flex gap-4 text-black">
          <button
            onClick={toggleLanguage}
            className="transition-colors hover:text-red-500 text-gray-500 tracking-widest font-light cursor-pointer"
          >
            {language === "de" ? "EN" : "DE"}
          </button>
          <button
            onClick={toggleTheme}
            className="transition-colors hover:text-red-500 text-gray-500 tracking-widest font-light cursor-pointer"
          >
            {/* {theme === "light" ? "DARK" : "LIGHT"} */}
            {themeDeEn[theme][language]}
          </button>
        </div>

        {/* <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button> */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span
            className={`block w-8 h-0.5 bg-black transform transition duration-300 ease-in-out ${
              openMenu ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-black transition-opacity duration-300 ease-in-out ${
              openMenu ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-black transform transition duration-300 ease-in-out ${
              openMenu ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>
      {openMenu && (
        <nav className="md:hidden flex flex-col items-center gap-6 pb-6 transition-all duration-500 ease-in-out">
          <NavLink
            to="/about"
            className="text-gray-500 font-light tracking-widest"
            onClick={() => setOpenMenu(false)}
          >
            {language === "de" ? "ÜBER MICH" : "ABOUT"}
          </NavLink>
          <NavLink
            to="/work"
            className="text-gray-500 font-light tracking-widest"
            onClick={() => setOpenMenu(false)}
          >
            {language === "de" ? "PORTFOLIO" : "WORK"}
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-500 font-light tracking-widest"
            onClick={() => setOpenMenu(false)}
          >
            {language === "de" ? "KONTAKT" : "CONTACT"}
          </NavLink>

          <div className="flex flex-col gap-4 mt-4">
            <button
              onClick={toggleLanguage}
              className="text-gray-500 font-light tracking-widest"
            >
              {language === "de" ? "EN" : "DE"}
            </button>
            <button
              onClick={toggleTheme}
              className="text-gray-500 font-light tracking-widest"
            >
              {theme === "light" ? "DARK" : "LIGHT"}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

{
  /* rel="noopener noreferrer" ist ein HTML-Attribut für Links (<a>-Tags), das Sicherheit und Datenschutz erhöht, wenn Inhalte in einem neuen Tab (target="_blank") geöffnet werden. Es verhindert, dass die neue Seite JavaScript zur Manipulation der Ursprungsseite nutzt (noopener) und übermittelt keine Informationen über die Herkunft des Besuchers (noreferrer). */
}
