import "./Topbar.css";
import { Link } from "react-router-dom";
import favicon from "./Pictures/newchina-favicon.png";
import phone from "./Pictures/telephone.png";

export default function Topbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="top_tab">
      <Link to="/">
        <img width="125" height="125" src={favicon} />
      </Link>
      <div>
        <h1 className="top_title">New China</h1>
        <h2 className="top_address">3801 W Gandy Blvd E, Tampa, FL 33611</h2>
      </div>

      <div
        className="top_buttons"
        style={{ display: "flex", alignItems: "center", flexGrow: 1 }}
      >
        <Link to="./">
          <button>Home</button>
        </Link>
        <Link to="/menu">
          <button>Menu</button>
        </Link>
        <div style={{ display: "flex", gap: "1.5rem", marginLeft: "auto" }}>
          <a href="https://www.ubereats.com/store/new-china/ZSgDp7c1SGGl6clZoEVTSw?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjMxMTElMjBXJTIwQ2hlcm9rZWUlMjBBdmUlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjI2YjZiNDZhYS0xMzkyLTc1ZTktNTE5My1hNTc2ZTdjNjc5YmQlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIydWJlcl9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTI3Ljg4OTI0MSUyQyUyMmxvbmdpdHVkZSUyMiUzQS04Mi40OTQ4NzglN0Q%3D">
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
          fontFamily: "Arial, serif",
          color: "black",
          whiteSpace: "nowrap",
        }}
      >
        {" "}
        <a
          href="tel:8138376865"
          style={{ color: "black", textDecoration: "none", marginLeft: "30px" }}
        >
          <img
            style={{ marginRight: "10px" }}
            src={phone}
            height="20"
            width="20"
          />
          813-837-6865
        </a>
      </div>
    </div>
  );
}
