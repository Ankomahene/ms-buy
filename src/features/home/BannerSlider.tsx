'use client';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@chakra-ui/react';
import { imageBox } from './Styles';
import { CSSProperties } from 'react';

const slideStyles: CSSProperties = {
  padding: '2rem 0.5rem',
  boxSizing: 'border-box',
  textAlign: 'center',
  background: 'white',
};

export const BannerSlider = () => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y, Autoplay],
    spaceBetween: 10,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <Box w="100%" h="100%">
      <Swiper
        {...sliderSettings}
        style={{ width: '100%', height: '100%', display: 'flex' }}
      >
        <SwiperSlide style={slideStyles}>
          <Box bg="center / cover no-repeat url(product1.jpg)" {...imageBox} />
        </SwiperSlide>

        <SwiperSlide style={slideStyles}>
          <Box bg="center / cover no-repeat url(product2.jpg)" {...imageBox} />
        </SwiperSlide>

        <SwiperSlide style={slideStyles}>
          <Box bg="center / cover no-repeat url(product3.jpg)" {...imageBox} />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <Box bg="center / cover no-repeat url(product4.jpg)" {...imageBox} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
