'use client';
import {
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import { SectionHeading } from '@src/components/SectionHeading';
import { ICategory } from '@src/model';
import Image from 'next/image';
import Link from 'next/link';

interface TopCategoriesProps {
  categories: ICategory[];
}

export const TopCategories = ({ categories }: TopCategoriesProps) => {
  return (
    <Box w={{ base: '100%', lg: '90%' }} mx="auto" py="3rem" px="2rem">
      <SectionHeading title=" Shop Our Top Categories" />

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap="4"
      >
        {categories.map((category) => (
          <GridItem key={category.id}>
            <TopCategoryCard category={category} />
          </GridItem>
        ))}
      </Grid>

      <Link href="/categories">
        <Button
          bgColor="white"
          variant="outline"
          borderColor="brand.primary"
          color="brand.primary"
          rounded="full"
          my="1rem"
        >
          Browse All Categories
        </Button>
      </Link>
    </Box>
  );
};

interface TopCategoryCardProps {
  category: ICategory;
}

const TopCategoryCard = ({ category }: TopCategoryCardProps) => (
  <Link href={`/categories/${category.id}`}>
    <Card
      direction="row"
      align="center"
      overflow="hidden"
      variant="outline"
      w="100%"
      p="10px"
      h="100%"
      _hover={{ cursor: 'pointer', bgColor: 'gray.100' }}
    >
      <Image
        src={category.image}
        alt={category.name}
        height={100}
        width={100}
      />

      <CardBody>
        <Heading size={{ base: 'sm', lg: 'md' }}>{category.name}</Heading>
      </CardBody>
    </Card>
  </Link>
);
