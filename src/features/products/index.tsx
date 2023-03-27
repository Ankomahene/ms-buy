'use client';
import { Flex } from '@chakra-ui/react';
import { ProductCard } from '@src/components/ProductCard';
import { IProduct } from '@src/model';
import React from 'react';

interface AllProductsProps {
  products: IProduct[];
}
export const AllProducts = ({ products }: AllProductsProps) => {
  return (
    <Flex
      flexWrap="wrap"
      w={{ base: '100%', lg: '90%' }}
      mx="auto"
      justify="center"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Flex>
  );
};
