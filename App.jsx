import { useEffect, useState } from "react";
import Container from "./src/components/Container/Container";
import ErrorMessage from "./src/components/ErrorMessage/ErrorMessage";
import ImageGallery from "./src/components/ImageGallery/ImageGallery";
import Loader from "./src/components/Loader/Loader";
import SearchBar from "./src/components/SearchBar/SearchBar";
import { getPhotos } from "./src/api";
import ModalImage from "./src/components/ModalImage/ModalImage";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const { results, totalPages } = await getPhotos(query, page);
        setPictures((prev) => [...prev, ...results]);
        setTotalPages(totalPages);
        if (!results.length) setIsEmpty(true);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setPictures([]);
    setPage(1);
    setIsEmpty(false);
    setError("");
    setTotalPages(1);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      !isLoading &&
      page < totalPages
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {pictures.length > 0 && (
        <ImageGallery openModal={openModal} pictures={pictures} />
      )}
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loader />}
      {isEmpty && "Please enter a valid search query"}
      <ModalImage
        picture={modalImage}
        modalIsOpen={Boolean(modalImage)}
        closeModal={() => openModal(null)}
      />
    </Container>
  );
}

export default App;
