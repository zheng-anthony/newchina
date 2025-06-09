import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import pic1 from "./Pictures/p1.jpg";
import pic2 from "./Pictures/p2.jpg";
import pic3 from "./Pictures/p3.jpg";
import pic4 from "./Pictures/p4.jpg";
import pic5 from "./Pictures/p5.jpg";

export default function ImageSlider() {
  const images = [pic1, pic2, pic3, pic4, pic5];
  const [index, setIndex] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{
          width: "900px",
          height: "400px",
          objectFit: "contain",
          borderRadius: "10px",
        }}
        src={images[index]}
        alt={`Image ${index + 1}`}
      />
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => {
            if (index === 0) setIndex(images.length - 1);
            else if (index > 0) setIndex(index - 1);
          }}
        >
          <ArrowBigLeft />
        </button>
        <button
          onClick={() => {
            if (index === images.length - 1) setIndex(0);
            else if (index < images.length - 1) setIndex(index + 1);
          }}
        >
          <ArrowBigRight />
        </button>
      </div>
    </div>
  );
}
