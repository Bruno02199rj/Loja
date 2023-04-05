import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
var globalvalue = null
const SwiperMostAcessed = ({eldata,moreDetails,Swiper2}) => {




  return (
    <Swiper className='h-[35rem] w-[30rem] lg:w-[63rem]   rounded-t-xl'
    
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
     
      breakpoints={{
        380: {
          // width: 576,
          slidesPerView: 3,
        },
        768: {
          // width: 768,
          slidesPerView: 4,
        },
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true ,}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
     >
       
       {eldata.map((item)=><SwiperSlide>      <div className=" w-32 lg:w-60    rounded-xl mt-2               ">
                                        
                                    

                                        <Swiper2 eldata={item.productImage}/><SwiperSlide/>
                                        <div className="h-36 w-42   w-full bg-white rounded-b-xl">
                                           
                                         
                                          
                                        <p className="text-stone-500 font bold  text-center ">{item.productDescription} </p>
                                  
                                        <div className="h-8   w-full flex ">
                                        {item.productColor.map((item)=><div className="hover:h-4  cursor-pointer h-4 w-4 mx-1 border-solid border-1 border-black rounded-2xl " style={{  backgroundImage: `url("${item.color}")` }}></div>)}
                                        </div>
                                        {console.log(item.productColor.map((item)=>item.color))}
                                        
                                        
                                       <div className="w-full h-max">
                                       <div onClick={() => moreDetails(item)} className="flex h-6 cursor-pointer rounded-xl mt-2 w-max float-right bg-gradient-to-r from-yellow-300 to-yellow-600 mr-2">  
                                        
                                       
                                        <p className="text-black font-bold mr-2">Ver</p>
                                        </div>
                                        <div>
                                            <span className="text-black ml-2">Preço</span>
                                       
                                        </div>
                                        <span className="text-black ml-2 font-bold">R${item.productPrice}</span>
                                       </div>
                                       
                                
                               
                                        
                                 
                                        
                                       
                                            
        
        
                                        </div>
        
        
        
                                           
                                           
                                       
                                           
                                        </div></SwiperSlide>)}
    </Swiper>
    
  );
};

export default SwiperMostAcessed