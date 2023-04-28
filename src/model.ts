export type ItemKey = 'cart' | 'wishlist' | 'checkout';

export interface NavItem {
  label: string;
  href: string;
}

export interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: IRating;
  slug: string;
  mainImage: string;
  category: ICategory;
  gallery: string[];
}

export interface ICategory {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface IFeaturedItems {
  topCategories: ICategory[];
  bestDeals: IProduct[];
  mostSellingProducts: IProduct[];
  trendingProducts: IProduct[];
}

export interface IState {
  cart: IItem[];
  wishlist: IItem[];
  checkout: IItem[];
}

export interface IItem extends IProduct {
  count: number;
}

export interface IBreadcrumbItem {
  name: string;
  link: string;
}

export interface IContext {
  state: IState;
  addItem: (key: ItemKey, product: IProduct, count?: number) => void;
  removeItem: (key: ItemKey, productId: string) => void;
  increaseCount: (key: ItemKey, productId: string) => void;
  decreaseCount: (key: ItemKey, productId: string) => void;
  isAdded: (key: ItemKey, productId: string) => boolean;
  resetItems: (key: ItemKey) => void;
}
