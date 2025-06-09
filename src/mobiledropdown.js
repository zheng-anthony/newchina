import React, { useState } from "react";
import "./Mobiledropdown.css";

export default function MobileDropdown() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  return (
    <div className="mobile-dropdown">
      <div className="dropdown-bar">
        <h2 className="mobile-title">New China</h2>
        <button className="dropdown-toggle" onClick={toggle}>
          ☰
        </button>
      </div>
      <div className={`dropdown-content ${open ? "open" : ""}`}>
        <a href="#section1">About Us</a>
        <a href="#section2">Hours</a>
        <a href="#section3">Menu</a>
        <a
          href="https://www.ubereats.com/store/new-china-restaurant/Nmu4WvHJSPCWMtAVyY1HRw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order Online
        </a>
        <a href="tel:8138376865">📞 813-837-6865</a>
      </div>
    </div>
  );
}
