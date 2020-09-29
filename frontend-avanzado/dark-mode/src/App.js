import React, { useState } from 'react';
import Button from './Components/Button';
import Content from './Components/Content';
import { ThemeProvider } from './Context/ThemeContext'
import './App.css';

function App() {
  const [theme, setTheme] = useState('light')

  function handleCallback() {
    const newTheme = theme =='light' ? 'dark' : 'light';
    console.log(newTheme)
    setTheme(newTheme)
  }
  return (
    <ThemeProvider value={theme}>
      <Button handleCallback={handleCallback}/>
      <Content />
    </ThemeProvider>
  );
}

export default App;
