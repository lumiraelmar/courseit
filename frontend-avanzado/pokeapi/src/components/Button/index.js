import React from 'react';
import './style.scss';

function Button({button, onClick}) {

  return (
    <div>
      <button onClick={onClick}>{button}</button>
    </div>
  );
}

export default Button;