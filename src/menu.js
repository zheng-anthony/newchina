import React, { useState } from "react";
import './Menu.css';

export default function MenuTabs() {
  const [option, setOption] = useState("dinner");

  return (
    <div className="menu-section">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop:"100px",
          marginBottom: "10px",
          paddingBottom: "100px",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>Our Menus</h1>

        <div style={{ display: "flex", gap: "20px" }}>
          <button className="buttons" onClick={() => setOption("lunch")}>
            Lunch Menu
          </button>
          <button className="buttons" onClick={() => setOption("dinner")}>
            Dinner Menu
          </button>
        </div>
        {option === "lunch" && (
        <div style={{width: "100%", textAlign:"center"}}>
          <h2 className="menu-title">Lunch Specials</h2>
          <h1 className="menu-title">$9.30</h1>
          <h1 className="menu-title">🌶️ Hot & Spicy</h1>

          <div className="menu-lunch-grid">
            <div>
              <p>L1. Chicken Chow Mein</p>
              <p>L2. Shrimp Chow Mein</p>
              <p>L3. Moo Goo Gai Pan</p>
              <p>L4. Pepper Steak with Onion</p>
              <p>L5. Shrimp with Lobster Sauce</p>
              <p>L6. Roast Pork with Mixed Vegetables</p>
              <p>L7. Sweet & Sour Chicken or Pork</p>
              <p>L8. Chicken with Cashew Nuts</p>
              <p>L9. Beef with Broccoli</p>
              <p>L10. Shrimp with Mixed Vegetables</p>
              <p>L11. Chicken with Broccoli</p>
              <p>L12. Roast Pork Lo Mein</p>
              <p>L13. Chicken with Garlic Sauce 🌶️</p>
              <p>L14. Shrimp with Broccoli</p>
              <p>L15. Broccoli with Garlic Sauce 🌶️</p>
              <p>L16. Beef with Black Bean Sauce</p>
              <p>L17. Chicken with Curry Sauce 🌶️</p>
            </div>
            <div>
              <p>L18. Szechuan Chicken 🌶️</p>
              <p>L19. Chicken with Mixed Vegetables</p>
              <p>L20. Sesame Chicken</p>
              <p>L21. Shredded Beef with Garlic Sauce 🌶️</p>
              <p>L22. General Tso's Chicken 🌶️</p>
              <p>L23. Boneless Spare Ribs</p>
              <p>L24. Roast Pork with Broccoli</p>
              <p>L25. Mixed Vegetables</p>
              <p>L26. Shrimp with Garlic Sauce 🌶️</p>
              <p>L27. Hunan Beef 🌶️</p>
              <p>L28. Bourbon Chicken</p>
              <p>L29. Honey Chicken</p>
              <p>L30. Kung Pao Chicken 🌶️</p>
              <p>L31. Beef Lo Mein</p>
              <p>L32. Broccoli with Tofu</p>
              <p>L33. Chicken Lo Mein</p>
              <p>L34. Vegetable Lo Mein</p>
            </div>
          </div>
        </div>

        )}
        {option === "dinner" && (
          <div className="menu-wrapper">
            <h2 className="override-center">Dinner Menu</h2>
            <h2 className="override-center">All Day</h2>
            <div
              style={{ gap: "80px", marginTop: "100px", fontSize: "1.5rem" }}
            >
              
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "80px",
                marginTop: "50px",
                textAlign: "left",
              }}
            