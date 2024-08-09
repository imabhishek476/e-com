const apiUrl = "https://vibepulse.onrender.com";
const localUrl = "http://localhost:5000";
import Cookies from 'js-cookie';

const access = Cookies.get('accessToken');

export const postCartToBackend = async (cart)=>{
    try {
        // if(!access){
        //   throw new Error("User Not Found")
        // }
        // const filteredCart = {
        //   ...cart,
        //   items: cart.items.map(item => {
        //     const { showCaseImg, ...rest } = item;//seprated showCaseImg, bcz thats too large
        //     return rest;
        //   })
        // };
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + access);
        headers.append("Content-Type", "application/json");
        
        const response = await fetch(apiUrl+ "/cart/user", {
          method: "POST",
          headers,
          body: JSON.stringify({ cart: cart })
        });
    
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
    
        const data = await response.json();
        if (response.ok) {
          return data;
        } else {
          return data.message || "Failed to fetch";
        }
      } catch (error) {
        console.error("Error fetching :", error);
      }
}
export const getCartByUser = async ()=>{
    try {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + access);
        headers.append("Content-Type", "application/json");
        
        const response = await fetch(apiUrl+ "/cart/user", {
          method: "GET",
          headers,
        });
    
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
    
        const data = await response.json();
        if (response.ok) {
          return data;
        } else {
          return data.message || "Failed to fetch";
        }
      } catch (error) {
        console.error("Error fetching :", error);
      }
}