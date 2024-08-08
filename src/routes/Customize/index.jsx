import { useEffect, useState } from "react";
import CustomProductCard from "../../components/Customs/CustomProductCard";
import Layout from "../../Layout";
import { getAllCustomProducts } from "../../api/product";
import { Select, SelectItem } from "@nextui-org/react";
import { LuSettings2 } from "react-icons/lu";

function index() {

  const [product, setProduct] = useState(null);

  const handleGetProduct = async () => {
    const data = await getAllCustomProducts();
    console.log(data)
    setProduct(data);
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  return (
    <Layout>
      <div className="m-4">
        <div>
          <h1 className="text-3xl text-[#050A44] font-semibold">
            Customize Your T-shirts
          </h1>
        </div>
        <div className="my-2">
          <Select
            placeholder="Category"
            className="max-w-[200px]"
            startContent={<LuSettings2 />}
            onChange={(e)=>console.log(e)}
          >
            <SelectItem key={'men'} value="men">Men</SelectItem>
            <SelectItem key={'men'} value="women">Women</SelectItem>
          </Select>
        </div>
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
          {product &&
            product.map((item, index) => {
              return (
                <CustomProductCard
                  key={item?._id}
                  productImg={item?.productImage}
                  productName={item?.productName}
                  discountPrice={item?.discountPrice}
                  url={item?._id}
                />
              );
            })}
        </div>
      </div>
    </Layout>
  );
}

export default index;
