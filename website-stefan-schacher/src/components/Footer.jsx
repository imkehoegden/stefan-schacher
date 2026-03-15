import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-8 py-12 flex justify-between items-center text-sm text-gray-500">
      <div>© STEFAN SCHACHER {new Date().getFullYear()}</div>

      {/* rechter Bereich */}
      <div className="flex gap-6">
        <NavLink to="/imprint" className="hover:text-red-500 transition-colors">
          IMPRINT
        </NavLink>
        <NavLink to="/privacy" className="hover:text-red-500 transition-colors">
          DATA PRIVACY
        </NavLink>
      </div>
    </footer>
  );
}
