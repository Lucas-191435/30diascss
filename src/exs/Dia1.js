import React from 'react';
import '../css/dia1.css'



const iconLinks = ['fa fa-facebook','fa fa-twitter','fa fa-google-plus','fa fa-linkedin','fa fa-instagram']


function Dia1() {
  return ( 
    <ul>
      {iconLinks.map((icon)=>(
        <li key={icon}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className={icon} arial-hidden='true'></span>
        </li>
      ))}
    </ul>
   );
}

export default Dia1;