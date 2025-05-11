import { Fragment, useEffect } from "react";
import MainHeader from "./MainHeader";
import Notification from "../UI/Notification";
import { useDispatch, useSelector } from "react-redux";

import { sendCartData , fetchCartData} from "../../store/CartAction";

let isInitialLoad = true;

const Layout = (props) => {
  const cartData = useSelector((state) => state.cartState);
  const uiData = useSelector((state) => state.uiState);
  const dispatch = useDispatch();
  const notifcationData = useSelector(
    (state) => state.productState.notificationData
  );

  useEffect(() =>{
    dispatch(fetchCartData());
  },[dispatch]);
 
  useEffect(() => {
    if(isInitialLoad){
      isInitialLoad = false;
      return;
    }
    if(uiData.isDataChangedLocally) {
      dispatch(sendCartData(cartData))
    }
   
  }, [cartData, dispatch, uiData.isDataChangedLocally]);


  return (
    <Fragment>
      {notifcationData && <Notification notification={notifcationData} />}
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;







// useEffect(() => {
//   const sendCartData = async () => {
//     dispatch(
//       productActions.updateNotification({
//         title: "Sending..",
//         status: "pending",
//         message: "Sending Cart Data..",
//       })
//     );
//     const response = await fetch(
//       "https://react-demo-e5ff5-default-rtdb.firebaseio.com/cart.json",
//       {
//         method: "PUT",
//         body: JSON.stringify(cartData),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to send data");
//     }
//     if(isInitialLoad){
//       isInitialLoad = false;
//       return;
//     }

//     dispatch(
//       productActions.updateNotification({
//         title: "Success..",
//         status: "success",
//         message: "Sent Cart Data Successfully.",
//       })
//     );

//     //const responseData = await response.JSON();
//   };

//   sendCartData().catch((error) => {
//     dispatch(
//       productActions.updateNotification({
//         title: "Error..",
//         status: "error",
//         message: "failed to send Cart Data..",
//         error,
//       })
//     );
//   });
// }, [cartData, dispatch]);