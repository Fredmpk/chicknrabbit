import { useParams, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { PhotoDisplay } from "./PhotoDisplay";
import { Photo, photos } from "../data/photos";
import { useState } from "react";
import { Button } from "./Button";

export function PhotoPage() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [refreshKey, setRefreshKey] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null);

  const handleNewPhotoClick = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  const handleDownload = () => {
    if (currentPhoto) {
      const numberFromSrc =
        currentPhoto.src.match(/\/img\/(\d+)\.jpg/)?.[1] || "";
      const altText = `${numberFromSrc} ${currentPhoto.alt}`;
      const link = document.createElement("a");
      link.href = currentPhoto.src;
      link.download = altText;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="container mx-auto px-4 bg-orange-200">
      <Header />
      <div className="flex justify-center m-4 space-x-4">
        <Button onClick={handleNewPhotoClick}>Neues Bild</Button>
        <Button onClick={handleDownload}>Download</Button>
        <Button onClick={() => navigate("/")}>Zurück</Button>
      </div>
      <PhotoDisplay
        category={category || "Zufällig"}
        photos={photos}
        onPhotoChange={setCurrentPhoto}
        refreshKey={refreshKey}
      />
    </div>
  );
}
