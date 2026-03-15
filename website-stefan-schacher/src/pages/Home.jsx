import React from "react";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <main>
      <Carousel />
      <Gallery />
      {/* <Gallery images={...}/> images sollte hier ein Array von bildpfaden sein oder objekten mit src und alt */}
    </main>
  );
}
