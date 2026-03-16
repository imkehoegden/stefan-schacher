import React from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";
import { carouselImages } from "../data/imagesCarouselHome";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Carousel pics={carouselImages} interval={7000} />
      <Gallery />
      <Button onClick={() => navigate("/work")}>Work</Button>
    </>
  );
}
