import "../../App.css";
import Topbar from "../../components/Topbar/topbar.js";
import Info from "./info.js";
import menuback from "../../Pictures/menuback.jpg";
import ImageSlider from "../../components/Slider/slider.js";

export default function App() {
  return (
    <>
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
      </>
    </>
  );
}
