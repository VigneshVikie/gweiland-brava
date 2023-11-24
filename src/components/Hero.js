import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-creative';

import { Navigation, Autoplay, EffectCreative } from "swiper/modules";
import { PiArrowRightThin, PiArrowLeftThin } from "react-icons/pi";
import { useRef } from "react";

export default function Hero() {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  return (
    <div className="hero">
      <Swiper
      grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        ref={sliderRef}
        modules={[Navigation, Autoplay, EffectCreative]}
        autoplay={{ delay: 6000 }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide1">
          <div className="slider-txt1">
            <h1>heritage<br/>hoodies</h1>
            <button className="shop-btn">shop now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <div className="slider-txt2">
            <h1>heritage<br/>tees</h1>
            <button className="shop-btn">shop now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide3">
        <div className="slider-txt1">
            <h1>premium<br/>tees</h1>
            <button className="shop-btn">shop now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide4">
        <div className="slider-txt1">
            <h1>premium<br/>zip<br/>hoodies</h1>
            <button className="shop-btn">shop now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide5">
        <div className="slider-txt2">
            <h1>heritage<br/>women's<br/>tanks</h1>
            <button className="shop-btn">shop now</button>
            </div>
        </SwiperSlide>
      </Swiper>
      <div className="slider-btn" style={{ display: "none" }}>
        <div className="prev-arrow" onClick={handlePrev}>
          <PiArrowLeftThin />
        </div>
        <div className="next-arrow" onClick={handleNext}>
          <PiArrowRightThin />
        </div>
      </div>
    </div>
  );
}
