import { IconButton, Box } from '@chakra-ui/react';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <Box m="1.5rem">
      <IconButton
        rounded="lg"
        icon={<FaChevronLeft />}
        borderColor="brand.primary"
        borderWidth="1px"
        color="brand.primaryDark"
        bgColor="white"
        aria-label="Prev"
        onClick={() => swiper.slidePrev()}
        mx="1"
      />
      <IconButton
        rounded="lg"
        icon={<FaChevronRight />}
        borderColor="brand.primary"
        borderWidth="1px"
        color="brand.primaryDark"
        bgColor="white"
        aria-label="Next"
        onClick={() => swiper.slideNext()}
        mx="1"
      />
    </Box>
  );
};
