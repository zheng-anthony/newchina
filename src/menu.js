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
          <>
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
            >
              <div className="menu-grid">
                <b>American Special Dishes</b>
                <p>1. Buffalo/BBQ/Honey Chicken Wings 🌶️</p>
                <p>2. Fried Chicken Wings</p>
                <p>3. Fried Imitation Crab Sticks | 5pcs</p>
                <p>4. Fried Jumbo Shrimp | 5pcs</p>
                <p>5. Fried Baby Shrimp</p>
                <p>6. Fried Scallops | 12pcs</p>
                <p>7. Chicken Teriyaki | 4pcs</p>
                <p>8. Boneless Spare Ribs</p>
              </div>

              <div>
                <b>Plain</b>
                <p>$7.95</p>
                <p>$7.45</p>
                <p>$7.45</p>
                <p>$7.45</p>
                <p>$7.45</p>
                <p>$7.45</p>
                <p>$7.45</p>
              </div>

              <div>
                <b>with Roast Pork/Chicken Fried Rice or French Fries</b>
                <p>$9.25</p>
                <p>$8.95</p>
                <p>$8.95</p>
                <p>$8.95</p>
                <p>$8.95</p>
                <p>$8.95</p>
                <p>$8.75</p>
                <p>$10.25</p>
              </div>

              <div>
                <b>with Beef Fried Rice</b>
                <p>$10.25</p>
                <p>$10.25</p>
                <p>$10.25</p>
                <p>$10.25</p>
                <p>$10.25</p>
                <p>$10.25</p>
                <p>$10.25</p>
                <p>$10.75</p>
              </div>

              <div>
                <b>with Shrimp Fried Rice</b>
                <p>$10.25</p>
                <p>$10.25</p>
                <p>$10.25</p>
                <p>$10.25</p>
                <p>$10.25</p>
                <p>$10.25</p>
                <p>$10.25</p>
                <p>$10.75</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                paddingBottom: "50px",
                gap: "100px",
              }}
            >
              {/* 1st row */}
              {/* appetizers */}
              <div>
                <b style={{fontSize: "1.5rem"}}>Appetizer</b>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "400px 80px 80px",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <span>9. Egg Roll | 1pc</span>
                  <span></span>
                  <span>$1.95</span>

                  <span>9a. Spring Vegetable Roll | 2pcs</span>
                  <span></span>
                  <span>$3.45</span>

                  <span>10. Shrimp Egg Roll | 1pc</span>
                  <span></span>
                  <span>$2.25</span>

                  <span>11. Boneless Spare Ribs</span>
                  <span><b>Sm.</b> $9.25</span>
                  <span><b>Lg.</b> $14.55</span>

                  <span>12. Bar-B-Q Spare Ribs</span>
                  <span><b>Sm.</b> $9.25</span>
                  <span><b>Lg.</b> $15.50</span>

                  <span>13. Fried Wontons | 10pcs | w/ Sauce</span>
                  <span></span>
                  <span>$5.25</span>

                  <span>15. Fried/Steamed Dumplings | 8pcs</span>
                  <span></span>
                  <span>$7.65</span>

                  <span>16. Beef Teriyaki | 3pcs</span>
                  <span></span>
                  <span>$6.75</span>

                  <span>17. Chicken Teriyaki | 3pcs</span>
                  <span></span>
                  <span>$6.25</span>

                  <span>18. Crab Rangoon | 10pcs</span>
                  <span></span>
                  <span>$7.50</span>

                  <span>19. Pu Pu Platter (for 2)</span>
                  <span></span>
                  <span>$14.95</span>

                  <span>19a. Chinese Donut</span>
                  <span></span>
                  <span>$5.25</span>

                  <span>19b. Cold Sesame Noodle 🌶️</span>
                  <span></span>
                  <span>$9.25</span>
                </div>
              </div>
              <div>
                {/* soups */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "400px 80px 80px",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <b style={{fontSize: "1.5rem"}}>Soups | with Crispy Noodles</b>
                  </span>
                  <span>
                    <b style={{fontSize: "1.5rem"}}>Small</b>
                  </span>
                  <span>
                    <b style={{fontSize: "1.5rem"}}>Large</b>
                  </span>

                  <span>20. Wonton Soup</span>
                  <span>$3.15</span>
                  <span>$4.95</span>

                  <span>21. Wonton Egg Drop Soup</span>
                  <span>$3.75</span>
                  <span>$5.25</span>

                  <span>22. Egg Drop Soup</span>
                  <span>$3.15</span>
                  <span>$4.95</span>

                  <span>23. Chicken Rice or Noodle Soup</span>
                  <span>$3.15</span>
                  <span>$4.95</span>

                  <span>24. Hot & Sour Soup 🌶️</span>
                  <span>$3.95</span>
                  <span>$6.25</span>

                  <span>25. House Special Soup</span>
                  <span></span>
                  <span>$7.25</span>

                  <span>26. Vegetable Soup</span>
                  <span></span>
                  <span>$5.50</span>

                  <span>27. Bean Curd with Mixed Vegetable Soup</span>
                  <span></span>
                  <span>$6.25</span>

                  <span>28. Seafood Soup</span>
                  <span></span>
                  <span>$8.95</span>
                </div>
              </div>
            </div>
            {/* 2nd row */}
            <div
              style={{
                display: "flex",
                gap: "100px",
                marginTop: "10px",
                paddingBottom: "50px",
                alignItems: "flex-start",
              }}
            >
              {/* Chow Mein or Chop Suey*/}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "400px 80px 80px",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <span>
                  <b style={{fontSize: "1.5rem"}}>Chow Mein or Chop Suey</b>
                </span>
                <span>
                  <b style={{fontSize: "1.5rem"}}>Small</b>
                </span>
                <span>
                  <b style={{fontSize: "1.5rem"}}>Large</b>
                </span>

                <span>29. Chicken Chow Mein</span>
                <span>$7.25</span>
                <span>$11.95</span>

                <span>30. Roast Pork Chow Mein</span>
                <span>$7.25</span>
                <span>$11.95</span>

                <span>31. Shrimp Chow Mein</span>
                <span>$7.95</span>
                <span>$12.95</span>

                <span>32. Beef Chow Mein</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>33. Mixed Vegetable Chow Mein</span>
                <span>$7.25</span>
                <span>$11.45</span>

                <span>34. Special Chow Mein</span>
                <span>$7.95</span>
                <span>$12.95</span>
              </div>
              {/* fried rice */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "400px 80px 80px",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>
                  <b style={{fontSize: "1.5rem"}}>Fried Rice</b>
                </span>
                <span>
                  <b style={{fontSize: "1.5rem"}}>Small</b>
                </span>
                <span>
                  <b style={{fontSize: "1.5rem"}}>Large</b>
                </span>

                <span>35. Plain Fried Rice</span>
                <span>$4.45</span>
                <span>$7.00</span>

                <span>36. Vegetable Fried Rice</span>
                <span>$5.85</span>
                <span>$9.35</span>

                <span>37. Roast Pork Fried Rice</span>
                <span>$6.25</span>
                <span>$9.45</span>

                <span>38. Chicken Fried Rice</span>
                <span>$6.25</span>
                <span>$9.45</span>

                <span>39. Beef Fried Rice</span>
                <span>$6.75</span>
                <span>$9.95</span>

                <span>40. Shrimp Fried Rice</span>
                <span>$6.75</span>
                <span>$9.95</span>

                <span>41. House Special Fried Rice</span>
                <span>$7.25</span>
                <span>$10.25</span>

                <span>42. Young Chow Fried Rice</span>
                <span></span>
                <span>$10.75 </span>
              </div>
            </div>
            {/* row 3 */}
            <div
              style={{
                display: "flex",
                gap: "100px",
                marginTop: "10px",
                paddingBottom: "50px",
                alignItems: "flex-start"
              }}
            >
              {/* lo mein */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "400px 80px 80px",
                  gap: "10px",
                  alignItems: "center",
                  minWidth: "300px",
                }}
              >
                <span>
                  <b style={{fontSize: "1.5rem"}}>Lo Mein</b>
                </span>
                <span>
                  <b style={{fontSize: "1.5rem"}}>Small</b>
                </span>
                <span>
                  <b style={{fontSize: "1.5rem"}}>Large</b>
                </span>

                <span>43. Vegetable Lo Mein</span>
                <span>$6.75</span>
                <span>$10.50</span>

                <span>44. Chicken Lo Mein</span>
                <span>$6.95</span>
                <span>$10.50</span>

                <span>45. Roast Pork Lo Mein</span>
                <span>$6.95</span>
                <span>$10.50</span>

                <span>46. Beef Lo Mein</span>
                <span>$7.50</span>
                <span>$10.95</span>

                <span>47. Shrimp Lo Mein</span>
                <span>$7.50</span>
                <span>$10.95</span>

                <span>48. House Special Lo Mein</span>
                <span>$7.50</span>
                <span>$10.95</span>
              </div>
              {/* mei fun */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "400px 80px 80px",
                  gap: "10px",
                  alignItems: "center",
                  minWidth: "300px",
                }}
              >
                <span>
                  <b style={{fontSize: "1.5rem"}}>Mei Fun</b>
                </span>
                <span></span>
                <span></span>

                <span>Any Style Mei Fun | Chicken, Pork, Beef, or Shrimp</span>
                <span></span>
                <span>$11.95</span>

                <span>Singapore Mei Fun 🌶️</span>
                <span></span>
                <span>$12.25</span>
              </div>
            </div>
            {/* row 3 */}
            <div
              style={{
                display: "flex",
                gap: "100px", // 
                marginTop: "10px",
                paddingBottom: "50px",
                alignItems: "flex-start"
              }}
            >
              {/* Egg Foo Young */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "400px 80px 80px",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <span><b style={{fontSize: "1.5rem"}}>Egg Foo Young</b></span>
                <span></span>
                <span></span>

                <span>49. Roast Pork Egg Foo Young</span>
                <span></span>
                <span>$11.25</span>

                <span>50. Chicken Egg Foo Young</span>
                <span></span>
                <span>$11.25</span>
                
                <span>51. Shrimp Egg Foo Young</span>
                <span></span>
                <span>$11.75</span>

                <span>52. Vegetable Egg Foo Young</span>
                <span></span>
                <span>$11.25</span>

                <span>53. Beef Egg Foo Young</span>
                <span></span>
                <span>$11.75</span>

                <span>54. House Special Egg Foo Young</span>
                <span></span>
                <span>$11.75</span>
              </div>

              {/* Pork */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "400px 80px 80px",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <span><b style={{fontSize: "1.5rem"}}>Pork</b></span>
                <span><b style={{fontSize: "1.5rem"}}>Small</b></span>
                <span><b style={{fontSize: "1.5rem"}}>Large</b></span>

                <span>55. Roast Pork with Mixed Vegetables</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>56. Roast Pork with Mushroom</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>57. Roast Pork with Oyster Sauce</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>58. Roast Pork with Snow Peas</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>59. Roast Pork with Broccoli</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>60. Roast Pork with Cashew Nuts</span>
                <span>$7.95</span>
                <span>$12.55</span>
              </div>
            </div>
            {/* Row 4 */}
                        <div
              style={{
                display: "flex",
                gap: "100px", // 
                marginTop: "10px",
                paddingBottom: "50px",
                alignItems: "flex-start"
              }}
            >
              {/* chicken */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "400px 80px 80px",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <span><b style={{fontSize: "1.5rem"}}>Chicken</b></span>
                <span><b style={{fontSize: "1.5rem"}}>Small</b></span>
                <span><b style={{fontSize: "1.5rem"}}>Large</b></span>

                <span>61. Moo Goo Gai Pan</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>62. Chicken with Oyster Sauce</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>63. Chicken with Snow Peas</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>64. Chicken with Mushroom</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>65. Chicken with Broccoli</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>66. Chicken with Curry Sauce 🌶️</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>67. Chicken with Cashew Nuts</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>68. Chicken with Black Bean Sauce</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>69. Szechuan Chicken 🌶️</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>70. Hunan Chicken 🌶️</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>71. Chicken with Garlic Sauce 🌶️</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>72. Kung Bo Chicken 🌶️</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>73. Chicken with Mixed Vegetables</span>
                <span>$7.95</span>
                <span>$12.55</span>

                <span>74. Boneless Chicken</span>
                <span></span>
                <span>$12.55</span>

                <span>75. Lemon Chicken</span>
                <span></span>
                <span>$12.55</span>
              </div>

              {/* beef */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "400px 80px 80px",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <span><b style={{fontSize: "1.5rem"}}>Beef</b></span>
                <span><b style={{fontSize: "1.5rem"}}>Small</b></span>
                <span><b style={{fontSize: "1.5rem"}}>Large</b></span>

                <span>76. Pepper Steak with Onion</span>
                <span>$8.75</span>
                <span>$12.95</span>

                <span>77. Beef with Mushrooms</span>
                <span>$8.75</span>
                <span>$12.95</span>

                <span>78. Beef with Oyster Sauce</span>
                <span>$8.75</span>
                <span>$12.95</span>

                <span>79. Beef with Snow Peas</span>
                <span>$8.75</span>
                <span>$12.95</span>

                <span>80. Beef with Broccoli</span>
                <span>$8.75</span>
                <span>$12.95</span>

                <span>81. Beef with Curry Sauce 🌶️</span>
                <span>$8.75</span>
                <span>$12.95</span>

                <span>82. Beef with Mixed Vegetables</span>
                <span>$8.75</span>
                <span>$12.95</span>

                <span>83. Szechuan Beef 🌶️</span>
                <span>$8.75</span>
                <span>$12.95</span>

                <span>84. Hunan Beef 🌶️</span>
                <span>$8.75</span>
                <span>$12.95</span>

                <span>85. Beef with Garlic Sauce 🌶️</span>
                <span>$8.75</span>
                <span>$12.95</span>

                <span style={{fontSize: "1.5rem", paddingTop:"50px"}}><b>Sweet & Sour</b></span>
                <span><b style={{fontSize: "1.5rem"}}>Small</b></span>
                <span><b style={{fontSize: "1.5rem"}}>Large</b></span>

                <span>103. Sweet & Sour Pork</span>
                <span>$7.50</span>
                <span>$12.25</span>

                <span>104. Sweet & Sour Chicken</span>
                <span>$7.50</span>
                <span>$12.25</span>

                <span>105. Sweet & Sour Shrimp</span>
                <span>$8.25</span>
                <span>$13.25</span>

                <span>106. Sweet & Sour Triple</span>
                <span></span>
                <span>$13.25</span>
              </div>
            </div>
            {/* row 5 */}
                        <div
              style={{
                display: "flex",
                gap: "100px", // 
                marginTop: "10px",
                paddingBottom: "50px",
                alignItems: "flex-start"
              }}
            >
              {/* Seafood */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "400px 80px 80px",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <span><b style={{fontSize: "1.5rem"}}>Seafood</b></span>
                <span><b style={{fontSize: "1.5rem"}}>Small</b></span>
                <span><b style={{fontSize: "1.5rem"}}>Large</b></span>

                <span>86. Lobster Sauce</span>
                <span>$6.95</span>
                <span>$9.25</span>

                  <span>87. Shrimp with Lobster Sauce</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span>88. Shrimp with Snow Peas</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span>89. Shrimp with Mushrooms</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span>90. Shrimp with Oyster Sauce</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span>91. Shrimp with Broccoli</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span>92. Diced Chicken & Shrimp</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span>93. Shrimp with Almond Ding</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span>94. Shrimp with Curry Sauce</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span>95. Shrimp with Cashew Nuts</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span>96. Shrimp with Mixed Vegetables</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span>97. Shrimp with Black Bean Sauce</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span>98. Szechuan Shrimp 🌶️</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span>99. Hunan Shrimp 🌶️</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span>100. Shrimp with Garlic Sauce 🌶️</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span>101. Hot & Spicy Shrimp 🌶️</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span>102. Kung Bo Shrimp 🌶️</span>
                <span>$8.95</span>
                <span>$13.25</span>

                <span style={{paddingTop:"50px", fontSize: "1.5rem"}}><b>Chef Specialties</b></span>
                <span><b></b></span>
                <span><b></b></span>

                <span>S1. Seafood Delight</span>
                <span></span>
                <span>$15.25</span>

                <span>S2. Dragon & Pheonix</span>
                <span></span>
                <span>$15.25</span>

                <span>S3. Happy Family</span>
                <span></span>
                <span>$15.25</span>

                <span>S4. Four Seaon</span>
                <span></span>
                <span>$15.25</span>

                <span>S5. Scallops with Beef</span>
                <span></span>
                <span>$15.25</span>

                <span>S6. Sliced Shrimp Versus Pork Hunan Style 🌶️</span>
                <span></span>
                <span>$15.25</span>

                <span>S7. General Tso's Chicken 🌶️</span>
                <span></span>
                <span>$12.95</span>

                <span>S8. Chicken with Orange Flavor 🌶️</span>
                <span></span>
                <span>$12.95</span>

                <span>S9. Sesame Chicken</span>
                <span></span>
                <span>$12.95</span>

                <span>S10. Mongolian Beef 🌶️</span>
                <span></span>
                <span>$13.25</span>

                <span>S11. Honey Chicken</span>
                <span></span>
                <span>$12.95</span>

                <span>S12. General Tso's Shrimp 🌶️</span>
                <span></span>
                <span>$13.95</span>

                <span>S13. Orange Beef 🌶️</span>
                <span></span>
                <span>$13.95</span>

                <span>S14. Bourbon Chicken</span>
                <span></span>
                <span>$13.95</span>

                <span style={{paddingTop:"50px", fontSize: "1.5rem"}}><b>Side Orders</b></span>
                <span></span>
                <span></span>

                <span>Extra Rice</span>
                <span><b>Sm.</b> $2.50</span>
                <span><b>Lg.</b> $4.25</span>  

                <span>Fortune Cookies | 5pcs</span>
                <span></span>
                <span>$0.75</span>

                <span>Crispy Noodles</span>
                <span></span>
                <span>$0.75</span>

                <span>Soda</span>
                <span></span>
                <span>$1.50</span>
                
                <span>French Fries</span>
                <span></span>
                <span>$5.75</span>

                <span>Homemade Iced Tea</span>
                <span></span>
                <span>$2.75</span>
              </div>

              {/* Sweet & sour */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "400px 80px 80px",
                  gap: "10px",
                  alignItems: "center",
                }}
              >


                <span style={{paddingTop:"50px", fontSize:"1.5rem"}}><b>Vegetables</b></span>
                <span><b style={{fontSize: "1.5rem"}}>Small</b></span>
                <span><b style={{fontSize: "1.5rem"}}>Large</b></span>

                <span>107. Mixed Chinese Vegetables</span>
                <span>$6.95</span>
                <span>$11.25</span>

                <span>108. Broccoli with Garlic Sauce 🌶️</span>
                <span>$6.95</span>
                <span>$11.25</span>

                <span>109. Ma Po Tofu with Pork 🌶️</span>
                <span></span>
                <span>$11.95</span>

                <span>110. Home Style Bean Curd</span>
                <span></span>
                <span>$11.95</span>

                <span>110a. General Tso's Bean curd 🌶️</span>
                <span></span>
                <span>$11.95</span>

                <span style={{paddingTop:"50px", fontSize:"1.5rem"}}><b>Special Diet Menu | White Rice & Brown Sauce on the Side</b></span>
                <span><b></b></span>
                <span><b></b></span>

                <span>111. Steamed Mixed Vegetables</span>
                <span></span>
                <span>$10.99</span>

                <span>112. Steamed Broccoli</span>
                <span></span>
                <span>$10.99</span>

                <span>113. Steamed Chicken with Broccoli</span>
                <span></span>
                <span>$12.55</span>

                <span>114. Steamed Chicken with Mixed Vegetables</span>
                <span></span>
                <span>$12.55</span>

                <span>115. Steamed Shrimp with Broccoli</span>
                <span></span>
                <span>$13.25</span>

                <span>116. Steamed Shrimp & Chicken with Mixed Vegetables</span>
                <span></span>
                <span>$13.25</span>

                <span>117. Steamed Beef with Broccoli</span>
                <span></span>
                <span>$13.25</span>  

                <span style={{fontSize: "1.5rem", paddingTop:"50px"}}><b>Combination</b></span>
                <span><b></b></span>
                <span><b></b></span>

                <span>C1. Chicken Chow Mein</span>
                <span></span>
                <span>$11.16</span>

                  <span>C2. Shrimp Chow Mein</span>
                <span></span>
                <span>$11.16</span>

                <span>C3. Roast Pork or Chicken Lo Mein</span>
                <span></span>
                <span>$11.16</span>

                <span>C4. Sweet & Sour Chicken or Pork</span>
                <span></span>
                <span>$11.16</span>

                <span>C5. Roast Pork or Chicken Egg Foo Young</span>
                <span></span>
                <span>$11.16</span>

                <span>C6. Moo Goo Gai Pan</span>
                <span></span>
                <span>$11.16</span>

                <span>C7. Chicken with Broccoli</span>
                <span></span>
                <span>$11.16</span>

                <span>C8. Beef with Broccoli</span>
                <span></span>
                <span>$11.16</span>

                <span>C9. Pepper Steak with Onion</span>
                <span></span>
                <span>$11.16</span>

                <span>C10. Chicken with Cashew Nuts</span>
                <span></span>
                <span>$11.16</span>

                <span>C11. Boneless Spare Ribs</span>
                <span></span>
                <span>$11.16</span>

                <span>C12. Shrimp with Lobster Sauce</span>
                <span></span>
                <span>$11.16</span>

                <span>C13. Beef with Mixed Vegetables</span>
                <span></span>
                <span>$11.16</span>

                <span>C14. Chicken with Garlic Sauce 🌶️</span>
                <span></span>
                <span>$11.16</span>

                <span>C15. General Tso's Chicken 🌶️</span>
                <span></span>
                <span>$11.16</span>

                <span>C16. Hunan Beef 🌶️</span>
                <span></span>
                <span>$11.16</span>

                <span>C17. Szechuan Beef 🌶️</span>
                <span></span>
                <span>$11.16</span>

                <span>C18. Shrimp with Mixed Vegetables</span>
                <span></span>
                <span>$11.16</span>

                <span>C19. Shrimp with Broccoli</span>
                <span></span>
                <span>$11.16</span>

                <span>C20. Roast Pork with Broccoli</span>
                <span></span>
                <span>$11.16</span>

                <span>C21. Roast Pork or Chicken with Mixed Vegetables</span>
                <span></span>
                <span>$11.16</span>

                <span>C22. Bar-B-Q Spare Ribs</span>
                <span></span>
                <span>$11.16</span>

                <span>C23. Shrimp with Garlic Sauce 🌶️</span>
                <span></span>
                <span>$11.16</span>

                <span>C24. Sesame Chicken</span>
                <span></span>
                <span>$11.16</span>

                <span>C25. Mongolian Beef 🌶️</span>
                <span></span>
                <span>$11.16</span>

                <span>C26. Kung Pao Chicken 🌶️</span>
                <span></span>
                <span>$11.16</span>

                <span>C27. Triple Crown</span>
                <span></span>
                <span>$11.16</span>

                <span>C28. Bourbon Chicken</span>
                <span></span>
                <span>$11.16</span>

                <span>C29. Honey Chicken</span>
                <span></span>
                <span>$11.16</span>

                <span>C30. Chicken with Orange Flavor 🌶️</span>
                <span></span>
                <span>$11.16</span>
              </div>
            </div>
                </div>
          </>
          
        )}
    </div>
    </div>
  );
}
