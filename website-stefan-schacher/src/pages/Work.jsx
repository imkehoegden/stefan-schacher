import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { workImages } from "../data/imagesWork.js";

export default function Work() {
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

  if (!data) return;

  const categories = Object.keys(data[language].work); // Object.keys(obj) ist eine Methode, die einen Array aller Schlüssel eines Objekts zurückgibt // hier also: ["Product", "Artist Support", "Landscape", "Report"] etc.

  return (
    <>
      <h1 className="text-2xl font-light mb-6 text-center">
        {language === "de" ? "Portfolio" : "Work"}
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat, i) => (
          <Link
            key={i}
            to={`/work/${cat.toLowerCase().replace(/\s+/g, "-")}`}
            // to={`/work/${cat}`}
            className="w-full sm:w-80 md:w-120 lg:w-190"
          >
            <div className="relative aspect-16/9 bg-gray-200 cursor-pointer flex items-center justify-center overflow-hidden">
              {/* Card Pic*/}
              <img
                src={workImages[cat][0]}
                alt={cat}
                className="w-full h-full object-cover "
              />
              {/* Overlay bei Hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-2xl font-light">{cat}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
