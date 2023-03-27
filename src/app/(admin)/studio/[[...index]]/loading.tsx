'use client';
import { Image } from '@chakra-ui/react';
import { config } from '@sanity.config';
import { NextStudioLoading } from 'next-sanity/studio/loading';

export default function Loading() {
  return (
    <>
      {/* <Image src="shopping_cart.png" alt="shopping cart" /> */}
      <NextStudioLoading config={config} />
    </>
  );
}
