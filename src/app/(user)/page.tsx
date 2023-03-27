import { Banner } from '@src/features/home/Banner';
import { FeaturedProducts } from '@src/features/home/FeaturedProducts';
import { TopCategories } from '@src/features/home/TopCategories';
import { IFeaturedItems } from '@src/model';
import { ClientConfig, createClient, groq } from 'next-sanity';

const clientConfig: ClientConfig = {
  projectId: 'gbmlc5y8',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-03-23',
};

const getAllFeaturedItemsQueries = `
    *[_type == "featuredProductsAndCategories"]{
        "topCategories": topCategories[]->{
            "id": _id,
            name,
            "slug": slug.current,
            "image": image.asset->url,
        },
        "bestDeals": bestDeals[]->{
            "id": _id,
            name,
            description,
            price,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "trendingProducts": trendingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "mostSellingProducts": mostSellingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            rating,
            "mainImage": mainImage.asset->url,
        }
    }
`;

const getFeaturedItemsAsync = () => {
  return createClient(clientConfig).fetch(groq`${getAllFeaturedItemsQueries}`);
};

export default async function Home() {
  const featuredItems: IFeaturedItems[] = await getFeaturedItemsAsync();

  return (
    <main>
      <Banner />
      <TopCategories categories={featuredItems[0].topCategories} />
      <FeaturedProducts
        title="Best Deals For You"
        products={featuredItems[0].bestDeals}
      />
      <FeaturedProducts
        title="Most Selling Products"
        products={featuredItems[0].mostSellingProducts}
      />
      <FeaturedProducts
        title="Trending Products"
        products={featuredItems[0].trendingProducts}
      />
    </main>
  );
}
