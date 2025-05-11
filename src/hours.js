import React from 'react';

export default function Hours() {
    return (
<table style={{ fontSize: '1.5rem', width: '100%', padding: '10px' }}>
  <thead>
    <tr>
      <th style={{textAlign:"left"}}>Day</th>
      <th style={{textAlign:"left"}}>Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monday</td>
      <td>11:00 am - 09:15 pm</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>Closed</td>
    </tr>
    <tr>
      <td>Wednesday - Thursday</td>
      <td>11:00 am - 09:15 pm</td>
    </tr>
    <tr>
      <td>Friday - Saturday</td>
      <td>11:00 am - 10:15 pm</td>
    </tr>
    <tr>
      <td>Sunday</td>
      <td>12:00 pm - 09:15 pm</td>
    </tr>
  </tbody>
</table>
    )

}