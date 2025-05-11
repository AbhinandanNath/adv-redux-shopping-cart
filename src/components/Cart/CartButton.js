import { uiActions } from "../../store/UiSlice";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartState);

  function showProductCart() {
    dispatch(uiActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={showProductCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartData.length}</span>
    </button>
  );
};

export default CartButton;
