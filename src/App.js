import React from "react";
import "./App.css";
import Topbar from "./topbar.js";
import Info from "./info.js";
import Menu from "./menu.js";
import ImageSlider from "./slider.js"
import redback1 from "./Pictures/redback1.jpg"
import menuback from "./Pictures/menuback.jpg"

export default function App() {
  return (
    <>
      <Topbar />
      <>
        {/* Section1 */}
      <div 
      id="section1"
      style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <img
          src={redback1}
          style={{
            width: "100%",
            height: "auto", 
            display: "block",
            paddingTop:"25px"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            flexDirection:"column"
          }}
        >

            <h1 style={{fontSize:"2.5rem", color: "white", textAlign: "center", fontFamily: "Georgia, serif",}}>About Us</h1>
            <p style={{fontSize:"2.5rem", color: "white", textAlign: "center", fontFamily: "Georgia, serif", maxWidth:"1000px"}}>
              We are a family-owned New York-style Chinese takeout restaurant in
              the heart of South Tampa, proudly serving our community for over
              20 years.
            </p>
          {/* slider */}
          <div
            style={{
              maxWidth: "1000px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "10px",
              paddingTop:"50px",
              paddingBottom:"25px",
              textAlign: "center",
            }}
          ><ImageSlider/></div>
        </div>
      </div>
        {/* background for section2/3 */}
        <div style={{
            width: "100%",
            backgroundImage: `url(${menuback})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            padding: "60px ",
            boxSizing: "border-box",
          }}>
            {/* section2 */}
        <div id="section2">
          <div
            style={{
              maxWidth: "1500px",
              margin: "0 auto",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Info />
          </div>
        </div>
        {/* section3 */}
        <div id="section3">
          <div
            style={{
              maxWidth: "1500px",
              margin: "0 auto",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Menu />
          </div>
        </div>
          </div>
      </>
    </>
  );
}
