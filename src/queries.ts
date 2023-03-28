import { clientConfig } from '@utils/sanity.client';
import { createClient, groq } from 'next-sanity';

// queries
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

// Fetching Gallery images without caption
// "gallery": gallery[].asset->url | output: ['image-url1', 'image-url2']

const getAllCategoriesQueries = `
    *[_type == "category"] {
        "id": _id,
        name,
        "image": image.asset->url 
    }
`;

const getAllFeaturedItemsQueries = `
    *[_type == "featuredProductsAndCategories"]{
        "topCategories": topCategories[]->{
            "id": _id,
            name,
            "image": image.asset->url,
        },
        "bestDeals": bestDeals[]->{
            "id": _id,
            name,
            price,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "trendingProducts": trendingProducts[]->{
            "id": _id,
            name,
            price,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "mostSellingProducts": mostSellingProducts[]->{
            "id": _id,
            name,
            price,
            rating,
            "mainImage": mainImage.asset->url,
        }
    }
`;

const client = createClient(clientConfig);

export const getProducts = () => {
  return client.fetch(groq`${getAllProductsQueries}`);
};

export const getCategories = () => {
  return createClient(clientConfig).fetch(groq`${getAllCategoriesQueries}`);
};

export const getFeaturedItems = () => {
  return createClient(clientConfig).fetch(groq`${getAllFeaturedItemsQueries}`);
};
