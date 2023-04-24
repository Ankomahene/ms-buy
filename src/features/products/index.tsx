'use client';
import { Flex } from '@chakra-ui/react';
import { CustomBreadcrumb } from '@src/components/CustomBreadcrumb';
import { ProductCard } from '@src/components/ProductCard';
import { IBreadcrumbItem, IProduct } from '@src/model';
import React from 'react';

interface AllProductsProps {
  products: IProduct[];
  breadcrumbItems?: IBreadcrumbItem[];
}

// TODO: Implement Pagination
export const AllProducts = ({
  products,
  breadcrumbItems,
}: AllProductsProps) => {
  return (
    <>
      <CustomBreadcrumb items={breadcrumbItems} />
      <Flex
        flexWrap="wrap"
        w={{ base: '100%', lg: '90%' }}
        mx="auto"
        justify="flex-start"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Flex>
    </>
  );
};
