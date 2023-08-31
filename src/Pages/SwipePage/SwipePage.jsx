import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Pagination, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwipePage.css";
import chef_1 from "../../assets/chef_1.jpg";
import chef_2 from "../../assets/chef_2.jpg";
import chef_3 from "../../assets/chef_3.jpg";
import chef_4 from "../../assets/chef_4.jpg";
import chef_5 from "../../assets/chef_5.jpg";
import SectionTitle from "../../hooks/SectionTitle";

const SwipePage = () => {
  return (
    <div className="container">
      <SectionTitle
        heading={"Chef Gallery"}
        subHeading={"Our Most Favourite"}
      ></SectionTitle>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{el: ".swiper-pagination", clickable: true}}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img style={{width: "300px"}} src={chef_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width: "300px"}} src={chef_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width: "300px"}} src={chef_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width: "300px"}} src={chef_4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width: "300px"}} src={chef_5} alt="" />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwipePage;
