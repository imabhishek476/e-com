const apiUrl = "https://vibepulse.onrender.com";
const localUrl = "http://localhost:5000";
// const jwtSecret = 'myrandomjwtsecret12345';
import Cookies from "js-cookie";
const access = Cookies.get("accessToken");

export const getAllProducts = async () => {
  try {
    const headers = new Headers();
    // headers.append("Authorization", "Bearer " + access);
    headers.append("Content-Type", "application/json");
    const response = await fetch(apiUrl + "/product", {
      method: "GET",
      headers: headers
    });
    const data = await response.json();

    if (response.ok) {
      return data?.data;
    } else {
      return data.message || "Error submitting product data";
    }
  } catch (error) {
    console.error("Error in getting product list:", error);
    throw error;
  }
};
export const getAllCustomProducts = async () => {
  try {
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + access);
    headers.append("Content-Type", "application/json");
    const response = await fetch(apiUrl + "/product/custom", {
      method: "GET",
      headers: headers
    });
    const data = await response.json();

    if (response.ok) {
      return data?.data;
    } else {
      return data.message || "Error submitting product data";
    }
  } catch (error) {
    console.error("Error in getting product list:", error);
    throw error;
  }
};

export const getProductByUrl = async (url) => {
  try {
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + access);
    headers.append("Content-Type", "application/json");
    const response = await fetch(
      apiUrl + "/product/url?" + `url=${encodeURIComponent(url)}`,
      {
        method: "GET",
        headers: headers
      }
    );
    const data = await response.json();

    if (response.ok) {
      return data?.data;
    } else {
      return data.message || "Error submitting product data";
    }
  } catch (error) {
    console.error("Error in getting product list:", error);
    throw error;
  }
};
export const getCustomProductById = async (id) => {
  try {
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + access);
    headers.append("Content-Type", "application/json");
    const response = await fetch(
      apiUrl + "/product/custom/id?" + `id=${encodeURIComponent(id)}`,
      {
        method: "GET",
        headers: headers
      }
    );
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      return data.message || "Error submitting product data";
    }
  } catch (error) {
    console.error("Error in getting product:", error);
    throw error;
  }
};

export const getProductByIds = async (productIds) => {
  try {
    const response = await fetch(apiUrl+ "/product/ids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ productIds: productIds })
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return data.message || "Failed to fetch products";
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
