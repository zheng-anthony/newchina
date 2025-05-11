import React from "react";
import './App.css';
import logo from './Pictures/Inside New China.webp';

export default function App() {
  return (
    <>
      <div className="top_tab">
        <h1 className="title">New China</h1>
      </div>

    {/* <div>
      <img src={logo} alt="New China Logo" className="image" />    
      </div> */}

    

    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <h1>Phone Number</h1>
      <p>813-837-6865</p>
      <a
        href="https://www.ubereats.com/store/new-china/ZSgDp7c1SGGl6clZoEVTSw?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to UberEats!
      </a>
    </div>
    </>
  );
}
