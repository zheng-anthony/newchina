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

      <div
        className="top_buttons"
        style={{ display: "flex", alignItems: "center", flexGrow: 1 }}
      >
        <button onClick={() => scrollToSection("section1")}>About Us</button>
        <button onClick={() => scrollToSection("section2")}>Hours</button>
        <button onClick={() => scrollToSection("section3")}>Menu</button>
        <div style={{ display: "flex", gap: "1.5rem", marginLeft: "auto" }}>
          <a href="https://www.ubereats.com/store/new-china-restaurant/Nmu4WvHJSPCWMtAVyY1HRw">
            <button>UberEats</button>
          </a>
          <a href="https://www.doordash.com/store/new-china-tampa-34703047/72017150/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJuZXcgY2hpbmEiLCJpdGVtX2lkcyI6W10sInNlYXJjaF90ZXJtIjoibmV3IGNoaW5hIiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxLDRdfQ==&pickup=false">
            <button>DoorDash</button>
          </a>
        </div>
      </div>

      <div
        style={{
          fontSize: "1.5rem",
          fontFamily: "Georgia, serif",
          color: "black",
          whiteSpace: "nowrap",
        }}
      >
        📞{" "}
        <a
          href="tel:8138376865"
          style={{ color: "black", textDecoration: "none" }}
        >
          813-837-6865
        </a>
      </div>
    </div>
  );
}
