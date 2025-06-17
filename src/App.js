import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Topbar from "./topbar.js";
import Info from "./info.js";
import Menu from "./menu.js";
import ImageSlider from "./slider.js";
import Dropdown from "./mobiledropdown.js";
import Homepage from "./Homepage.js";

import menuback from "./Pictures/menuback.jpg";
import menuback2 from "./Pictures/menuback2.jpg";

export default function App() {
  return (
    <Router>
      import ScrollToTop from "./ScrollToTop";
      <Dropdown />
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/menu"
          element={
            <div
              className="section3-wrapper"
              style={{ backgroundImage: `url(${menuback2})` }}
            >
              <div className="section-content">
                <Menu />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
