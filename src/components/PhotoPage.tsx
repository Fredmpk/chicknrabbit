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
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col p-4">
        <Button onClick={handleNewPhotoClick} className="mb-4">
          Neues Bild
        </Button>
        <Button onClick={handleDownload} className="mb-4">
          Download
        </Button>
        <Button onClick={() => navigate("/")} className="mb-4">
          Zurück
        </Button>
        <div className="flex-grow flex items-center justify-center">
          <PhotoDisplay
            key={refreshKey}
            category={category || ""}
            photos={photos}
            onPhotoChange={setCurrentPhoto}
          />
        </div>
      </div>
    </div>
  );
}
