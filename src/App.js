import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import BootcampJourneyPage from "./pages/BootcampJourneyPage";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";
import PortfolioPage from "./pages/PortfolioPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about-me" element={<AboutPage />} />
        <Route path="my-bootcamp-journey" element={<BootcampJourneyPage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
      </Route>
    </Routes>
  );
};

export default App;
