import React, { createContext, useContext, useState } from 'react';

const ToggleContext = createContext({
  isOpen: false,
  toggleEffect: () => {}
});

export const useToggleContext = () => useContext(ToggleContext);

export const ToggleProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEffect = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  return (
    <ToggleContext.Provider value={{ isOpen, toggleEffect }}>
      {children}
    </ToggleContext.Provider>
  );
};
