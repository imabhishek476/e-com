const apiUrl = 'https://vibepulse.onrender.com';
const jwtsecret = 'myrandomjwtsecret12345';




export const CustomerSignup = async (obj) => {
    // const access = Cookies.get('accessToken');
    try {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
    //   headers.append('JWT_SECRET', jwtsecret);
    //   headers.append('Authorization', 'Bearer ' + accessToken);
      const response = await fetch(apiUrl + '/auth/signup', {
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