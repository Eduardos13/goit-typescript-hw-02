import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            query,
            page,
            client_id: "JIqK6wYJX5CHgVH50qbzcu2omMWYFwXT6O1MH_R_-UI",
          },
        }
      );
      setImages((prev) => [...prev, ...response.data.results]);
    } catch (error) {
      setError("Error fetching images");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
