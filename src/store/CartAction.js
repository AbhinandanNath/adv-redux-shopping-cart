import { cartActions } from "./CartSlice";
import { productActions } from "./ProductSlice";
import axios from 'axios';
export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      productActions.updateNotification({
        title: "Sending..",
        status: "pending",
        message: "Sending Cart Data..",
      })
    );

    // const sendRequest = async () => {
    //   const response = await fetch(
    //     "https://react-demo-e5ff5-default-rtdb.firebaseio.com/cart.json",
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(cartData),
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error("Failed to send data");
    //   }
    // };

    try {
      // await sendRequest();
      await axios.put( "https://react-demo-e5ff5-default-rtdb.firebaseio.com/cart.json",cartData);
      dispatch(
        productActions.updateNotification({
          title: "Success..",
          status: "success",
          message: "Sent Cart Data Successfully.",
        })
      );
    } catch (error) {
      dispatch(
        productActions.updateNotification({
          title: "Error",
          status: "error",
          message: `Failed to send Cart Data. ${
            error.toString().split(":")[1]
          }`,
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    // const fetchData = async () => {
    //   const response = await fetch(
    //     "https://react-demo-e5ff5-default-rtdb.firebaseio.com/cart.json"
    //   );

    //   if (!response.ok) {
    //     throw new Error("Failed to Fetch Cart Data");
    //   }

    //   const responseData = await response.json();

    //   return responseData;
    // };

    try {
      // const savedCartData = await fetchData();
      const savedCartData = await axios.get( "https://react-demo-e5ff5-default-rtdb.firebaseio.com/cart.json")
      dispatch(cartActions.setInitialCartData(savedCartData.data));
    } catch (error) {
      dispatch(
        productActions.updateNotification({
          title: "Error",
          status: "error",
          message: `Failed to Fetch Cart Data. ${
            error.toString().split(":")[1]
          }`,
        })
      );
    }
  };
};
