import React from "react";

export default function Topbar() {
  const scrollToSection = (id) => {
    const button = document.getElementById(id);
    if (button) {
      button.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="top_tab"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100px",
        backgroundColor: "white",
        zIndex: 1000,
        borderBottom: "1px solid black",
        padding: "0 20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "40px",
      }}
    >
      {/* Title and Address*/}
      <div>
        <h1
          className="title"
          style={{
            fontSize: "2.5rem",
            color: "red",
            margin: 0,
            textShadow:
              "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
            fontFamily: "Georgia, serif",
          }}
        >
          New China
        </h1>
        <h2 style={{ margin: 0, fontFamily: "Georgia, serif" }}>
          3801 W Gandy Blvd E, Tampa, FL 33611
        </h2>
      </div>
      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <button className="buttons" onClick={() => scrollToSection("section1")}>
          About Us
        </button>
        <button className="buttons" onClick={() => scrollToSection("section2")}>
          Hours
        </button>
        <button className="buttons" onClick={() => scrollToSection("section3")}>
          Menu
        </button>
      </div>
      <div>
        <a href="https://www.ubereats.com/store/new-china-restaurant/Nmu4WvHJSPCWMtAVyY1HRw?diningMode=DELIVERY&mod=merchantUnavailable&modctx=%257B%2522storeUuid%2522%253A%2522366bb85a-f1c9-48f0-9632-d015c98d4747%2522%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjMxMTElMjBXJTIwQ2hlcm9rZWUlMjBBdmUlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjI2YjZiNDZhYS0xMzkyLTc1ZTktNTE5My1hNTc2ZTdjNjc5YmQlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIydWJlcl9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTI3Ljg4OTI0MSUyQyUyMmxvbmdpdHVkZSUyMiUzQS04Mi40OTQ4NzglN0Q%3D&ps=1">
          <button className="buttons">Order Online</button>
        </a>
      </div>
      <h1 style={{ color: "black", fontFamily: "Georgia, serif" }}>
        📞<a href="tel:8138376865">813-837-6865</a>
      </h1>
    </div>
  );
}
