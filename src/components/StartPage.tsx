// Import necessary components and hooks
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Button } from "./Button";

export function StartPage() {
  const navigate = useNavigate();

  // Define categories array
  const categories: string[] = [
    "baden",
    "wandern",
    "picknicken",
    "chillen",
    "spielen",
    "fahren",
    "lesen",
    "pflegen",
    "kochen",
    "dancen",
    "telefonieren",
    "Zufällig",
    "neu",
  ];

  // Function to handle category button clicks
  const handleCategoryClick = (category: string) => {
    navigate(`/photo/${category}`);
  };

  // Render the start page with a background image and category buttons
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
}
