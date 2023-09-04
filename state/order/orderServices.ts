import axios from 'axios';
import { IAPIResponse } from '../types';

export const getOrder = async (id: string, order_key: string) => {
  const requestConfig = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/order/get_order.php`,
    { id, order_key },
    requestConfig
  );
  return await response.data;
}