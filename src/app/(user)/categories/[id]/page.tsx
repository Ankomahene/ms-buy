import { AllProducts } from '@src/features/products';
import { ProductDetails } from '@src/features/products/ProductDetails';
import { IBreadcrumbItem, IProduct } from '@src/model';
import { client } from '@utils/sanity.client';
import { groq } from 'next-sanity';
import React from 'react';

const query: string = groq`
    *[_type == "product" && references($id)] {
        ...,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{ name },
    }
`;

type Props = {
  params: {
    id: string;
  };
};

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

async function CategoryPage({ params: { id } }: Props) {
  const products: IProduct[] = await client.fetch(query, { id });

  return (
    <>
      <AllProducts
        products={products}
        breadcrumbItems={[
          ...items,
          { name: products[0].category.name, link: '#' },
        ]}
      />
    </>
  );
}

export default CategoryPage;
