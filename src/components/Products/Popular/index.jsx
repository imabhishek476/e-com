import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import RedShirt from "../../../assets/images/home/RedShirt.png";
import BlackShirt from "../../../assets/images/home/BlackShirt.png";
import BlueShirt from "../../../assets/images/home/BlueShirt.png";
import WhiteShirt from "../../../assets/images/home/WhiteShirt.png";
import { getAllProducts } from "../../../api/product";

const shirtIMage = [
  {
    id: 13474824823,
    productTitle: "Oversize Men's t-shirt",
    description: "Oversize Men's t-shirt",
    img: RedShirt,
    price: "$599"
  },
  {
    id: 23432432434,
    productTitle: "Oversize Men's t-shirt",
    description: "Oversize Men's t-shirt",
    img: BlackShirt,
    price: "$599"
  },
  {
    id: 39874389738947,
    productTitle: "Oversize Men's t-shirt",
    description: "Oversize Men's t-shirt",
    img: BlueShirt,
    price: "$599"
  },
  {
    id: 43812738943,
    productTitle: "Oversize Men's t-shirt",
    description: "Oversize Men's t-shirt",
    img: WhiteShirt,
    price: "$599"
  },
  {
    id: 592138038029,
    productTitle: "Oversize Men's t-shirt",
    description: "Oversize Men's t-shirt",
    img: RedShirt,
    price: "$599"
  },
  {
    id: 68937398728,
    productTitle: "Oversize Men's t-shirt",
    description: "Oversize Men's t-shirt",
    img: BlackShirt,
    price: "$599"
  },
  {
    id: 7384098348,
    productTitle: "Oversize Men's t-shirt",
    description: "Oversize Men's t-shirt",
    img: BlueShirt,
    price: "$599"
  },
  {
    id: 884238498490,
    productTitle: "Oversize Men's t-shirt",
    description: "Oversize Men's t-shirt",
    img: WhiteShirt,
    price: "$599"
  }
];

function index() {
  const [PopularProduct, setPopularProduct] = useState(null);

  const handleGetProduct = async () => {
    const data = await getAllProducts();
    setPopularProduct(data);
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  return (
    PopularProduct && (
      <div className=" text-black">
        <div className="m-4">
          <span className="text-3xl text-[#050A44] font-semibold">
            Most Popular Products
          </span>
          <div className="flex overflow-x-scroll scrollbar-hidden">
            <div className="flex justify-around flex-nowrap gap-2 my-4">
              {PopularProduct &&
                PopularProduct.map((item) => {
                  return (
                    <ProductCard
                      key={item?.id}
                      id={item?._id}
                      title={item?.productName}
                      description={item?.shortDescription}
                      img={item?.productImage}
                      price={item?.discountPrice}
                      urlSlug={item?.urlSlug}
                    />
                  );
                })}
              {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default index;
