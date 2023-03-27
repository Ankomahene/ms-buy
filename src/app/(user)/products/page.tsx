import { ProductCard } from '@src/components/ProductCard';
import { AllProducts } from '@src/features/products';
import { IProduct } from '@src/model';
import { ClientConfig, createClient, groq } from 'next-sanity';

const clientConfig: ClientConfig = {
  projectId: 'gbmlc5y8',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-03-23',
};

const getAllProductsQueries: string = `
    *[_type == "product"] {
        "id": _id,
        name,
        description,
        price,   
        rating,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{
            name,
            "id": _id,
            "image": image.asset->url
        },
        "gallery": gallery[] {
            caption,
            "url": asset->url
        }
    }
`;

const getProductsAsync = () => {
  return createClient(clientConfig).fetch(groq`${getAllProductsQueries}`);
};

export default async function ProductsPage() {
  const products: IProduct[] = await getProductsAsync();

  return (
    <>
      <AllProducts products={products} />
    </>
  );
}
