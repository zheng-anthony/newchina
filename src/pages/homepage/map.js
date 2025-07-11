import React from "react";
import "./Map.css";

export default function Map() {
  return (
    <div className="map-wrapper">
      <iframe
        title="New China Location"
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.251712851384!2d-82.50940392400318!3d27.894247917222323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2dcc526bd440f%3A0x45388a9b768e6b7c!2s3801%20W%20Gandy%20Blvd%2C%20Tampa%2C%20FL%2033611!5e0!3m2!1sen!2sus!4v1749454571553!5m2!1sen!2sus"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
