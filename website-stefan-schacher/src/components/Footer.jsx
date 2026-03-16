import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="w-full px-8 pb-12 pt-8 flex flex-col md:flex-col lg:flex-row tracking-widest justify-between items-center font-light text-gray-500 gap-4">
      <div>© STEFAN SCHACHER {new Date().getFullYear()}</div>

      <div className="flex flex-col md:flex-col lg:flex-row  justify-between items-center gap-4 lg:gap-6">
        <NavLink to="/imprint" className="hover:text-red-500 transition-colors">
          {language === "de" ? "IMPRESSUM" : "IMPRINT"}
        </NavLink>
        <NavLink to="/privacy" className="hover:text-red-500 transition-colors">
          {language === "en" ? "DATENSCHUTZ" : "DATA PRIVACY"}
        </NavLink>
      </div>
    </footer>
  );
}
