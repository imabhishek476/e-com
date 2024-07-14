import axios from "axios";
const apiUrl = "https://vibepulse.onrender.com";
// const apiUrl = "http://localhost:5000";

export const googleAuth = async (Response) => {
  try {
    console.log(Response);
    const res = await axios.get(
      // "https://www.googleapis.com/auth/userinfo.email"
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${Response.access_token}`
        }
      }
    );
    console.log(res);
    let obj = {
      email: res.data?.email,
      firstname: res.data?.given_name,
      lastname: res.data?.family_name,
      password: res.data?.sub
    };
    console.log(obj);

    //node call
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    const response = await fetch(apiUrl + "/auth/frontend/google", {
      method: "POST",
      headers,
      body: JSON.stringify(obj)
    });
    const data = await response.json();

    if (response.ok) {
      document.cookie = `accessToken=${data.token}; path=/; max-age=86400; Secure; SameSite=Strict;`;
      console.log("get user profile", data);
      return { data };
    } else if (data.message) {
      alert(`Error : ${data.message}`);
    }
  } catch (error) {
    console.log(error);
  }
};



export const facebookAuth = async (res) => {
  try {
    const { id, name, email } = res;

    const nameParts = name.split(" ");
    const firstName = nameParts[0];
    const lastname = nameParts[2] || nameParts[1];
    let obj = {
      firstname: firstName,
      lastname: lastname,
      email: email,
      password: id,
      facebookId: id
    };
    console.log(obj);

    //node call
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    const response = await fetch(apiUrl + "/auth/frontend/facebook", {
      method: "POST",
      headers,
      body: JSON.stringify(obj)
    });
    const data = await response.json();

    if (response.ok) {
      document.cookie = `accessToken=${data.token}; path=/; max-age=86400; Secure; SameSite=Strict;`;
      console.log("get user profile", data);
      return { data };
    } else if (data.message) {
      alert(`Error : ${data.message}`);
    }
  } catch (error) {
    console.log(error);
  }
};