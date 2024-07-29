import Carousel from "../../components/Everyone/Carousel";
import Category from "../../components/Products/Category";
import NewArrival from "../../components/Products/NewArrival";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import Layout from "../../Layout";

const slides = [b1, b2, b3];

function index() {
  return (
    <Layout>
      <div className="container m-4 ml-0">
        <Carousel autoSlide={true}>
          {[
            ...slides.map((item) => (
              <img
                className="cursor-pointer px-1 rounded-lg"
                key={item}
                src={item}
              />
            ))
          ]}
        </Carousel>
      </div>
      <Category />
      {/* {"Popular Collections"} */}
      <NewArrival />
      <NewArrival />
    </Layout>
  );
}

export default index;
