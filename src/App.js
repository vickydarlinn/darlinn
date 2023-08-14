import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";
import PortfolioPage from "./pages/PortfolioPage";
import MiniProjectsPage from "./pages/MiniProjectsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="mini-projects" element={<MiniProjectsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
