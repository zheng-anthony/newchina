import React from "react";
import Map from "./map.js";
import Hours from "./hours.js";
import "./Info.css";

export default function Info() {
  return (
    <div className="info-wrapper" id="section2">
      <h1 className="info-title">Open Hours</h1>
      <div className="info-flex">
        <div className="info-hours">
          <Hours />
        </div>
        <div className="info-map">
          <Map />
        </div>
      </div>
    </div>
  );
}
