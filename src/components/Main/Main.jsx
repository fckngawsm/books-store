import React from "react";
import Slider from "react-slick";
import SliderMain from "../SliderMain/SliderMain";
import Novetly from "../Novelty/Novetly";
import Shops from "../Shops/Shops";
import News from "../News/News";
function Main({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <Slider {...settings}>
        {slides.map((slide) => (
          <SliderMain
            slide={slide}
            title={slide.title}
            description={slide.description}
            img={slide.img}
          />
        ))}
      </Slider>
      <Novetly />
      <Shops />
      <News />
    </>
  );
}

export default Main;
