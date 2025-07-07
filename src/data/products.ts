
import productsData from './products.json';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const generateProducts = (isRTL: boolean): Product[] => {
  return productsData.products.map(product => ({
    id: product.id,
    name: isRTL ? product.name.ar : product.name.en,
    price: product.price,
    image: product.image,
    category: product.category,
    description: isRTL ? product.description.ar : product.description.en
  }));
};

export const getCategories = (isRTL: boolean) => {
  return Object.entries(productsData.categories).map(([key, category]) => ({
    id: key,
    name: isRTL ? category.name.ar : category.name.en
  }));
};
