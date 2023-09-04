import { onGetOrderLoadingFinished } from "../loading/loadingActions";
import { ON_GET_ORDER_FAILED, ON_GET_ORDER_SUCCEEDED } from "./orderConstants";
import { getOrder } from "./orderServices";

export const onGetOrder = (id: string, order_key: string) => {
  return async (dispatch: any) => {
    const response = await getOrder(id, order_key);

    if (response && response.status == 200) {
      dispatch(onGetOrderSucceeded(response));
      dispatch(onGetOrderLoadingFinished())
    } else {
      dispatch(onGetOrderFailed());
      dispatch(onGetOrderLoadingFinished())
    }
  };
};

const onGetOrderSucceeded = (orderData: any) => ({
    type: ON_GET_ORDER_SUCCEEDED,
    orderData
});

const onGetOrderFailed = () => ({
    type: ON_GET_ORDER_FAILED
});