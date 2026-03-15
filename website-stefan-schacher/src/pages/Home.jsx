import React from "react";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <main>
      <Gallery />
      {/* <Gallery images={...}/> images sollte hier ein Array von bildpfaden sein oder objekten mit src und alt */}
    </main>
  );
}
