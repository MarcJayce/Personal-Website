import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dock from "./Components/Dock";
import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import CursorLight from "./Components/CursorLight";
import "./App.css";

function App() {
  return (
    <Router>
      
        <CursorLight />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Dock />

    </Router>
  );
}

export default App;
