import { groq } from 'next-sanity';

// queries

// return only the name of products
// *[_type == 'product']{name}

// return values for multiple attributes
// *[_type == 'product']{_id, _type, name}

// category named Bags and its image url
// *[_type=='category' && name == 'Bags']{name,'image': image.asset->url}

// all products (name and price) where the price is less than 100
// *[_type=='product' && price <= 100]{name, price}

// Get all products
// Filter out the properties

const getAllProductsQueries: string = groq`
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

// You can also do object spreading as it is called in Javascript
// Get a single product using the slug
// Spreading all the properties
// Dereference the ones I want

const query: string = groq`
    *[_type == "product" && slug.current == $slug][0] {
        ...,
        "mainImage": mainImage.asset->url,
        category->{
            name,
            "id": _id,
            "image": image.asset->url
        },
        "gallery": gallery[].asset->url
    }
`;

const getAllCategoriesQueries = groq`
    *[_type == "category"] {
        "id": _id,
        name,
        "image": image.asset->url 
    }
`;

const getAllFeaturedItemsQueries = groq`
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
