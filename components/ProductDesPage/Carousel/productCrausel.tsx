import { photos } from "../productList/productList";
import { Image } from "@nextui-org/react";
import HeartFav from "@/components/globalComponents/heartFav";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 200,

    customPaging: function () {
      return (
        <div className="dot -mt-2">
          <div>&nbsp;</div>
        </div>
      );
    },
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <div>
      <div className="sticky top-20 flex justify-end" style={{ zIndex: 25 }}>
        <HeartFav id="heart1" label=" " />
      </div>
      <div className="-mt-10 pb-8">
        <Slider {...settings}>
          {photos.map((item, index) => (
            <div key={index}>
              <Image src={item.src}></Image>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
