import { useId } from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/UiSlice";

const Cart = (props) => {
  const cartData = useSelector((state) => state.cartState);
  const isCartOpen = useSelector((state) => state.uiState.isCartOpen);

  const isDataPresent = cartData.length !== 0;

  let cartTitle = isDataPresent ? 'Your Shopping Cart' :  'Nothing in the Cart'
  const dispatch = useDispatch();
  function closeCart() {
    dispatch(uiActions.toggleCart())
  }
  return (
    <>
      {isCartOpen && (
        <Card className={classes.cart}>
          <div className={classes.cartHeader}>
            <h2>{cartTitle}</h2>
            <button onClick={closeCart}>X</button>
          </div>
         
          <ul>
            {cartData.map((cartItem) => {
              return (
                <CartItem
                  key={cartItem.title + useId}
                  item={cartItem}
                  // item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
                />
              );
            })}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
