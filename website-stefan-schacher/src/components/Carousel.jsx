import React, { useState, useEffect } from "react";
import { carouselImages } from "../data/imagesCarouselHome";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // slider mit autoplay
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length); // ohne modulo der länge ist index über anzahl der bilder hinausgelaufen // sichert also, dass slider nicht endlos läuft!
    }, 7000);
    return () => clearInterval(intervalId);
  }, []); // startet beim mounten der komponente

  // slider-funktionen manuell vor und zurück (pfeile)
  function prevPicture() {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1,
    ); // prev value ist der aktuelle state // wenn currentIndex 0, wird das letzte bild des arrays aufgerufen, sonst das vorherige
  }

  function nextPicture() {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  } // gleiche logik wie oben // "teilungseffekt" bei modulo greift nur, wenn wert der länge erreicht oder überschritten wird

  return (
    <div className="relative max-w-7xl h-160 mx-auto overflow-hidden flex items-center justify-center">
      {/* relativ anlegen für pfeile, h-160 ist leider nicht responsiv, overflow-hidden: pics können nicht über container hinausragen */}
      {carouselImages.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          className={`w-full h-auto transition-opacity duration-500 ${
            i === currentIndex
              ? "opacity-100"
              : "opacity-0 absolute top-0 left-0"
          }`}
        />
        // w-full: w=100%, transition aber nur für opacity, dauer der animation 500 ms
      ))}

      <button
        onClick={() => prevPicture()}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-3xl bg-transparent"
      >
        {/* -translate-y-1/2: verschiebt den Button um 50 % seiner eigenen Höhe nach oben, sodass vertikal zentrierung */}
        &#8592;
      </button>
      <button
        onClick={() => nextPicture()}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-3xl bg-transparent"
      >
        &#8594;
      </button>
    </div>
  );
}
