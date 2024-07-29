import CustomProductCard from "../../components/Customs/CustomProductCard";
import Layout from "../../Layout";

function index() {
  return (
    <Layout>
      <div className="m-4">
        <div>
          <h1 className="text-3xl text-[#050A44] font-semibold">
            Customize Your T-shirts
          </h1>
        </div>
        <div className="my-2">Filter Buttons</div>
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
          <CustomProductCard/>
          <CustomProductCard/>
          <CustomProductCard/>
          <CustomProductCard/>
        </div>
      </div>
    </Layout>
  );
}

export default index;
