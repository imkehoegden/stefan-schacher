import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Header() {
  const { openMenu, setOpenMenu } = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <header>
      <nav className="flex items-center justify-between px-8 py-12 gap-8 tracking-widest font-light sticky top-0">
        {/* py-4 margin, px-8 padding, tracking-widest für letter spacing */}
        <div className="text-2xl text-black">
          <NavLink to="/">STEFAN SCHACHER</NavLink>
        </div>
        <ul className=".hidden md:flex justify-center items-center gap-6 ">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors hover:text-red-500 ${
                  isActive ? "text-red-500" : "text-gray-500"
                }`
              }
            >
              ABOUT
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
              WORK
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
              CONTACT
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
        <div className="flex gap-4 text-black">
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
            {theme === "light" ? "DARK" : "LIGHT"}
          </button>
        </div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
}

{
  /* rel="noopener noreferrer" ist ein HTML-Attribut für Links (<a>-Tags), das Sicherheit und Datenschutz erhöht, wenn Inhalte in einem neuen Tab (target="_blank") geöffnet werden. Es verhindert, dass die neue Seite JavaScript zur Manipulation der Ursprungsseite nutzt (noopener) und übermittelt keine Informationen über die Herkunft des Besuchers (noreferrer). */
}
