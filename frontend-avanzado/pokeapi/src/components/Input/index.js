import React from 'react';
import './style.scss';

function Input({label, placeholder, onChange, name, type}) {

  return (
    <div>
      {label && <label>{label}</label>}
      <input type={type} placeholder={placeholder} onChange={(e) => onChange(name, e.target.value)} name={name}/>
    </div>
  );
}

export default Input;