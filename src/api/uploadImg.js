const apiUrl = "https://vibepulse.onrender.com";
const localUrl = "http://localhost:5000";
import Cookies from "js-cookie";

const access = Cookies.get("accessToken");

export const uploadImage = async (img) => {
  try {
    let formData = new FormData();
    formData.append('uploadImg', img);
    let headers = new Headers();
    // headers.append('Authorization', 'Bearer ' + access);
    // headers.append("Content-Type", "form-data");
    const response = await fetch(apiUrl + "/cart/upload/img", {
      method: "POST",
      headers,
      body: formData,
      redirect: "follow"
    });
    const data = await response.json();
    //   console.log(data, response.ok)
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || "Error getting data");
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
