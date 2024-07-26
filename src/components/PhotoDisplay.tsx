// Import necessary hooks and types
import { useState, useEffect, useCallback } from "react";
import { Photo } from "../data/photos";

// Define props for PhotoDisplay component
type PhotoDisplayProps = {
  category: string;
  photos: Photo[];
  onPhotoChange: (photo: Photo | null) => void;
  refreshKey: number;
  onClick: () => void;
};

export function PhotoDisplay({
  category,
  photos,
  onPhotoChange,
  refreshKey,
  onClick,
}: PhotoDisplayProps) {
  const [randomizedPhotos, setRandomizedPhotos] = useState<Photo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState("");

  // Function to shuffle and filter photos based on category
  const shufflePhotos = useCallback(() => {
    const filteredPhotos =
      category === "Zufällig"
        ? photos
        : photos.filter((photo) => photo.categories.includes(category));
    const shuffled = [...filteredPhotos].sort(() => Math.random() - 0.5);
    setRandomizedPhotos(shuffled);
    setCurrentIndex(0);
    setMessage("");
  }, [category, photos]);

  // Effect to reshuffle photos when category changes
  useEffect(() => {
    shufflePhotos();
  }, [shufflePhotos, category]);

  // Effect to update current photo and message
  useEffect(() => {
    if (randomizedPhotos.length > 0) {
      onPhotoChange(randomizedPhotos[currentIndex]);
      if (currentIndex >= randomizedPhotos.length - 1) {
        setMessage("Du hast alle Bilder in dieser Kategorie gesehen!");
      } else {
        setMessage("");
      }
    }
  }, [currentIndex, randomizedPhotos, onPhotoChange]);

  // Effect to advance to next photo when refreshKey changes
  useEffect(() => {
    if (randomizedPhotos.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % randomizedPhotos.length);
    }
  }, [refreshKey, randomizedPhotos.length]);

  if (randomizedPhotos.length === 0) return null;
  const currentPhoto = randomizedPhotos[currentIndex];

  // Render the current photo and message
  return (
    <div className="flex flex-col items-center">
      {message && (
        <p className="text-3xl mt-4 text-center text-green-500">{message}</p>
      )}
      <img
        src={currentPhoto.src}
        alt={currentPhoto.alt}
        className="max-w-full h-auto"
        onClick={onClick}
      />
    </div>
  );
}
