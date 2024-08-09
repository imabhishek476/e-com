import { useCallback, useEffect, useState } from "react";
import { debounce } from 'lodash';
import Cart from "../../components/Cart";
import Layout from "../../Layout";
import { postCartToBackend } from "../../api/cart";
import useCartStore from "../../app/useCartStore";

function index() {
  const { getProductDetails, savedIdFromBackend} = useCartStore();
  const [update,setUpdate] = useState(false)

  const handlePostCartToUser = async () => {
    const cart = getProductDetails().cart;
    const data = await postCartToBackend(cart);
    savedIdFromBackend(data?._id);
  };


  const debouncedPostCartToUser = useCallback(debounce(handlePostCartToUser, 1500), []);
  useEffect(() => {
    debouncedPostCartToUser();
  
    // Cleanup function to cancel debounced calls if component unmounts
    return () => debouncedPostCartToUser.cancel();
  }, [update]);

  return (
    <Layout>
      <Cart setUpdate={setUpdate}/>
    </Layout>
  );
}

export default index;
