const apiUrl = 'https://vibepulse.onrender.com';
const jwtsecret = 'myrandomjwtsecret12345';




export const CustomerSignup = async (accessToken) => {
    // console.log(accessToken)
    // const access = Cookies.get('accessToken');
    try {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('JWT_SECRET', jwtsecret);
      headers.append('Authorization', 'Bearer ' + accessToken);
      const response = await fetch(apiUrl + '/signup', {
        method: 'GET',
        headers,
        // body: JSON.stringify(obj),
      });
  
      // console.log(response);
      if (response.status === 200) {
        const data = await response.json();
        // console.log('get user profile', data);
        return { data };
      }
    } catch (e) {
      console.log(e);
    }
};