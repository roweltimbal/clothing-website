import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
  isShowing: false,
});

export const CartProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const value = { isShowing, setIsShowing };
  useEffect(() => {
    setIsShowing(false);
  }, []);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
