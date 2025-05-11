import React from 'react';
import Map from './map.js';
import Hours from './hours.js'

export default function Info() {
  return (
    <div>
      <div
        id="section2"
        style={{
          height: '100vh',
          backgroundColor: 'white',
          padding: '50px',
          paddingTop: '20px',
        }}
      >
        {/* Title */}
        <h2 style={{ textAlign: 'left', marginBottom: '30px' }}>Info Section</h2>

        {/* Flex container for content */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Left side content */}
          <div style={{ flex: 1 }}>
            <h1>Phone Number</h1>
            <p>813-837-6865</p>
            <a
              href="https://www.ubereats.com/store/new-china/ZSgDp7c1SGGl6clZoEVTSw?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to UberEats!
            </a>
            <Hours/>
          </div>

          {/* Right side - Map */}
          <div style={{ width: '50%' }}>
            <Map />
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
      </div>
    </div>
  );
}
