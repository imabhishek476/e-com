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
  
      // console.log(response);
      if (response.status === 201) {
        const data = await response.json();
        document.cookie = `accessToken=${data.token}; path=/; max-age=86400; Secure; SameSite=Strict;`;
        console.log('get user profile', data);
        return { data };
      }
    } catch (e) {
      console.log(e);
    }
};