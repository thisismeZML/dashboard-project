import { getCookie } from "react-use-cookie";

export const generateInvoiceNumber = () => {
  const date = new Date();
  const formatDate = date.toISOString().slice(0, 10).replace(/-/g, "");
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  const invoiceNumber = `INV-${formatDate}-${randomNumber}`;
  return invoiceNumber;
};

export const addProduct = (data, total, tax, net_total, records) => {
    return fetch(`${import.meta.env.VITE_API_URL}/vouchers`, {
      method: "POST",
      body: JSON.stringify({ ...data, records, total, tax, net_total }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${getCookie("my_token")}`,
      },
    });
  };