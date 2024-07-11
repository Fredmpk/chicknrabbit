import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";

const StartPage: React.FC = () => {
  const navigate = useNavigate();
  const categories: string[] = [
    "baden",
    "wandern",
    "picknicken",
    "chillen",
    "rennen",
    "spielen",
    "fahren",
    "Zufällig",
  ];

  const handleCategoryClick = (category: string) => {
    navigate(`/photo/${category}`);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: "url('/img/background.jpg')",
        backgroundPosition: "center top -20px",
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col p-4">
          <div className="mt-8 mb-auto">
            {" "}
            {/* This pushes the buttons up */}
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
