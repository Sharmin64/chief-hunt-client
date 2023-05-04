import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode'
import chef_1 from '../../assets/chef_1.jpg'
import chef_2 from '../../assets/chef_2.jpg'
import chef_3 from '../../assets/chef_3.jpg'
import chef_4 from '../../assets/chef_4.jpg'
import chef_5 from '../../assets/chef_5.jpg'
const SwipePage = () => {
  return (
    <div className='container px-4 py-4 justify-center bg-gray-300'>
    
      <div className="card ">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className='hidden'
      spaceBetween={5}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> <img style={{width: '300px'}} src={chef_1} alt="" /></SwiperSlide>
      <SwiperSlide> <img style={{width: '300px'}} src={chef_2} alt="" /></SwiperSlide>
      <SwiperSlide> <img style={{width: '300px'}} src={chef_3} alt="" /></SwiperSlide>
      <SwiperSlide> <img style={{width: '300px'}} src={chef_4} alt="" /></SwiperSlide>
      <SwiperSlide> <img style={{width: '300px'}} src={chef_5} alt="" /></SwiperSlide>
      ...
    </Swiper>
     </div>
    </div>
  );
};

export default SwipePage;