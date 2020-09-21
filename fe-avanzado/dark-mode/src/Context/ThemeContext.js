import React from 'react';

//crear context
const ThemeContext = React.createContext('light');

//crear y exportar provider
export const ThemeProvider = ThemeContext.Provider;

//exportar contexto
export default ThemeContext