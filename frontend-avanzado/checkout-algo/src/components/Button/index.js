import React, { useContext } from 'react';
import AlgoContext from '../../contexts/AlgoContext';
import './style.scss';

function Button(props) {
  const { handleToggle, toggle } = useContext(AlgoContext)

  return (
    <div>
      <button onClick={() => handleToggle(!toggle)}>{props.button}</button>
    </div>
  );
}

export default Button;