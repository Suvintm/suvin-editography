import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AutoSubtitle from "./pages/AutoSubtitle";
import AutoSubtitleStudio from "./pages/AutoSubtitleStudio";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tools" element={<Tools />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="/auto-subtitle" element={<AutoSubtitle />} />
        <Route path="/subtitle-studio" element={<AutoSubtitleStudio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
