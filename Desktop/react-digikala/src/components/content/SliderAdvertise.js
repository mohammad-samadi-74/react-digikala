import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../css/content/SliderAdvertise.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function SliderAdvertise({ images, responsive }) {
  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <span {...props}></span>
  );

  const settings = {
    dots: true,
    arrows: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,

    prevArrow: (
      <SlickButtonFix>
        <IconButton>
          <ArrowBackIos />
        </IconButton>
      </SlickButtonFix>
    ),
    nextArrow: (
      <SlickButtonFix>
        <IconButton>
          <ArrowForwardIos />
        </IconButton>
      </SlickButtonFix>
    ),
    autoplay: true,
    slideCount: images.length,
  };

  let SliderSettings = () => {
    return responsive ? { ...settings, responsive } : settings;
  };

  return (
    <div className="sliderAdvertise">
      <Slider {...SliderSettings()}>
        {images.map((src, index) => (
          <img src={src} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default SliderAdvertise;
