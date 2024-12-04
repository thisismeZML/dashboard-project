import { getCookie } from "react-use-cookie";

export const fetchProduct = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("my_token")}`,
    },
  }).then((res) => res.json());

export const createProduct = (product_name, price) => {
  return fetch(`${import.meta.env.VITE_API_URL}/products`, {
    method: "POST",
    body: JSON.stringify({
      product_name: product_name,
      price: price,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("my_token")}`,
    },
  });
};

export const deleteProduct = (id) => {
  return fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("my_token")}`,
    },
  });
};

export const editProducts = (id, product_name, price) => {
  return fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      product_name: product_name,
      price: price,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("my_token")}`,
    },
  });
};
