import { useEffect, useState } from "react";
import Cart from "../../components/Cart";
import Layout from "../../Layout";
import { postCartToBackend } from "../../api/cart";
import useCartStore from "../../app/useCartStore";

function index() {
  const { getProductDetails, savedIdFromBackend ,updateCart} = useCartStore();
  const [update,setUpdate] = useState(false)

  const handlePostCartToUser = async () => {
    const cart = getProductDetails().cart;
    const data = await postCartToBackend(cart);
    savedIdFromBackend(data?._id);
  };

  useEffect(() => {
    handlePostCartToUser();
  }, [update]);

  return (
    <Layout>
      <Cart setUpdate={setUpdate}/>
    </Layout>
  );
}

export default index;
