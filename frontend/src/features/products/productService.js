import axios from "axios";
const base_url = "http://localhost:3001/api/products";

export const addProduct = async (productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${base_url}/add-product`,
    productData,
    config
  );

  return response.data;
};
