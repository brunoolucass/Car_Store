import React, { useRef, useState } from "react";
import { Container } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../Slider/style.css"


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";


const Slider = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (  
    <>
    <Container>
    <Swiper style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        
        
        >

    <SwiperSlide>
    <img src={props.car.image1} alt="" />
    </SwiperSlide>

    <SwiperSlide>
    <img src={props.car.image2} alt="" />
    </SwiperSlide>

    <SwiperSlide>
    <img src={props.car.image3} alt="" />
    </SwiperSlide>

    <SwiperSlide>
    <img src={props.car.image4} alt="" />
    </SwiperSlide>

  </Swiper>
  <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
<img src={props.car.image1} alt="" />
    </SwiperSlide>

    <SwiperSlide>
    <img src={props.car.image2} alt="" />
    </SwiperSlide>

    <SwiperSlide>
    <img src={props.car.image3} alt=""/>
    </SwiperSlide>

    <SwiperSlide>
    <img src={props.car.image4} alt="" />
    </SwiperSlide>


      </Swiper>
  </Container>
    </>
  )
}

export default Slider;
