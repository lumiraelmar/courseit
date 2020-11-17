import React from 'react';

//crear context
const TokenContext = React.createContext('');

//crear y exportar provider
export const TokenProvider = TokenContext.Provider;

//exportar contexto
export default TokenContext