import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AddPlayer from "./pages/AddPlayer";
import Bracket from "./pages/Bracket";
import Matches from "./pages/Matches";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="content"></div>
        <Routes>
          <Route path="/" element={<AddPlayer />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/bracket" element={<Bracket />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
