import React from "react";
import './App.css';
import pic from './Pictures/Inside New China.webp';
import Topbar from './topbar.js';
import Info from './info.js';
import Menu from './menu.js';

export default function App() {
  return (
    <>
      <Topbar />
      <> 
      {/* Section1 */}
      <div id="section1"style={{backgroundColor: 'white',padding: '50px',paddingTop: '50px',display: 'flex',justifyContent: 'space-between',alignItems: 'center'}}>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px',fontFamily: 'Georgia, serif'}}>About Us</h1>  
          <p style={{ fontSize: '1.5rem' , fontFamily: 'Georgia, serif'}}>
            We are a family-owned New York–style Chinese takeout restaurant in the heart of South Tampa, proudly serving our community for over 20 years.          
            </p>
        </div>
        <img 
          src={pic} 
          alt="Inside New China" 
          style={{ width: '50%' }}  
        />
      </div>
      {/* Section2 */}
      <div id="section2" style={{backgroundColor: 'white', padding: '50px', paddingTop: '100px', height: '500px'}}>
        <Info/>
      </div>
      <div id="section3" style={{backgroundColor: 'white', padding: '50px', paddingTop: '200px', height: '500px'}}>
        <Menu/>
      </div>
      </>
    </>
  );  
}
