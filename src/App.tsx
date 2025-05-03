import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dock from "./Components/Dock";
import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Dock />
      </div>
    </Router>
  );
}

export default App;
