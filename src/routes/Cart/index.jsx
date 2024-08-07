import { useEffect } from "react";
import Cart from "../../components/Cart";
import Layout from "../../Layout";
import { postCartToBackend } from "../../api/cart";
import useCartStore from "../../app/useCartStore";

function index() {
  const { getProductDetails, savedIdFromBackend } = useCartStore();

  const handlePostCartToUser = async () => {
    const cart = getProductDetails().cart;
    const data = await postCartToBackend(cart);
    savedIdFromBackend(data?._id);
  };

  useEffect(() => {
    handlePostCartToUser();
  }, []);

  return (
    <Layout>
      <Cart />
    </Layout>
  );
}

export default index;
