import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
var globalvalue = null
const SwiperCart = ({eldata}) => {






  return (
    <Swiper className='  w-48   bg-[#E2E2E2] md:rounded-md  '
    
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true ,}}
      
      autoHeight={true}
     
      
      
     >
       
       {eldata.map((item)=><SwiperSlide    style={{ backgroundImage: `url("${item.image}")`
         ,height: 150,
         width:80 ,
         backgroundPosition: 'center', 
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat'}}></SwiperSlide>)}
         
    </Swiper>
    
  );
};

export default SwiperCart