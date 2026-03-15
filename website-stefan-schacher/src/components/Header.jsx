import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <nav className="flex items-center justify-between bg-gray-200 px-8 py-12 gap-8 tracking-widest font-light sticky top-0 backdrop-blur">
        {/* py-4 margin, px-8 padding, tracking-widest für letter spacing */}
        <div className="text-2xl text-black">
          <NavLink to="/">STEFAN SCHACHER</NavLink>
        </div>
        <ul className="flex justify-center items-center gap-6 ">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors hover:text-green-500 ${
                  isActive ? "text-green-500" : "text-gray-500"
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
                `transition-colors hover:text-green-500 ${
                  isActive ? "text-green-500" : "text-gray-500"
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
                `transition-colors hover:text-green-500 ${
                  isActive ? "text-green-500" : "text-gray-500"
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
              className="transition-colors hover:text-green-500 text-gray-500"
            >
              INSTAGRAM
            </a>
          </li>
        </ul>
        <div className="flex gap-4 text-black">
          <button
            onClick={toggleLanguage}
            className="transition-colors hover:text-green-500 text-gray-500 tracking-widest font-light"
          >
            {language === "de" ? "EN" : "DE"}
          </button>
          <button
            onClick={toggleTheme}
            className="transition-colors hover:text-green-500 text-gray-500 tracking-widest font-light"
          >
            {theme === "light" ? "DARK" : "LIGHT"}
          </button>
        </div>
      </nav>
    </div>
  );
}

{
  /* rel="noopener noreferrer" ist ein HTML-Attribut für Links (<a>-Tags), das Sicherheit und Datenschutz erhöht, wenn Inhalte in einem neuen Tab (target="_blank") geöffnet werden. Es verhindert, dass die neue Seite JavaScript zur Manipulation der Ursprungsseite nutzt (noopener) und übermittelt keine Informationen über die Herkunft des Besuchers (noreferrer). */
}
