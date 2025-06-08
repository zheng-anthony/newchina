import React from "react";

export default function Hours() {
  
  return (
    <div>
  <table style={{
    fontSize: "2rem",
    width: "100%",
    padding: "20px",
    borderRadius: "10px",
    fontFamily: "Georgia, serif"
  }}>
      <thead>
        <tr>
          <th style={{ textAlign: "left" }}>Day</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monday</td>
          <td>Closed</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>11:00 am - 10:00pm</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>11:00 am - 10:00 pm</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>11:00 am - 10:00 pm</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>11:00 am - 11:00 pm</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>11:00 am - 11:00 pm</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>12:00 pm - 10:00 pm</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
