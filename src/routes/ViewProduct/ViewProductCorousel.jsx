import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ViewProductCorousel({ images }) {

  return (
    <>
      <Carousel
        showStatus={false}
        showIndicators={false}
        showThumbs={true}
        // infiniteLoop
        showArrows={false}
        swipeable
        autoPlay
        stopOnHover
        useKeyboardArrows
        // onClickItem={(index) => setSelectedImage(images[index])}
        // className="w-[150px]"
      >
        {images?.map((image, index) => (
          <div key={index} className="carousel-image-container rounded-full">
            <img
              className="carousel-image"
              src={image}
              alt={`Product ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default ViewProductCorousel;
