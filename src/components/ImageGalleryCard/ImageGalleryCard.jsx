import s from "./ImageGalleryCard.module.css";
import Description from "../Description/Description";

const ImageGalleryCard = ({ picture, openModal }) => {
  return (
    <li className={s.imageWrapper}>
      <img
        onClick={() => {
          openModal({
            src: picture.urls.regular,
            alt: picture.alt_description,
          });
        }}
        src={picture.urls.small}
        alt={picture.alt_description}
      />
      <Description picture={picture} />
    </li>
  );
};

export default ImageGalleryCard;
