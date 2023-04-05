import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
var globalvalue = null
const SwiperMain = () => {






  return (
    <Swiper className='   '
    
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true ,}}
      
      autoHeight={true}
     
      
      
     >
       
       <SwiperSlide    style={{ backgroundImage: `url("https://img.lojasrenner.com.br/banner/01-home/P01_230404_HOME_CARROSSEL_NOVIDADES_MOB_FEMININO.jpg")`
         ,height: 450,
         width:300 ,
         backgroundPosition: 'center', 
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat'}}></SwiperSlide>
           <SwiperSlide    style={{ backgroundImage: `url("https://img.ltwebstatic.com/images3_ccc/2023/04/03/1680502713c0cc964d0b51664b73cdee3f85f41fd1_thumbnail_1920x.jpg")`
         ,height: 450,
         width:300 ,
         backgroundPosition: 'center', 
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat'}}></SwiperSlide>
           <SwiperSlide    style={{ backgroundImage: `url("https://img.ltwebstatic.com/images3_ccc/2023/03/31/1680248332b721129ffca7a67327f9f5bf862a9a78_thumbnail_1920x.jpg")`
         ,height: 450,
         width:300 ,
         backgroundPosition: 'center', 
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat'}}></SwiperSlide>
         
    </Swiper>
    
  );
};

export default SwiperMain