import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Topbar from "./components/Topbar/topbar.js";
import Menu from "./pages/menu/menu.js";
import Dropdown from "./components/Dropdown/mobiledropdown.js";
import Homepage from "./pages/homepage/Homepage.js";
import menuback2 from "./Pictures/menuback2.jpg";

export default function App() {
  return (
    <Router>
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
