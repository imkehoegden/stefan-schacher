import React from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <Carousel />
      <Gallery />
      <Button onClick={() => navigate("/work")}>Work</Button>
    </main>
  );
}
