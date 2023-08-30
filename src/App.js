import React from "react";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projectDetails" element={<ProjectDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
