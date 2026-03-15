import React, { useState, useEffect } from "react";
import { carouselImages } from "../data/imagesCarouselHome";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // slider mit autoplay
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length); // ohne modulo der länge ist index über anzahl der bilder hinausgelaufen // sichert also, dass slider nicht endlos läuft!
    }, 5000);
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
      {carouselImages.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          className={`w-full h-auto transition-opacity duration-500 object-contain${
            i === currentIndex
              ? "opacity-100"
              : "opacity-0 absolute top-0 left-0"
          }`}
        />
      ))}

      <button
        onClick={() => prevPicture()}
        className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded hover:bg-opacity-80"
      >
        &#8592;
      </button>
      <button
        onClick={() => nextPicture()}
        className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded hover:bg-opacity-80"
      >
        &#8594;
      </button>
    </div>
  );
}
