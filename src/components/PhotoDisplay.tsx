import { useState, useEffect, useCallback } from "react";
import { Photo } from "../data/photos";

type PhotoDisplayProps = {
  category: string;
  photos: Photo[];
  onPhotoChange: (photo: Photo | null) => void;
};

export function PhotoDisplay({
  category,
  photos,
  onPhotoChange,
}: PhotoDisplayProps) {
  const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null);

  const selectRandomPhoto = useCallback(() => {
    const filteredPhotos =
      category === "Zufällig"
        ? photos
        : photos.filter((photo) => photo.category === category);

    const randomPhoto =
      filteredPhotos[Math.floor(Math.random() * filteredPhotos.length)];
    setCurrentPhoto(randomPhoto);
    onPhotoChange(randomPhoto);
  }, [category, photos, onPhotoChange]);

  useEffect(() => {
    selectRandomPhoto();
  }, [selectRandomPhoto]);

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
}
