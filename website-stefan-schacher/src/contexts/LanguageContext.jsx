import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("language");
    return saved ? JSON.parse(saved) : "de";
  });

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);

  // function toggleLanguage() {
  //   if (language === "de") {
  //     return setLanguage("en");
  //   } else {
  //     return setLanguage("de");
  //   }
  // }

  function toggleLanguage() {
    setLanguage((prev) => (prev === "de" ? "en" : "de"));
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
