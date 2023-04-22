'use client';
import { Card, CardBody, Grid, Heading } from '@chakra-ui/react';
import { ICategory } from '@src/model';
import Image from 'next/image';
import Link from 'next/link';

interface AllCategoriesProps {
  categories: ICategory[];
}
export const AllCategories = ({ categories }: AllCategoriesProps) => {
  return (
    <Grid
      py="2rem"
      w={{ base: '100%', lg: '90%' }}
      templateColumns={{
        base: 'repeat(1, 1fr)',
        lg: 'repeat(2, 1fr)',
      }}
      gap="20px"
      mx="auto"
    >
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </Grid>
  );
};

interface CategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => (
  <Link href={`/categories/${category.id}`}>
    <Card
      direction="column"
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
        height={200}
        width={200}
      />

      <CardBody>
        <Heading size={{ base: 'sm', lg: 'md' }}>{category.name}</Heading>
      </CardBody>
    </Card>
  </Link>
);
