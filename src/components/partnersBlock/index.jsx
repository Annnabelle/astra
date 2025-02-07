import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import logo from "../../assets/astraLogo.webp";
import "swiper/css";
import "./styles.sass";

const PartnersBlock = (props) => {
  const partnersInfo = [
    { id: 1, image: logo, alt: "1" },
    { id: 2, image: logo, alt: "2" },
    { id: 3, image: logo, alt: "3" },
    { id: 4, image: logo, alt: "4" },
    { id: 5, image: logo, alt: "5" },
    { id: 6, image: logo, alt: "6" },
    { id: 7, image: logo, alt: "7" },
  ];
  return (
    <div className='partnersBlockContainer'>
      <div className='container'>
        <Swiper
          spaceBetween={20}
          slidesPerView={6}
          loop={true}
          autoplay={{ delay: 2000 }}
          freeMode={true}
          modules={[Autoplay]}
          speed={1200}
          className='partnersSwiper'
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            420: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            991: {
              slidesPerView: 4,
            },
            1250: {
              slidesPerView: 6,
            },
          }}
        >
          {partnersInfo?.length >= 0 &&
            partnersInfo?.map((item) => (
              <SwiperSlide key={item?.id}>
                <div className='partnersImageContainer'>
                  <img
                    src={item?.image}
                    alt={item?.alt}
                    className='partnersImg'
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnersBlock;
