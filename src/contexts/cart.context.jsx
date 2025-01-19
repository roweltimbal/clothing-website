import { useState, createContext, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // check if quantity is equal to 1, if it is, remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  // return back cart items with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// Remove button
const removeItemButton = (cartItems, cartItemToRemove) => {
  // use filter to return a new cartItems array without the cartItemToRemove
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const CartContext = createContext({
  isShowing: false,
  setIsShowing: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeItemButtonFunc: () => {},
  cartCount: 0,
  totalCartPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  useEffect(() => {
    const newCarCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCarCount);
  }, [cartItems]);
  useEffect(() => {
    const newTotalCartPrice = cartItems.reduce((acc, currentValue) => {
      const totalPrice = currentValue.quantity * currentValue.price;
      return acc + totalPrice;
    }, 0);
    setTotalCartPrice(newTotalCartPrice);
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const removeItemButtonFunc = (cartItemToRemove) => {
    setCartItems(removeItemButton(cartItems, cartItemToRemove));
  };
  const value = {
    isShowing,
    setIsShowing,
    addItemToCart,
    removeItemFromCart,
    removeItemButtonFunc,
    cartItems,
    cartCount,
    totalCartPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
