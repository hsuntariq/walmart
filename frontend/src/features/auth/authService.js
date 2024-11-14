import axios from "axios";

const base_url = "http://localhost:3001/api/users";

export const registerUser = async (userData) => {
  const response = await axios.post(`${base_url}/register-user`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${base_url}/login-user`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const uploadImage = async (imageData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${base_url}/upload-image`,
    imageData,
    config
  );

  return response.data;
};
