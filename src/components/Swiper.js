import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default ({eldata}) => {

  console.log('hereeeeeeee')
console.log(eldata.productImage.map((item)=>item.image))

  return (
    <Swiper className='  w-80  md:mt-[19vh] rounded-t-xl'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true ,}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
         {eldata.productImage.map((item)=><SwiperSlide    style={{ backgroundImage: `url("${item.image}") `
        
         ,height:420,
         width:250 ,
         backgroundPosition: 'center', 
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat'}}></SwiperSlide>)}
 
      
    </Swiper>
  );
};