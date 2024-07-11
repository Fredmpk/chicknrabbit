import React, { useState, useEffect } from "react";
import { Photo } from "../data/photos";

interface PhotoDisplayProps {
  category: string;
  photos: Photo[];
}

const PhotoDisplay: React.FC<PhotoDisplayProps> = ({ category, photos }) => {
  const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null);

  const selectRandomPhoto = () => {
    const filteredPhotos =
      category === "Zufällig"
        ? photos
        : photos.filter((photo) => photo.category === category);

    const randomPhoto =
      filteredPhotos[Math.floor(Math.random() * filteredPhotos.length)];
    setCurrentPhoto(randomPhoto);
  };

  useEffect(() => {
    selectRandomPhoto();
  }, [category, photos]);

  if (!currentPhoto) return null;

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      onClick={selectRandomPhoto}
    >
      <img
        src={currentPhoto.src}
        alt={currentPhoto.alt}
        className="max-w-full max-h-full object-contain rounded-lg shadow-lg cursor-pointer"
      />
    </div>
  );
};

export default PhotoDisplay;
