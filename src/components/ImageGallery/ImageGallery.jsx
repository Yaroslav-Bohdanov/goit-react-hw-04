import ImageGalleryCard from "../ImageGalleryCard/ImageGalleryCard";
import Form from "../Form/Form";
import { useEffect, useRef } from "react";
const ImageGallery = ({ pictures, openModal }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      const lastItem = galleryRef.current.lastElementChild;
      const height = lastItem.getBoundingClientRect().height;

      if (pictures.length > 12) {
        window.scrollBy({
          top: height * 1.8,
          behavior: "smooth",
        });
      }
    }
  }, [pictures]);

  return (
    <Form ref={galleryRef}>
      {pictures.map((picture) => {
        return (
          <ImageGalleryCard
            openModal={openModal}
            key={picture.id}
            picture={picture}
          />
        );
      })}
    </Form>
  );
};

export default ImageGallery;
