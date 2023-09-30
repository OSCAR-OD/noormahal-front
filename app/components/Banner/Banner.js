import { useEffect, useState } from 'react';
import axios from 'axios'; 

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
//import { Link } from "react-router-dom";
import Link from "next/link";
import './banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
     axios.get('https://noormahal-api.onrender.com/bannerRoute/')
      .then((response) => {
        //console.log(response.data);
        setBanners(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cards:', error);
      });
  }, []);

  return (
    <section className="bannerclass">
     
      {/* className="w-full" */}
      <Swiper
        cssMode={true}
        navigation={false}
        pagination={{clickable:true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
       
      >
          {banners.map((banner, index) => (
         banner.pic.map((img, imgIndex) => (
        <SwiperSlide key={`${index}-${imgIndex}`}>
          <div className="relative">
            <img src={img.url}  alt={banner.heading} />
          </div> 
        </SwiperSlide>
        )) )) }
      </Swiper>
    </section>
  );
};

export default Banner;
