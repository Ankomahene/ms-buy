import { ProductCard } from '@src/components/ProductCard';
import { AllCategories } from '@src/features/categories';
import { AllProducts } from '@src/features/products';
import { ICategory, IProduct } from '@src/model';
import { ClientConfig, createClient, groq } from 'next-sanity';

const clientConfig: ClientConfig = {
  projectId: 'gbmlc5y8',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-03-23',
};

const getAllCategoriesQueries = `
    *[_type == "category"] {
        "id": _id,
        name,
        "slug": slug.current,
        "image": image.asset->url 
    }
`;

const getCategoriesAsync = () => {
  return createClient(clientConfig).fetch(groq`${getAllCategoriesQueries}`);
};

export default async function AllCategoriesPage() {
  const categories: ICategory[] = await getCategoriesAsync();

  return (
    <>
      <AllCategories categories={categories} />
    </>
  );
}
