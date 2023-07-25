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
    <Swiper 
    
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      
      speed={1200}
      loop={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
     >

     
           <SwiperSlide className=''     style={{ backgroundImage: `url("https://img.lojasrenner.com.br/banner/01-home/P02_230719_HOME_CARROSSEL_PROGRESSIVO_MOB_GERAL.jpg")`
         ,
      objectFit: 'fill',
        height:300,
        width:500,
    
        
         backgroundPosition: 'center',
         backgroundSize:'cover ', 
         
         backgroundRepeat: 'no-repeat'
           }
      
      
      }
         
         ></SwiperSlide>
          
    </Swiper>
    
  );
};

export default SwiperMain