import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Menu from "./pages/Menu";
import HomePage from "./pages/HomePage";
import DriftPage from "./pages/DriftPage";
import TimeAttackPage from "./pages/TimeAttackPage";
import ForzaPage from "./pages/ForzaPage";

const App: React.FC = () => {
  return (
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
