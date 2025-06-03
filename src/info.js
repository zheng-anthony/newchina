import React from "react";
import Map from "./map.js";
import Hours from "./hours.js";

export default function Info() {
  return (
    <div>
      <div
        id="section2"
        style={{
          height: "100vh",
          backgroundColor: "white",
          padding: "50px",
          paddingTop: "20px",
        }}
      >
        {/* title */}
        <h1
          style={{
            textAlign: "left",
            marginBottom: "30px",
            fontSize: "4rem",
            marginBottom: "20px",
            fontFamily: "Georgia, serif",
          }}
        >
          Hours
        </h1>

        {/* container */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* left side */}
          <div style={{ flex: 1 }}>
            <Hours />
          </div>

          {/* right side */}
          <div style={{ width: "50%" }}>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}
