import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
var globalvalue = null
const Swiper2 = ({eldata}) => {






  return (
    <Swiper className='  bg-[#F5F5F4] rounded-md'
    
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={1}
      navigation
      
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true ,}}
      
      autoHeight={true}
   
      
      
     >
       
       {eldata.map((item)=><SwiperSlide   style={{ backgroundImage: `url("${item.image}")`
         ,height: 180,
         width:300 ,
         backgroundPosition: 'center', 
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat'}}></SwiperSlide>)}
         
    </Swiper>
    
  );
};

export default Swiper2