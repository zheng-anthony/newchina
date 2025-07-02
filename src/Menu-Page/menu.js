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
        <div className="menu-header-container">
          <h1>Our Menus</h1>
          <div className="menu-buttons">
            <button
              onClick={() => setOption("lunch")}
              className={option === "lunch" ? "selected" : ""}
            >
              Lunch Menu
            </button>
            <button
              onClick={() => setOption("dinner")}
              className={option === "dinner" ? "selected" : ""}
            >
              Dinner Menu
            </button>
          </div>
        </div>
        {/* lunch section */}
        {option === "lunch" && (
          <div className="menu-wrapper">
            <div className="menu-time-container">
              <h2 style={{ textAlign: "center", margin: 0 }}>
                Lunch Specials | Only from 12-3pm
              </h2>
            </div>

            <div className="menu-items-grid" style={{ marginTop: "20px" }}>
              {/* Left Column */}
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L1. Chicken Chow Mein</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L2. Shrimp Chow Mein</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L3. Moo Goo Gai Pan</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L4. Pepper Steak with Onion</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L5. Shrimp with Lobster Sauce</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L6. Roast Pork with Mixed Vegetables</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L7. Sweet & Sour Chicken or Pork</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L8. Chicken with Cashew Nuts</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L9. Beef with Broccoli</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L10. Shrimp with Mixed Vegetables</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L11. Chicken with Broccoli</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L12. Roast Pork Lo Mein</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L13. Chicken with Garlic Sauce 🌶️</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L14. Shrimp with Broccoli</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L15. Broccoli with Garlic Sauce 🌶️</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L16. Beef with Black Bean Sauce</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L17. Chicken with Curry Sauce 🌶️</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L18. Szechuan Chicken 🌶️</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L19. Chicken with Mixed Vegetables</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L20. Sesame Chicken</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L21. Shredded Beef with Garlic Sauce 🌶️</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L22. General Tso's Chicken 🌶️</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L23. Boneless Spare Ribs</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L24. Roast Pork with Broccoli</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L25. Mixed Vegetables</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L26. Shrimp with Garlic Sauce 🌶️</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L27. Hunan Beef 🌶️</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L28. Bourbon Chicken</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L29. Honey Chicken</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L30. Kung Pao Chicken 🌶️</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L31. Beef Lo Mein</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L32. Broccoli with Tofu</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L33. Chicken Lo Mein</b>
                  <span>$9.30</span>
                </div>
              </div>
              <div className="menu-item-box">
                <div className="box-content">
                  <b>L34. Vegetable Lo Mein</b>
                  <span>$9.30</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {option === "dinner" && (
          <div className="menu-wrapper">
            <div className="menu-time-container">
              <h2 style={{ textAlign: "center", margin: 0 }}>
                Dinner Menu | Available All Day
              </h2>
            </div>

            <div className="menu-items-column" style={{ marginTop: "20px" }}>
              <h2 className="menu-section-title">American Special Dishes</h2>
              <div className="menu-items-grid">
                <div className="menu-item-box" style={{ width: "310px" }}>
                  <p style={{ margin: 0, paddingBottom: "10px" }}>
                    <b>1. Buffalo/BBQ/Honey Chicken Wings 🌶️</b>
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

                <div className="menu-item-box" style={{ width: "310px" }}>
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

                <div className="menu-item-box" style={{ width: "310px" }}>
                  <p style={{ margin: 0, paddingBottom: "10px" }}>
                    <b>3. Fried Crab Stick (Imitation) | 5pcs </b>
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

                <div className="menu-item-box" style={{ width: "310px" }}>
                  <p style={{ margin: 0, paddingBottom: "10px" }}>
                    <b>4. Fried Jumbo Shrimp | 5pcs</b>
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

                <div className="menu-item-box" style={{ width: "310px" }}>
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

                <div className="menu-item-box" style={{ width: "310px" }}>
                  <p style={{ margin: 0, paddingBottom: "10px" }}>
                    <b>6. Fried Scallops | 12pcs</b>
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

                <div className="menu-item-box" style={{ width: "310px" }}>
                  <p style={{ margin: 0, paddingBottom: "10px" }}>
                    <b>7. Chicken Teriyaki | 4pcs</b>
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

                <div className="menu-item-box" style={{ width: "310px" }}>
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
              <h2 className="menu-section-title">Appetizers</h2>
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
                    <p
                      style={{
                        margin: 0,
                        color: "grey",
                        paddingTop: "10px",
                      }}
                    >
                      Small
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
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
                    <b>18b. Cold Sesame Noodles 🌶️</b>
                    <span>$9.25</span>
                  </div>
                </div>
              </div>
              {/* Soup */}
              <div style={{ margin: 0, padding: 0 }}>
                <h2 style={{ marginBottom: "0px", lineHeight: "1" }}>Soup</h2>
                <p
                  style={{ marginTop: "10px", color: "grey", lineHeight: "1" }}
                >
                  w/ Crispy Noodles
                </p>
              </div>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                  <b>23. Hot & Sour Soup 🌶️</b>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  >
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
              {/* Chow Mein or Chop Suey section*/}
              <div style={{ margin: 0, padding: 0 }}>
                <h2 style={{ marginBottom: "0px", lineHeight: "1" }}>
                  Chow Mein or Chop Suey
                </h2>
                <p
                  style={{ marginTop: "10px", color: "grey", lineHeight: "1" }}
                >
                  w/ White Rice & Fried Noodles
                </p>
              </div>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>28. Chicken Chow Mein</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>
              </div>
              {/* Fried Rice section*/}
              <h2>Fried Rice</h2>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>34. Plain Fried Rice</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
              {/* lo mein section */}
              <h2>Lo Mein</h2>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>42. Vegetable Lo Mein</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$7.50</p>
                  </div>
                  <div className="box-content">
                    <p style={{ color: "grey", margin: 0 }}>Large</p>
                    <p style={{ margin: 0 }}>$10.95</p>
                  </div>
                </div>
              </div>
              {/*  Mei Fun section*/}
              <h2>Mei Fun</h2>
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
                    <b>48b. Singapore Mei Fun 🌶️</b>
                    <span>$12.95</span>
                  </div>
                </div>
              </div>
              {/* Egg Foo young section */}
              <div style={{ margin: 0, padding: 0 }}>
                <h2 style={{ marginBottom: "0px", lineHeight: "1" }}>
                  Egg Foo Young
                </h2>
                <p
                  style={{ marginTop: "10px", color: "grey", lineHeight: "1" }}
                >
                  w/ White Rice
                </p>
              </div>

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
              {/* Pork section*/}
              <div style={{ margin: 0, padding: 0 }}>
                <h2 style={{ marginBottom: "0px", lineHeight: "1" }}>Pork</h2>
                <p
                  style={{ marginTop: "10px", color: "grey", lineHeight: "1" }}
                >
                  w/ White Rice
                </p>
              </div>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>55. Roast Pork w/ Mixed Veg.</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>
              </div>
              {/* Chicken section*/}
              <div style={{ margin: 0, padding: 0 }}>
                <h2 style={{ marginBottom: "0px", lineHeight: "1" }}>
                  Chicken
                </h2>
                <p
                  style={{ marginTop: "10px", color: "grey", lineHeight: "1" }}
                >
                  w/ White Rice
                </p>
              </div>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>61. Moo Goo Gai Pan</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>66. Chicken w/ Curry Sauce 🌶️</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>69. Szechuan Chicken 🌶️</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>70. Hunan Chicken 🌶️</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>71. Chicken w/ Garlid Sauce 🌶️</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$7.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.55</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>72. Kung Pao Chicken 🌶️</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
              {/* Beef section*/}
              <div style={{ margin: 0, padding: 0 }}>
                <h2 style={{ marginBottom: "0px", lineHeight: "1" }}>Beef</h2>
                <p
                  style={{ marginTop: "10px", color: "grey", lineHeight: "1" }}
                >
                  w/ White Rice
                </p>
              </div>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>76. Pepper Steak w/ Onion</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>81. Beef w/ Curry Sauce 🌶️</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>83. Szechuan Beef 🌶️</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>84. Hunan Beef 🌶️</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>85. Beef w/ Garlic Sauce 🌶️</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$8.75</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$12.95</p>
                  </div>
                </div>
              </div>
              {/* Seafood section */}
              <div style={{ margin: 0, padding: 0 }}>
                <h2 style={{ marginBottom: "0px", lineHeight: "1" }}>
                  Seafood
                </h2>
                <p
                  style={{ marginTop: "10px", color: "grey", lineHeight: "1" }}
                >
                  w/ White Rice
                </p>
              </div>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>86. Lobster Sauce</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>94. Shrimp w/ Curry Sauce 🌶️</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>98. Szechuan Shrimp 🌶️</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>99. Hunan Shrimp 🌶️</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>100. Shrimp w/ Garlic Sauce 🌶️</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>101. Hot & Spicy Shrimp 🌶️</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$8.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$13.25</p>
                  </div>
                </div>

                <div className="menu-item-box">
                  <b>102. Kung Pao Shrimp 🌶️</b>
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
              {/* Sweet & Sour section*/}
              <div style={{ margin: 0, padding: 0 }}>
                <h2 style={{ marginBottom: "0px", lineHeight: "1" }}>
                  Sweet & Sour
                </h2>
                <p
                  style={{ marginTop: "10px", color: "grey", lineHeight: "1" }}
                >
                  w/ Sweet & Sour Sauce & White Rice
                </p>
              </div>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>103. Sweet & Sour Pork</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
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
                  <div className="box-content">
                    <b>106. Sweet & Sour Triple</b>
                    <span>$13.25</span>
                  </div>
                </div>
              </div>
              {/* vegetables Section */}
              <div style={{ margin: 0, padding: 0 }}>
                <h2 style={{ marginBottom: "0px", lineHeight: "1" }}>
                  Vegetables
                </h2>
                <p
                  style={{ marginTop: "10px", color: "grey", lineHeight: "1" }}
                >
                  w/ White Rice
                </p>
              </div>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <b>107. Mixed Chinese Vegetables</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$6.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$11.25</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <b>108. Broccoli w/ Garlic Sauce 🌶️</b>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey", paddingTop: "10px" }}>
                      Small
                    </p>
                    <p style={{ margin: 0 }}>$6.95</p>
                  </div>
                  <div className="box-content">
                    <p style={{ margin: 0, color: "grey" }}>Large</p>
                    <p style={{ margin: 0 }}>$11.25</p>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>109. Ma Po Tofu w/ Pork 🌶️</b>
                    <span>$11.95</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>110. Home Style Bean Curd</b>
                    <span>$11.95</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>110a. General Tso's Bean Curd 🌶️</b>
                    <span>$11.95</span>
                  </div>
                </div>
              </div>
              {/* Special Diet Menu section*/}
              <div style={{ margin: 0, padding: 0 }}>
                <h2 style={{ marginBottom: "0px", lineHeight: "1" }}>
                  Special Diet Menu
                </h2>
                <p
                  style={{ marginTop: "10px", color: "grey", lineHeight: "1" }}
                >
                  w/ White Rice & Brown Sauce on the Side
                </p>
              </div>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>111. Steamed Mixed Vegetables</b>
                    <span>$10.99</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>112. Steamed Broccoli</b>
                    <span>$10.99</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>113. Steamed Chicken w/ Broccoli</b>
                    <span>$12.55</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>114. Chicken w/ Mixed Vegetables</b>
                    <span>$12.55</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>115. Steamed Chrimp w/ Broccoli</b>
                    <span>$13.25</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>116. Steamed Shrimp & Chicken w/ Mixed Vegetables</b>
                    <span>$13.25</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>117. Steamed Beef w/ Broccoli</b>
                    <span>$13.25</span>
                  </div>
                </div>
              </div>
              {/* Chef Specialty section */}
              <div style={{ margin: 0, padding: 0 }}>
                <h2 style={{ marginBottom: "0px", lineHeight: "1" }}>
                  Chef's Specialties
                </h2>
                <p
                  style={{ marginTop: "10px", color: "grey", lineHeight: "1" }}
                >
                  w/ White Rice
                </p>
              </div>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>S1. Seafood Delight</b>
                    <span>$15.25</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>S2. Dragon & Pheonix</b>
                    <span>$15.25</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>S3. Happy Family</b>
                    <span>$15.25</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>S4. Four Seasons</b>
                    <span>$15.25</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>S5. Scallops w/ Beef</b>
                    <span>$15.25</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>S6. Sliced Shrimp Versus Pork Hunan Style 🌶️</b>
                    <span>$15.25</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>S7. General Tso's Chicken 🌶️</b>
                    <span>$12.95</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>S8. Orange Chicken 🌶️</b>
                    <span>$12.95</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>S9. Sesame Chicken</b>
                    <span>$12.95</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>S10. Mongolian Beef 🌶️</b>
                    <span>$13.25</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>S11. Honey Chicken</b>
                    <span>$12.95</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>S12. General Tso's Shrimp 🌶️</b>
                    <span>$13.95</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>S13. Orange Beef 🌶️</b>
                    <span>$13.95</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>S14. Bourbon Chicken</b>
                    <span>$13.95</span>
                  </div>
                </div>
              </div>
              {/* Combination section */}
              <div style={{ margin: 0, padding: 0 }}>
                <h2 style={{ marginBottom: "0px", lineHeight: "1" }}>
                  Combination Platters
                </h2>
                <p
                  style={{ marginTop: "10px", color: "grey", lineHeight: "1" }}
                >
                  w/ a Pork Eggroll & Pork Fried Rice
                </p>
              </div>
              <div className="menu-items-grid">
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C1. Chicken Chow Mein</b>
                    <span>$11.16</span>
                  </div>
                </div>
                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C2. Shrimp Chow Mein</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C3. Roast Pork or Chicken Lo Mein</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C4. Sweet & Sour Chicken or Pork</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C5. Roast Pork or Chicken Egg Foo Young</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C6. Moo Goo Gai Pan</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C7. Chicken w/ Broccoli</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C8. Beef w/ Broccoli</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C9. Pepper Steak w/ Onion</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C10. Chicken w/ Cashew Nuts</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C11. Boneless Spare Ribs</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C12. Shrimp w/ Lobster Sauce</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C13. Beef w/ Mixed Vegetables</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C14. Chicken w/ Garlic Sauce 🌶️</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C15. General Tso's Chicken 🌶️</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C16. Hunan Beef 🌶️</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C17. Szechuan Beef 🌶️</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C18. Shrimp w/ Mixed Vegetables</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C19. Shrimp w/ Broccoli</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C20. Roast Pork w/ Broccoli</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C21. Roast Pork or Chicken w/ Mixed Vegetables</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C22. BBQ Spare Ribs</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C23. Shrimp w/ Garlic Sauce 🌶️</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C24. Sesame Chicken</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C25. Mongolian Beef 🌶️</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C26. Kung Pao Chicken 🌶️</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C27. Triple Crown</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C28. Bourbon Chicken</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C29. Honey Chicken</b>
                    <span>$11.16</span>
                  </div>
                </div>

                <div className="menu-item-box">
                  <div className="box-content">
                    <b>C30. Orange Chicken 🌶️</b>
                    <span>$11.16</span>
                  </div>
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
