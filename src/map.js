import React from "react";
import "./Map.css";

export default function Map() {
  return (
    <div className="map-wrapper">
      <iframe
        title="New China Location"
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.2355145274486!2d-82.51199818494441!3d27.893243482710424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c3388b91f65f%3A0x75a78f77f14c39ea!2sNew%20China!5e0!3m2!1sen!2sus!4v1685470049147!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
