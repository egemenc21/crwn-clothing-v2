import "./cart-dropdown.styles.scss";
import {useContext} from "react";
import Button from "../button/button.component";
import {CartContext} from "../../contexts/cart.contexts";
import CartItem from "../cart-item/cart-item.component";
const CartDropDown = () => {
  const {cartItems} = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
export default CartDropDown;