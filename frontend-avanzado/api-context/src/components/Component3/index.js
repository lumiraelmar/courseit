import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

function Component3() {
  const { name, surname } = useContext(ThemeContext);
  return (
    <div>
      <p>componente 3</p>
      <p>El valor de mi contexto es: {name}</p>
    </div>
  );
}

export default Component3;