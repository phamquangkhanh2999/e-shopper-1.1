import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
const HeroSlider = (props) => {
  const data = props.data;
  const timeOut = props.timeOut ? props.timeOut : 3000;

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSline = useCallback(() => {
    const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
  });

  const prevSline = () => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };

  useEffect(() => {
    if (props.auto) {
      const sliderAuto = setInterval(() => {
        nextSline();
      }, timeOut);
      return () => {
        clearInterval(sliderAuto);
      };
    }
  }, [nextSline, timeOut, props]);
  return (
    <>
      <div className='hero-slider'>
        {data.map((item, index) => (
          <HeroSliderItem
            key={index}
            item={item}
            active={index === activeSlide}
          />
        ))}
        {props.control ? (
          <div className='hero-slider__control'>
            <div className='hero-slider__control__item' onClick={nextSline}>
              <AiOutlineLeft />
            </div>
            <div className='hero-slider__control__item'>
              <div className='index'>
                {activeSlide + 1} / {data.length}
              </div>
            </div>
            <div className='hero-slider__control__item' onClick={prevSline}>
              <AiOutlineRight />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

const HeroSliderItem = (props) => (
  <div className={`hero-slider__item ${props.active ? "active" : ""}`}>
    <div className='hero-slider__item__image '>
      <img src={props.item.img} alt='' />
    </div>
  </div>
);
export default HeroSlider;
