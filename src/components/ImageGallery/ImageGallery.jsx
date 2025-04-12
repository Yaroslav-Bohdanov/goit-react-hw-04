import ImageGalleryCard from "../ImageGalleryCard/ImageGalleryCard";
import s from "./ImageGallery.module.css";
import { useEffect, useRef } from "react";

const ImageGallery = ({ pictures, openModal }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      const lastItem = galleryRef.current.lastElementChild;
      const height = lastItem?.getBoundingClientRect().height || 0;

      if (pictures.length > 12) {
        window.scrollBy({
          top: height * 1.8,
          behavior: "smooth",
        });
      }
    }
  }, [pictures]);

  return (
    <ul ref={galleryRef} className={s.gallery}>
      {pictures.map((picture) => (
        <ImageGalleryCard
          key={picture.id}
          picture={picture}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
