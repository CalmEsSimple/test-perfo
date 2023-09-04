import axios from 'axios';

export const getProduct = async (id: string) => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_product_by_id.php?id=${id}`, requestConfig);
  return await response.data;
}

export const getDefaultProduct = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_default_products.php/`, requestConfig);
  return await response.data;
}

export const getHomeRelatedProducts = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_home_cross_selling_products.php`,
    requestConfig
  );
  return await response.data;
}

export const getNewRelatedProducts = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_new_cross_selling_products.php`,
    requestConfig
  );
  return await response.data;
}

export const getRelatedProducts = async (id: string) => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_cross_selling_products.php?id=${id}`,
    requestConfig
  );
  return await response.data;
}

export const getShippingTime = async (cp: string, id: string ) => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/shipping/get_business_days.php?postcode=${cp}&products=${id}`,
    requestConfig
  );
  return await response.data;
}
