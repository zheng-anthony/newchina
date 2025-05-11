import React from 'react';

export default function Topbar() {
  const scrollToSection = (id) => {
    const button = document.getElementById(id);
    if (button) {
      button.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="top_tab" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100px',
      backgroundColor: 'white',
      zIndex: 1000,
      borderBottom: '1px solid black',
      padding: '0 20px',
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '40px'
    }}>
      {/* Title and Address*/}
      <div>
        <h1 className="title" style={{
          fontSize: '2.5rem',
          color: 'red',
          margin: 0,
          textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'
        }}>New China</h1>
        <h2 style={{ margin: 0 }}>3801 W Gandy Blvd E, Tampa, FL 33611</h2>
      </div>
      {/* Buttons */}
      <div style={{display: 'flex', gap: '20px'}}>
        <button onClick={() => scrollToSection('section1')}>About Us</button>
        <button onClick={() => scrollToSection('section2')}>Info</button>
        <button onClick={() => scrollToSection('section3')}>Menu</button>
      </div>
            <div>
        <h1>Contact us at: 813-837-6865</h1>
      </div>
    </div>
  );
}
