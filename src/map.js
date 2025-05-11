import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11859.83129891011!2d-82.50013384875453!3d27.903540155586395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2dcc52385a093%3A0xfd51b8073bcd72d5!2sNew%20China%20Restaurant!5e0!3m2!1sen!2sus!4v1746991069552!5m2!1sen!2sus"
        width="100%" 
        height="400"  
        style={{ border: '0' }}  
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;