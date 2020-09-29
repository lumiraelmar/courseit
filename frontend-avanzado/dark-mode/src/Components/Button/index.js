import React, {useContext} from 'react';
import ThemeContext from '../../Context/ThemeContext';
import './style.scss';

function Button(props) {
  const theme = useContext(ThemeContext);
  return (
    <button className={theme} onClick={() => props.handleCallback()}>Cambiar modo</button>
  );
}

export default Button;
