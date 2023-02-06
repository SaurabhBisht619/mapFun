import React from 'react';
import './Box.css';

function Box(props) {
  return (
  
      <div className="box">
            {props.name}
      </div>
   
  )
}

export default Box;

