import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : "light";
  });

  useEffect(() => {
    document.documentElement.className = theme; // so reagieren meine Tailwind-Klassen wie dark:bg-gray-900 direkt, ohne dass ich extra etwas an den Komponenten ändern muss
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
