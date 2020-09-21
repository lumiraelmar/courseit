import React from 'react';

//crear context
const ThemeContext = React.createContext({});

//crear y exportar provider
export const ThemeProvider = ThemeContext.Provider;

//exportar contexto
export default ThemeContext