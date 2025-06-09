import React, { useState } from "react";
import "./Menu.css";

export default function MenuTabs() {
  const [option, setOption] = useState("dinner");

  return (
    <div className="menu-section">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
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
          <div className="menu-wrapper">
            <h2 style={{ textAlign: "center" }}>Lunch Menu</h2>
            <h2 style={{ textAlign: "center" }}>12-3pm</h2>
            <h2 style={{ textAlign: "center" }}>🌶️ Hot & Spicy</h2>

            <div className="menu-items-grid" style={{ marginTop: "20px" }}>
              {/* Left Column */}
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L1. Chicken Chow Mein</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L2. Shrimp Chow Mein</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L3. Moo Goo Gai Pan</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L4. Pepper Steak with Onion</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L5. Shrimp with Lobster Sauce</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>
                    L6. Roast Pork with Mixed Vegetables
                  </p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L7. Sweet & Sour Chicken or Pork</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L8. Chicken with Cashew Nuts</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L9. Beef with Broccoli</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L10. Shrimp with Mixed Vegetables</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L11. Chicken with Broccoli</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L12. Roast Pork Lo Mein</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L13. Chicken with Garlic Sauce 🌶️</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L14. Shrimp with Broccoli</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>
                    L15. Broccoli with Garlic Sauce 🌶️
                  </p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L16. Beef with Black Bean Sauce</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L17. Chicken with Curry Sauce 🌶️</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>

              {/* Right Column */}
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L18. Szechuan Chicken 🌶️</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>
                    L19. Chicken with Mixed Vegetables
                  </p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L20. Sesame Chicken</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>
                    L21. Shredded Beef with Garlic Sauce 🌶️
                  </p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L22. General Tso's Chicken 🌶️</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L23. Boneless Spare Ribs</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L24. Roast Pork with Broccoli</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L25. Mixed Vegetables</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L26. Shrimp with Garlic Sauce 🌶️</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L27. Hunan Beef 🌶️</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L28. Bourbon Chicken</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L29. Honey Chicken</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L30. Kung Pao Chicken 🌶️</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L31. Beef Lo Mein</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L32. Broccoli with Tofu</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L33. Chicken Lo Mein</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
              <div className="menu-item-box">
                <b>
                  <p style={{ margin: 0 }}>L34. Vegetable Lo Mein</p>
                </b>
                <p style={{ margin: 0 }}>$9.30</p>
              </div>
            </div>
          </div>
        )}
        {option === "dinner" && (
          <div className="menu-wrapper">
            <h2 style={{ textAlign: "center" }}>Dinner Menu</h2>
            <h2 style={{ textAlign: "center" }}>All Day</h2>
            <h2 style={{ textAlign: "center" }}>🌶️ Hot & Spicy</h2>

            <div className="menu-items-column" style={{ marginTop: "20px" }}>
              <h3 className="menu-section-title">American Special Dishes</h3>
              <div className="menu-items-grid">
                <div className="menu-item-box" style={{ width: "340px" }}>
                  <p style={{ margin: 0, paddingBottom: "10px" }}>
                    <b>1. Buffalo/BBQ/Honey Chicken Wings</b>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Plain</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Roast Pork Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$9.25</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Chicken Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$9.25</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>w/ French Fries</p>
                    <p style={{ margin: 0 }}>$9.25</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Beef Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Shrimp Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                </div>

                <div className="menu-item-box" style={{ width: "340px" }}>
                  <p style={{ margin: 0, paddingBottom: "10px" }}>
                    <b>2. Fried Chicken Wings</b>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Plain</p>
                    <p style={{ margin: 0 }}>$7.45</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Roast Pork Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Chicken Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>w/ French Fries</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Beef Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Shrimp Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                </div>

                <div className="menu-item-box" style={{ width: "340px" }}>
                  <p style={{ margin: 0, paddingBottom: "10px" }}>
                    <b>3. Fried Crab Stick (Imitation) | 5 </b>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Plain</p>
                    <p style={{ margin: 0 }}>$7.45</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Roast Pork Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Chicken Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>w/ French Fries</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Beef Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Shrimp Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                </div>

                <div className="menu-item-box" style={{ width: "340px" }}>
                  <p style={{ margin: 0, paddingBottom: "10px" }}>
                    <b>4. Fried Jumbo Shrimp | 5</b>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Plain</p>
                    <p style={{ margin: 0 }}>$7.45</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Roast Pork Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Chicken Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>w/ French Fries</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Beef Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Shrimp Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                </div>

                <div className="menu-item-box" style={{ width: "340px" }}>
                  <p style={{ margin: 0, paddingBottom: "10px" }}>
                    <b>5. Fried Baby Shrimp</b>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Roast Pork Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$7.45</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Chicken Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>w/ French Fries</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Beef Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Shrimp Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                </div>

                <div className="menu-item-box" style={{ width: "340px" }}>
                  <p style={{ margin: 0, paddingBottom: "10px" }}>
                    <b>6. Fried Scallops | 12</b>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Plain</p>
                    <p style={{ margin: 0 }}>$7.45</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Roast Pork Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Chicken Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>w/ French Fries</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Beef Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Shrimp Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                </div>

                <div className="menu-item-box" style={{ width: "340px" }}>
                  <p style={{ margin: 0, paddingBottom: "10px" }}>
                    <b>7. Chicken Teriyaki | 4</b>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Plain</p>
                    <p style={{ margin: 0 }}>$7.45</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Roast Pork Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Chicken Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>w/ French Fries</p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Beef Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Shrimp Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                </div>

                <div className="menu-item-box" style={{ width: "340px" }}>
                  <p style={{ margin: 0, paddingBottom: "10px" }}>
                    <b>8. Boneless Spare Ribs</b>
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Roast Pork Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Chicken Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>w/ French Fries</p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Beef Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.75</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>
                      w/ Shrimp Fried Rice
                    </p>
                    <p style={{ margin: 0 }}>$10.75</p>
                  </div>
                </div>
              </div>
              {/* appetizers */}
              <h3 className="menu-section-title">Appetizers</h3>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <b>9. Eggroll | 1pc</b>
                    <span>$1.95</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <b>9a. Spring Veg. Roll | 2pcs</b>
                    <span>$3.45</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <b>10. Shrimp Eggroll | 1</b>
                    <span>$2.25</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>11. Boneless Spare Ribs</b>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$9.25</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$14.55</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>12. BBQ Spare Ribs</b>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$9.25</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$15.50</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <b>13. Fried Wontons | 10pcs</b>
                    <span>$5.25</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <b>14. Fried or Steamed Dumplings</b>
                    <span>$7.65</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <b>15. Beef Teriyaki | 3pcs</b>
                    <span>$6.75</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <b>16. Chicken Teriyaki | 3pcs</b>
                    <span>6.25</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <b>17. Crab Rangoon | 10pcs</b>
                    <span>$7.50</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <b>18. Pu Pu Platter (for 2)</b>
                    <span>$14.95</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <b>18a. Chinese Donuts</b>
                    <span>$5.25</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>18b. Cold Sesame Noodles</b>
                    <span>$9.25</span>
                  </div>
                </div>
              </div>
              {/* Soup */}

              <h3 className="menu-section-title">Soup</h3>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>19. Wonton Soup</b>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$3.15</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$4.95</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>20. Wonton Egg Drop Soup</b>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$3.75</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$5.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>21. Egg Drop Soup</b>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$3.15</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$4.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>22. Chicken Rice or Noodle Soup</b>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$3.15</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$4.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>23. Hot & Sour Soup</b>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$3.95</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$6.25</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <b>24. House Special Soup</b>
                    <span>$7.25</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <b>25. Vegetable Soup</b>
                    <span>$5.50</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <b>26. Bean Curd w/ Mixed Veg. Soup</b>
                    <span>$6.25</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <b>27. Seafood Soup</b>
                    <span>$8.95</span>
                  </div>
                </div>
              </div>
              {/* Chow Mein or Chop Suey */}
              <h3>Chow Mein or Chop Suey</h3>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>28. Chicken Chow Mein</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.25</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$11.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>29. Roast Pork Chow Mein</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.25</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$11.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>30. Shrimp Chow Mein</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>31. Beef Chow Mein</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>32. Mixed Vegetable Chow Mein</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.25</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$11.45</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>33. Special Chow Mein</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>
              </div>
              {/* Fried Rice */}
              <h3>Fried Rice</h3>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>34. Plain Fried Rice</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$4.45</p>
                  </div>
                  <div className="box-content">
                    <p style={{ color: "grey", margin: 0 }}>Large</p>
                    <p style={{ margin: 0 }}>$7.00</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>35. Vegetable Fried Rice</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$5.85</p>
                  </div>
                  <div className="box-content">
                    <p style={{ color: "grey", margin: 0 }}>Large</p>
                    <p style={{ margin: 0 }}>$9.35</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>36. Roast Pork Fried Rice</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$6.25</p>
                  </div>
                  <div className="box-content">
                    <p style={{ color: "grey", margin: 0 }}>Large</p>
                    <p style={{ margin: 0 }}>$9.45</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>37. Chicken Fried Rice</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$6.25</p>
                  </div>
                  <div className="box-content">
                    <p style={{ color: "grey", margin: 0 }}>Large</p>
                    <p style={{ margin: 0 }}>$9.45</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>38. Beef Fried Rice</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$6.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ color: "grey", margin: 0 }}>Large</p>
                    <p style={{ margin: 0 }}>$9.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>39. Shrimp Fried Rice</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$6.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ color: "grey", margin: 0 }}>Large</p>
                    <p style={{ margin: 0 }}>$9.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>40. House Special Fried Rice</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.25</p>
                  </div>
                  <div className="box-content">
                    <p style={{ color: "grey", margin: 0 }}>Large</p>
                    <p style={{ margin: 0 }}>$10.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>41. Young Chow Fried Rice</b>
                    <span>$10.75</span>
                  </div>
                </div>
              </div>

              <h3>Lo Mein</h3>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>42. Vegetable Lo Mein</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$6.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ color: "grey", margin: 0 }}>Large</p>
                    <p style={{ margin: 0 }}>$10.50</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>43. Chicken Lo Mein</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$6.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ color: "grey", margin: 0 }}>Large</p>
                    <p style={{ margin: 0 }}>$10.50</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>44. Roast Pork Lo Mein</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$6.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ color: "grey", margin: 0 }}>Large</p>
                    <p style={{ margin: 0 }}>$10.50</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>45. Beef Lo Mein</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.50</p>
                  </div>
                  <div className="box-content">
                    <p style={{ color: "grey", margin: 0 }}>Large</p>
                    <p style={{ margin: 0 }}>$10.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>46. Shrimp Lo Mein</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.50</p>
                  </div>
                  <div className="box-content">
                    <p style={{ color: "grey", margin: 0 }}>Large</p>
                    <p style={{ margin: 0 }}>$10.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>47. House Special Lo Mein</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.50</p>
                  </div>
                  <div className="box-content">
                    <p style={{ color: "grey", margin: 0 }}>Large</p>
                    <p style={{ margin: 0 }}>$10.95</p>
                  </div>
                </div>
              </div>
              {/*  Mei Fun*/}
              <h3>Mei Fun</h3>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>48a. Any Style Mei Fun</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>
                      Choice of Chicken, Pork, Beef, or Shrimp
                    </p>
                    <p style={{ margin: 0 }}>$12.25</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>48b. Singapore Mei Fun</b>
                    <span>$12.95</span>
                  </div>
                </div>
              </div>
              {/* Egg Foo young */}
              <h3>Egg Foo Young | w/ White Rice</h3>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>49. Roast Pork Egg Foo Young</b>
                    <span>$11.25</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>50. Chicken Egg Foo Young</b>
                    <span>$11.25</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>51. Shrimp Egg Foo Young</b>
                    <span>$11.75</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>52. Vegetable Egg Foo Young</b>
                    <span>$11.25</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>53. Beef Egg Foo Young</b>
                    <span>$11.75</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>54. House Special Egg Foo Young</b>
                    <span>$11.75</span>
                  </div>
                </div>
              </div>
              {/* Pork */}
              <h3>Pork | w/ White Rice</h3>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>55. Roast Pork w/ Mixed Veg.</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>56. Roast Pork w/ Mushrooms</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>57. Roast Pork w/ Oyster Sauce</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>58. Roast Pork w/ Snow Peas</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>59. Roast Pork w/ Broccoli</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>60. Roast Pork w/ Cashew Nuts</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>
              </div>
              {/* Chicken */}
              <h3>Chicken | w/ White Rice</h3>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>61. Moo Goo Gai Pan</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>62. Chicken w/ Oyster Sauce</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>63. Chicken w/ Snow Peas</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>64. Chicken w/ Mushrooms</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>65. Chicken w/ Broccoli</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>66. Chicken w/ Curry Sauce</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>67. Chicken w/ Cashew Nuts</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>68. Chicken w/ Black Bean Sauce</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>69. Szechuan Chicken</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>70. Hunan Chicken</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>71. Chicken w/ Garlid Sauce</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>72. Kung Bo Chicken</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>73. Chicken w/ Mixed Vegetables</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>74. Boneless Chicken</b>
                    <span>$12.55</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>75. Lemon Chicken</b>
                    <span>$12.55</span>
                  </div>
                </div>
              </div>
              {/* Beef */}
              <h3>Beef</h3>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>76. Pepper Steak w/ Onion</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>77. Beef w/ Mushrooms</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>78. Beef w/ Oyster Sauce</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>79. Beef w/ Snow Peas</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>80. Beef w/ Broccoli</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>81. Beef w/ Curry Sauce</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>82. Beef w/ Mixed Vegetables</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>83. Szechuan Beef</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>84. Hunan Beef</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>85. Beef w/ Garlic Sauce</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>
              </div>
              {/* Seafood section */}
              <h3>Seafood | w/ White Rice</h3>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>86. Lobster Sauce</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$6.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$9.25</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>87. Shrimp w/ Lobster Sauce</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>88. Shrimp w/ Snow Peas</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>89. Shrimp w/ Mushrooms</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>90. Shrimp w/ Oyster Sauce</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>91. Shrimp w/ Broccoli</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>92. Diced Chicken & Shrimp</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>93. Shrimp w/ Almond Ding</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>94. Shrimp w/ Curry Sauce</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>95. Shrimp w/ Cashew Nuts</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>96. Shrimp w/ Mixed Vegetables</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>97. Shrimp w/ Black Bean Sauce</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>98. Szechuan Shrimp</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>99. Hunan Shrimp</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>100. Shrimp w/ Garlic Sauce</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>101. Hot & Spicy Shrimp</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>102. Kung Bo Shrimp</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>
              </div>
              {/* Sweet & Sour */}
              <h3>Sweet & Sour | w/ White Rice</h3>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>103. Sweet & Sour Pork</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.50</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.25</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>104. Sweet & Sour Chicken</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.50</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.25</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>105. Sweet & Sour Shrimp</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Small</p>
                    <p style={{ margin: 0 }}>$7.50</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.25</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div className="box-content"></div>
                  <b>106. Sweet & Sour Triple</b>
                  <span>$13.25</span>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
