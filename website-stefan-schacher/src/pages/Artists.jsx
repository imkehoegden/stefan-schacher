import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { workImages } from "../data/imagesWork";

export default function Artists() {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("/data.json");
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error(e);
      }
    }
    getData();
  }, []);

  if (!data) return null;

  const artists = data[language].work.Artists;

  return (
    <>
      <div>
        <h1 className="text-2xl font-light mb-6 text-center">
          {language === "de" ? "Künstler:innen" : "Artists"}
        </h1>
        <div className="aspect-16/9 overflow-hidden flex items-center justify-center">
          <img src={workImages.Artists[0]} alt="" />
        </div>

        <div className="pt-6 pb-6">
          <h2 className="text-2xl font-light mb-2">{artists[0].title}</h2>
          <p className="font-light leading-relaxed">{artists[0].text}</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <div className="w-full sm:w-[45%] md:w-[50%] aspect-[16/9] bg-red-500 overflow-hidden">
            <img src="" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full sm:w-[45%] md:w-[30%] aspect-[16/9] bg-red-500 overflow-hidden">
            <img src="" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full sm:w-[45%] md:w-[70%] aspect-[16/9] bg-red-500 overflow-hidden">
            <img src="" alt="" className="w-full h-full object-cover" />
          </div>
          {/* weitere Bilder hier händisch hinzufügen */}
        </div>
      </div>
    </>
  );
}
