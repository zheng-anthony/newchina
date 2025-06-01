import React, { useState } from 'react';

export default function MenuTabs() {
  const [option, setOption] = useState('lunch');

  return (
    <div style={{ fontFamily: 'Georgia, serif' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '30px',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Our Menus</h1>

        <div style={{ display: 'flex', gap: '20px' }}>
          <button className="topbar_button" onClick={() => setOption('lunch')}>
            Lunch Menu
          </button>
          <button className="topbar_button" onClick={() => setOption('dinner')}>
            Dinner Menu
          </button>
        </div>
        {option === "lunch" && (
          <>
          <h2 style={{ fontSize: "1.5rem"}}>Lunch Specials</h2>
          <b>All Served with Pork Fried Rice & Soda</b>
          <b>11:00am - 3:00pm</b>
          <h2 style={{ fontSize: "2rem"}}>$9.30</h2>
          <p>🌶️ Hot & Spicy</p>
          <div style={{display:"flex", justifyContent:"center", gap:"150px", marginTop:"20px",textAlign:"left", }}>
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
              <p>L10. Shrmp with Mixed Vegetables</p>
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
          </>
        )}
        {option === "dinner" && (
          <>
          <h2 style={{fontSize:"1.5rem"}}>
            Dinner Menu
            </h2>
            <b>All Day</b>
            <div style={{gap:"80px", marginTop:"100px", fontSize:"1.5rem"}}>
            <b>American Special Dishes</b>
            </div>
            <div style={{display:"flex", justifyContent:"center", gap:"80px", marginTop:"50px",textAlign:"left", }}>
            <div><b>American Special Dishes</b>
            <p>1. Buffalo/BBQ/Honey Chicken Wings</p>
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
  <div style={{ display: "flex", marginTop: "20px", paddingBottom:"50px", gap:"100px" }}>
  <div>
    <b>Appetizer</b>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px", gap: "10px", marginTop: "10px" }}>
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
      <span>Sm. $9.25</span>
      <span>Lg. $14.55</span>

      <span>12. Bar-B-Q Spare Ribs</span>
      <span>Sm. $9.25</span>
      <span>Lg. $15.50</span>

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

      <span>19b. Cold Sesame Noodle</span>
      <span></span>
      <span>$9.25</span>
    </div>
  </div>
<div>
  <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px", gap: "10px", alignItems: "center" }}>
    <span style={{paddingRight:"150px"}}><b>Soups | with Crispy Noodles</b></span>
    <span><b>Small</b></span>
    <span><b>Large</b></span>

    <span>20. Wonton Soup</span>
    <span>$3.15</span>
    <span>$4.95</span>

    <span>21. Wonton Egg Drop Soup</span>
    <span>$3.75</span>
    <span>$5.25</span>

    <span>22. Egg Drop Soup</span>
    <span>$3.15</span>
    <span>4.95</span>

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
            </>

        )}
      </div>
      </div>
      
    )
  }