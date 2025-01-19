"use client";
import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface Image {
  src: string;
  width: number;
  height: number;
}

interface MasonryGalleryProps {
  images?: Image[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images = [] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (
    event: React.MouseEvent,
    { index }: { index: number }
  ) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  if (!images || images.length === 0) {
    return <p>No images available.</p>;
  }

  return (
    <div>
      <Gallery photos={images} onClick={openLightbox} />
      {isOpen && images.length > 0 && (
        <Lightbox
          mainSrc={images[currentImage].src}
          nextSrc={images[(currentImage + 1) % images.length].src}
          prevSrc={images[(currentImage + images.length - 1) % images.length].src}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default MasonryGallery;
