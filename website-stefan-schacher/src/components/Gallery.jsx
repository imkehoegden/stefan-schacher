import React from "react";
import { images } from "../data/imagesHome.js";
// import Lightbox from "react-image-lightbox";

export default function Gallery() {
  // const [opened, setOpened] = useState(false);
  // const [photoI, setPhotoI] = useState(0);

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 mt-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Picture ${i + 1}`}
            className="w-full h-auto mb-4"
            // onClick={() => {
            //   setPhotoI(i);
            //   setOpened(true);
            // }}
          />
        ))}
      </div>
      {/* {opened && (
        <Lightbox
          mainSrc={images[photoI]}
          nextSrc={images[(photoI + 1) % images.length]}
          prevSrc={images[(photoI + images.length - 1) % images.length]}
          onCloseRequest={() => setOpened(false)}
          onMovePrevRequest={() =>
            setPhotoI((photoI + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setPhotoI((photoIndex + 1) % images.length)}
        />
      )} */}
    </>
  );
}

// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
{
  /* grid-cols-1: standardmäßig für mobile gibt es 1 Spalte, md:grid-cols-2:
      für mittelgroße screens (ca. 768 px) 2 spalten, lg:grid-cols-3: fpr desktop (ca 1024px) 3 spalten */
}
