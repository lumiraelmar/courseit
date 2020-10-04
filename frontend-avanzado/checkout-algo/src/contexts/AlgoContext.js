import React from 'react';

//crear context
const AlgoContext = React.createContext({});

//crear y exportar provider
export const AlgoProvider = AlgoContext.Provider;

//exportar contexto
export default AlgoContext