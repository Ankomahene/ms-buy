'use client';
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { CustomBreadcrumb } from '@src/components/CustomBreadcrumb';
import { Quantity } from '@src/components/Quantity/Quantity';
import { Rating } from '@src/components/Rating';
import { getSubstring } from '@src/helpers';
import { IBreadcrumbItem, IProduct } from '@src/model';
// import Image from 'next/image';
import React from 'react';

interface ProductDetailsProps {
  product: IProduct;
}

const items: IBreadcrumbItem[] = [
  {
    name: 'Products',
    link: '/products',
  },
  {
    name: 'Categories',
    link: '/categories',
  },
];

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <>
      <CustomBreadcrumb
        items={[
          ...items,
          {
            name: product.category.name,
            link: `/categories/${product.category.id}`,
          },
          {
            name: getSubstring(product.name, 20),
            link: `/products/${product.slug}`,
          },
        ]}
      />
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        w={{ base: '100%', lg: '90%' }}
        mx="auto"
        p="2rem"
        gap="20"
      >
        <GridItem p="1rem">
          <Image src={product?.mainImage} alt={product.name} mx="auto" />
          <Flex>
            {product.gallery?.length !== 0 &&
              product.gallery?.map((image, i) => (
                <Image
                  key={i}
                  src={image}
                  alt={product.name}
                  mx="auto"
                  boxSize="70px"
                  rounded="md"
                  shadow="sm"
                  borderWidth="1px"
                  borderColor="gray.100"
                />
              ))}
          </Flex>
        </GridItem>
        <GridItem p="1rem">
          <Heading>{product.name}</Heading>
          <Text my="1rem">{product.description}</Text>
          <Rating rating={product.rating} />

          <Text fontWeight="bold" fontSize="2rem">
            ${product.price}
          </Text>
          <Divider my="1rem" />
          <Quantity />
          <Divider my="1rem" />
          <Box>
            <Button
              variant="outline"
              bgColor="brand.primary"
              color="white"
              borderRadius="50px"
              w="160px"
              mr="1rem"
              _hover={{ bgColor: 'none' }}
            >
              Buy Now
            </Button>
            <Button
              variant="outline"
              borderColor="brand.primary"
              color="brand.primary"
              borderRadius="50px"
              w="160px"
              mr="1rem"
              _hover={{ bgColor: 'none' }}
            >
              Add to cart
            </Button>
          </Box>

          <Stack py="2rem">
            <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Free Deliver</Text>
              <Link textDecor="underline" color="gray.500">
                Enter Your postal Code for Delivery Availability
              </Link>
            </Box>

            <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Return Delivery</Text>
              <Text color="gray.500">
                Free 30 Days Delivery Returns
                <Link textDecor="underline"> Details</Link>
              </Text>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};
