const apiUrl = 'https://vibepulse.onrender.com';
// const jwtsecret = 'myrandomjwtsecret12345';
import Cookies from 'js-cookie';

const access = Cookies.get('accessToken');



export const CustomerLogin = async (obj) => {
    // console.log(accessToken)
    try {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
    //   headers.append('JWT_SECRET', jwtsecret);
      const response = await fetch(apiUrl + '/auth/login', {
        method: 'POST',
        headers,
        body: JSON.stringify(obj),
      });
      const data = await response.json();
  
      // console.log(response);
      if (response.ok) {
        document.cookie = `accessToken=${data.token}; path=/; max-age=86400; Secure; SameSite=Strict;`;
        console.log('get user profile', data);
        return { data };
      }else if(data.message){
        alert(`Error : ${data.message}`)
      }
    } catch (e) {
      console.log(e);
    }
};

export const fetchUserProfile = async(cookie)=>{
  try {
    let headers = new Headers();
      headers.append('Authorization', 'Bearer ' + access);

      const response = await fetch(apiUrl + '/auth/fetch', {
        method: 'GET',
        headers,
      });
      const data = await response.json();
      console.log(data, response.ok)
      if(response.ok){
        return {data}
      }else{
        throw new Error(data.message || 'Error fetching user profile');
      }
  } catch (error) {
    console.log(error);
  }
}

// // Function to check if access token is still valid
// const cookies = document.cookie.split(';');
// const accessTokenCookie = cookies.find(cookie => cookie.trim().startsWith('accessToken='));