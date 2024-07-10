const apiUrl = 'https://vibepulse.onrender.com';
// const jwtsecret = 'myrandomjwtsecret12345';




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