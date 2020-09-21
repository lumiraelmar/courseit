import React, {useContext} from 'react';
import ThemeContext from '../../Context/ThemeContext';
import './style.scss';

function Content() {
  const theme = useContext(ThemeContext);
  return (
    <p className={theme}>algo muy content</p>
  );
}

export default Content;