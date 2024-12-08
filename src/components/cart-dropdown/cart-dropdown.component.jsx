import { UserContext } from "../../contexts/user.context";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <p>Item Test 1</p>
        <p>Item Test 2</p>
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
