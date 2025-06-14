import React from "react";
import "./App.css";
import Topbar from "./topbar.js";
import Info from "./info.js";
import Menu from "./menu.js";
import ImageSlider from "./slider.js";
import redback1 from "./Pictures/redback1.jpg";
import menuback from "./Pictures/menuback.jpg";
import Dropdown from "./mobiledropdown.js";
import menuback2 from "./Pictures/menuback2.jpg";

export default function App() {
  return (
    <>
      <Dropdown />
      <Topbar />

      <>
        <div
          className="section2-wrapper"
          style={{ backgroundImage: `url(${menuback})` }}
        >
          <div
            id="section1"
            style={{ marginBottom: "100px", paddingTop: "100px" }}
          >
            <div className="first-container">
              <div
                style={{
                  maxWidth: "1000px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                <h1>About Us</h1>
                <p>
                  We are a family-owned New York-style Chinese takeout
                  restaurant in the heart of South Tampa, proudly serving our
                  community for over 20 years.
                </p>
              </div>
              <div className="slider-container">
                <ImageSlider />
              </div>
            </div>
          </div>
          <div id="section2" className="section-content">
            <Info />
          </div>
        </div>
        <div
          className="section3-wrapper"
          style={{ backgroundImage: `url(${menuback2})` }}
        >
          <div id="section3" className="section-content">
            <Menu />
          </div>
        </div>
      </>
    </>
  );
}
