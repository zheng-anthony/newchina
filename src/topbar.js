import React from "react";
import "./Topbar.css";

export default function Topbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="top_tab">
      <div>
        <h1 className="top_title">New China</h1>
        <h2 className="top_address">3801 W Gandy Blvd E, Tampa, FL 33611</h2>
      </div>

      {/* Buttons */}
      <div className="top_buttons">
        <button onClick={() => scrollToSection("section1")}>About Us</button>
        <button onClick={() => scrollToSection("section2")}>Hours</button>
        <button onClick={() => scrollToSection("section3")}>Menu</button>
        <a href="https://www.ubereats.com/store/new-china-restaurant/Nmu4WvHJSPCWMtAVyY1HRw">
          <button>Order Online</button>
        </a>
      </div>

      {/* Phone Number */}
      <div className="top_phone">
        📞 <a href="tel:8138376865">813-837-6865</a>
      </div>
    </div>
  );
}
