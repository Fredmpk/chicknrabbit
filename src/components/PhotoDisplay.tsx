import { useState, useEffect, useCallback } from "react";
import { Photo } from "../data/photos";

type PhotoDisplayProps = {
  category: string;
  photos: Photo[];
  onPhotoChange: (photo: Photo | null) => void;
  refreshKey: number;
};

export function PhotoDisplay({
  category,
  photos,
  onPhotoChange,
  refreshKey,
}: PhotoDisplayProps) {
  const [randomizedPhotos, setRandomizedPhotos] = useState<Photo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState("");

  const shufflePhotos = useCallback(() => {
    const filteredPhotos =
      category === "Zufällig"
        ? photos
        : photos.filter((photo) => photo.category === category);
    const shuffled = [...filteredPhotos].sort(() => Math.random() - 0.5);
    setRandomizedPhotos(shuffled);
    setCurrentIndex(0);
    setMessage("");
  }, [category, photos]);

  useEffect(() => {
    shufflePhotos();
  }, [shufflePhotos, category]); // Only reshuffle when category changes

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

  useEffect(() => {
    // Advance to next photo when refreshKey changes
    if (randomizedPhotos.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % randomizedPhotos.length);
    }
  }, [refreshKey, randomizedPhotos.length]);

  if (randomizedPhotos.length === 0) return null;

  const currentPhoto = randomizedPhotos[currentIndex];

  return (
    <div className="flex flex-col items-center">
      <img
        src={currentPhoto.src}
        alt={currentPhoto.alt}
        className="max-w-full h-auto"
      />
      {message && <p className="mt-4 text-center text-green-500">{message}</p>}
    </div>
  );
}
