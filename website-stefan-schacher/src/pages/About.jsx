import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import aboutPic from "../assets/fotograf_stefan-schacher.jpg";
import List from "../components/List";
import { AboutSidebar } from "../components/AboutSidebar";
import { AboutText } from "../components/AboutText";
import HeroImage from "../components/HeroImage";

export default function About() {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getTranslations() {
      try {
        const res = await fetch("/data.json");
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error(e);
      }
    }

    getTranslations();
  }, []);

  if (!data) return; // return ohne p-tag oder dergleichen, denn sonst war text kurz beim laden sichtbar ...

  const about = data[language].about;

  return (
    <>
      <h1 className="text-2xl font-light mb-6 text-center">
        {language === "de" ? "ÜBER MICH" : "ABOUT"}
      </h1>

      <HeroImage src={aboutPic} alt="Portraitfoto Stefan Schacher" />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-6">
          <AboutText about={data[language].about} language={language} />
        </div>
        <List
          title={
            language === "de" ? "KUND:INNEN (AUSWAHL)" : "SELECTED CLIENTS"
          }
          clients={data[language].about.clients}
        />

        <AboutSidebar about={data[language].about} language={language} />
      </div>
    </>
  );
}
