import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CartIconContainer,
  ShoppingIconStyle,
  ItemCount,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { isShowing, setIsShowing, cartCount } = useContext(CartContext);
  const toggleIsShowing = () => {
    setIsShowing(!isShowing);
  };
  return (
    <CartIconContainer onClick={toggleIsShowing}>
      <ShoppingIconStyle />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
