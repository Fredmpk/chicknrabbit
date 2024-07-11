import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./components/StartPage";
import PhotoPage from "./components/PhotoPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/photo/:category" element={<PhotoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
