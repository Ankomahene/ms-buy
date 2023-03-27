export const FeaturedProductsAndCategories = {
  name: 'featuredProductsAndCategories',
  title: 'Featured',
  type: 'document',
  fields: [
    {
      name: 'topCategories',
      title: 'Top Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
    {
      name: 'mostSellingProducts',
      title: 'Most Selling Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
    },
    {
      name: 'bestDeals',
      title: 'Best Deals',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
    },
    {
      name: 'trendingProducts',
      title: 'Trending Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
    },
  ],
};
