import React from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";
import ButtonArrowRight from "../components/ButtonArrowRight";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <Carousel />
      <Gallery />
      <ButtonArrowRight onClick={() => navigate("/work")}>
        Work
      </ButtonArrowRight>
    </main>
  );
}
