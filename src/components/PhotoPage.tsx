import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import PhotoDisplay from "./PhotoDisplay";
import Button from "./Button";
import { photos } from "../data/photos";

const PhotoPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [refreshKey, setRefreshKey] = useState(0);

  const handleNewPhotoClick = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col p-4">
        <Button onClick={() => navigate("/")} className="mb-4">
          Zurück
        </Button>
        <Button onClick={handleNewPhotoClick} className="mb-4">
          Neues Bild
        </Button>
        <div className="flex-grow flex items-center justify-center">
          <PhotoDisplay
            key={refreshKey}
            category={category || ""}
            photos={photos}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
