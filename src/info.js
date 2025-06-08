import React from "react";
import Map from "./map.js";
import Hours from "./hours.js";

export default function Info() {
  return (
    <div>
      <div
        id="section2"
        style={{
          height: "75vh",
          padding: "50px",
          paddingTop: "20px",
        }}
      >
        {/* title */}
        <h1
          style={{
            textAlign: "left",
            marginTop:"225px",
            marginBottom: "30px",
            fontSize: "3rem",
            fontFamily: "Georgia, serif",
          }}
        >
          Open Hours
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
