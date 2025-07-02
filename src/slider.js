import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import pic1 from "./Pictures/p1.jpg";
import pic2 from "./Pictures/p2.jpg";
import pic3 from "./Pictures/p3.jpg";
import pic4 from "./Pictures/p4.jpg";
import pic5 from "./Pictures/p5.jpg";
import "./slider-animation.css";

export default function ImageSlider() {
  const images = [pic1, pic2, pic3, pic4, pic5];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  return (
    <div style={{ textAlign: "center" }}>
      <div className="slider-image-wrapper">
        <img
          key={index}
          className={`slide-animation-${direction}`}
          style={{
            width: "900px",
            height: "400px",
            objectFit: "contain",
            borderRadius: "10px",
          }}
          src={images[index]}
          alt={`Image ${index + 1}`}
        />
      </div>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <button
          className="slider-arrow"
          onClick={() => {
            if (index === 0) {
              setDirection("left");
              setIndex(images.length - 1);
            } else {
              setDirection("left");
              setIndex(index - 1);
            }
          }}
        >
          <ArrowBigLeft />
        </button>
        <button
          className="slider-arrow"
          onClick={() => {
            if (index === images.length - 1) {
              setDirection("right");
              setIndex(0);
            } else if (index < images.length - 1) {
              setDirection("right");
              setIndex(index + 1);
            }
          }}
        >
          <ArrowBigRight />
        </button>
      </div>
    </div>
  );
}
