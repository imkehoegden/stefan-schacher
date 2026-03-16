import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";
import { carouselImages } from "../data/imagesCarouselHome";
import Button from "../components/Button";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Home() {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  return (
    <>
      <Carousel pics={carouselImages} interval={7000} />
      <Gallery />
      <Button onClick={() => navigate("/work")}>
        {language === "de" ? "PORTFOLIO" : "WORK"}
      </Button>
    </>
  );
}
