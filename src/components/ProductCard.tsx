'use client';
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { IFeaturedProduct, IProduct } from '@src/model';
import { getSubstring } from '@src/helpers';
import { BsHeart } from 'react-icons/bs';
import { Rating } from './Rating';
import Link from 'next/link';

interface ProductCardProps {
  product: IProduct | IFeaturedProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card w="xs" pos="relative" m="0.5rem">
      <Button
        pos="absolute"
        variant="ghost"
        bgColor="transparent"
        color="red.400"
        _hover={{ bgColor: 'transparent' }}
        rounded="full"
        title="Add to Wishlist"
      >
        <BsHeart />
      </Button>
      <CardBody>
        <Link href={`/products/${product.slug}`}>
          <Box
            bg={`center / contain no-repeat url(${product.mainImage})`}
            borderRadius="lg"
            boxSize="200px"
            mx="auto"
          />
        </Link>
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Link href={`/products/${product.slug}`}>
              <Heading size="sm">{getSubstring(product.name, 20)}</Heading>
            </Link>
            <Flex color="brand.primaryDark" fontWeight="bold">
              <Text fontSize="sm">$ </Text>
              <Text fontSize="lg">{product.price}</Text>
            </Flex>
          </Flex>
          <Text fontSize="sm"> {getSubstring(product.description, 30)} </Text>
          <Rating rating={product.rating} />
          <Button
            variant="outline"
            borderColor="brand.primary"
            color="brand.primary"
            borderRadius="50px"
            size="sm"
            maxW="120px"
          >
            Add to cart
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};
