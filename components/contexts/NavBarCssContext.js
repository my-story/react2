import React from 'react';

const NavBarCssContext = React.createContext();
const NavBarCssProvider = NavBarCssContext.Provider;
const NavBarCssConsumer = NavBarCssContext.Consumer; 

export {NavBarCssConsumer, NavBarCssProvider};
export default NavBarCssContext;