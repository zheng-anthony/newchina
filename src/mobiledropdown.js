import React, { useState } from "react";
import "./Mobiledropdown.css";
import { Link } from "react-router-dom";

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
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <a
          href="https://www.ubereats.com/store/new-china/ZSgDp7c1SGGl6clZoEVTSw?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjMxMTElMjBXJTIwQ2hlcm9rZWUlMjBBdmUlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjI2YjZiNDZhYS0xMzkyLTc1ZTktNTE5My1hNTc2ZTdjNjc5YmQlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIydWJlcl9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTI3Ljg4OTI0MSUyQyUyMmxvbmdpdHVkZSUyMiUzQS04Mi40OTQ4NzglN0Q%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          UberEats
        </a>
        <a
          href="https://www.doordash.com/store/new-china-tampa-34703047/72017150/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJuZXcgY2hpbmEiLCJpdGVtX2lkcyI6W10sInNlYXJjaF90ZXJtIjoibmV3IGNoaW5hIiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxLDRdfQ==&pickup=false"
          target="_blank"
          rel="noopener noreferrer"
        >
          DoorDash
        </a>
        <a href="tel:8138376865">📞 813-837-6865</a>
      </div>
    </div>
  );
}
