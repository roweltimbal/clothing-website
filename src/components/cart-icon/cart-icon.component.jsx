import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isShowing, setIsShowing, cartCount } = useContext(CartContext);
  const toggleIsShowing = () => {
    setIsShowing(!isShowing);
  };
  return (
    <div className="cart-icon-container" onClick={toggleIsShowing}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
