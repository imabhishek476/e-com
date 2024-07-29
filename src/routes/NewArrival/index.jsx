import Banner from "../../components/Banner";
import NewArrival from "../../components/Products/NewArrival";
import ProductCategory from "../../components/Products/Category";
import Popular from "../../components/Products/Popular/index";
import Layout from "../../Layout";

function index() {
  return (
    <Layout>
      <Banner page={"Women"} />
      <NewArrival message={"Our New Product"} />
      <ProductCategory />
      <Popular />
    </Layout>
  );
}

export default index;
