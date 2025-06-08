import React, { useState } from 'react';
import './Mobiledropdown.css';

export default function MobileDropdown() {

    const[open, setOpen] = useState(false)
    
    function toggle(){
        setOpen(true)
    }

return (
  <>
    <button onClick={() => setOpen(!open)}>☰ Menu</button>
    {open && (
      <div className="dropdown-content">
        <a href="#section1">Section 1</a>
        <a href="#section2">Section 2</a>
        <a href="#section3">Section 3</a>
      </div>
    )}
  </>
);}