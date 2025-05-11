import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useId } from "react";

const Products = (props) => {
  const productData = useSelector((state) => state.productState.productData);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productData.map((item) => {
          return (
            <ProductItem
              key={item.title+useId}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
