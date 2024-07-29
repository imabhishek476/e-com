import NewArrival from "../../components/Products/NewArrival";
import Gurrantee from "../../components/Service/Gurrantee";
import B2 from "../../assets/images/OnSale/B2.png";
import Banner2 from "../../assets/images/OnSale/Banner2.png";
import Banner3 from "../../assets/images/OnSale/Banner3.png";
import WomenProductCard from "../../components/Products/NewArrival/WomenProductCard";
import BlackShortSleeveDress from "../../assets/images/cart/black-short-sleeve-dress.png";
import JeansJacket from "../../assets/images/cart/jeans-jacket.png";
import RayBan from "../../assets/images/cart/ray-ban.png";
import BlackCoat from "../../assets/images/cart/black-coat.png";
import Sweater from "../../assets/images/cart/pink-sweter.png";
import Layout from "../../Layout";

function index() {
  return (
    <Layout>
      <OnSaleFunc />
      <ShopByCategory title={"Sale On by Categories"} />
      <NewArrival message={"On Sale"} />
      <Gurrantee another={true} />
    </Layout>
  );
}

export default index;

export const OnSaleFunc = () => {
  return (
    <div className="container">
      <div className="rounded-lg overflow-hidden">
        <img src={B2} alt="On Sale" />
      </div>
    </div>
  );
};

export const ShopByCategory = ({ title }) => {
  const ProductCategory = [
    {
      id: 1,
      type: "Women's Top",
      price: "$199",
      image: BlackShortSleeveDress,
      item: "20 items"
    },
    {
      id: 2,
      type: "Women's Glasses",
      price: "$90",
      image: RayBan,
      item: "20 items"
    },
    {
      id: 3,
      type: "Women's Jacket",
      price: "$250",
      image: BlackCoat,
      item: "20 items"
    },
    {
      id: 4,
      type: "Women's Sweater",
      price: "$90",
      image: Sweater,
      item: "20 items"
    },
    {
      id: 5,
      type: "Women's Denim",
      price: "$250",
      image: JeansJacket,
      item: "20 items"
    }
  ];
  return (
    <>
      <div className=" text-black">
        <div className="m-4">
          <span className="text-3xl text-[#050A44] font-semibold">{title}</span>
          <div className="flex justify-around flex-nowrap gap-1 my-4">
            {ProductCategory &&
              ProductCategory?.map((item) => (
                <WomenProductCard
                  key={item.id}
                  item={item.item}
                  img={item.image}
                  price={item.price}
                  category={item.type}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="">
        <div className="m-5">
          <div className="flex justify-between">
            <div className="w-[49%]">
              <img className="object-contain" src={Banner2} alt="" />
            </div>
            <div className="w-[49%]">
              <img className="object-contain" src={Banner3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
