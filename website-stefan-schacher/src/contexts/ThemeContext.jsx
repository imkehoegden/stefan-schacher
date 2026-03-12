import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : "light";
  });

  useEffect(() => {
    document.documentElement.className = theme; // document.documentElement steuert mein html-Element an. // demnach hat jetzt meine komplette seite die klasse theme, also je nachdem "light" oder "dark"
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
