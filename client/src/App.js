import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReportPage from "./pages/ImagePage";
import StartApp from "./pages/StartApp";

import './index.css';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="/application" element={<StartApp />} />
    </Routes>
  );
}

export default App;
