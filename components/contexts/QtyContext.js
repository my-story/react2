import React from 'react';

const QtyContext = React.createContext();
const QtyProvider = QtyContext.Provider;
const QtyConsumer = QtyContext.Consumer; 

export {QtyConsumer, QtyProvider};
export default QtyContext;