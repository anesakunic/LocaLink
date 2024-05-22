import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReportPage from "./pages/ImagePage";
import StartApp from "./pages/StartApp";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AddImage from "./pages/AddImage"
import Location from "./pages/Location"
import Feed from "./pages/Feed"

import './index.css';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/addimage" element={<AddImage />} />
      <Route path="/location" element={<Location />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/application" element={<StartApp />} /
      >
    </Routes>
  );
}

export default App;
