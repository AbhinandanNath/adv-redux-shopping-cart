import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/CartSlice";
import { uiActions } from "../../store/UiSlice";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  const updateCartData = () => {

    dispatch(cartActions.updateCartValue({ title, price }));
    dispatch(cartActions.updateQuantity({ quantity: 1, title }));
    dispatch(uiActions.isDataChanged(true));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={updateCartData}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
