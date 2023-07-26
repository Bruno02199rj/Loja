import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
var globalvalue = null;
const SwiperMain = () => {
  return (
    <Swiper
     className="h-[20rem] lg:h-[25rem]   w-full "
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      speed={1200}
      loop={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide
        className="  bg-center   bg-cover lg:bg-cover bg-no-repeat lg:bg-[url(https://img.lojasrenner.com.br/banner/01-home/P04_230725_HOME_CARROSSEL_ALFAIATARIA_DESK_FEMININO.jpg)] bg-[url(https://img.lojasrenner.com.br/banner/01-home/P02_230719_HOME_CARROSSEL_PROGRESSIVO_MOB_GERAL.jpg)]"

      ></SwiperSlide>
    </Swiper>
  );
};

export default SwiperMain;
