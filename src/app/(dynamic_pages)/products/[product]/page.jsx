import Image from 'next/image';
import React from 'react';
import ProductSlug from './ProductSlug/ProductSlug';

const getProductData = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error('failed to fetch this product');
  }

  return res.json();
};

async function Product({ params }) {
  const product = await getProductData(params.product);
  console.log(product);
  return <ProductSlug product={product} />;
}

export default Product;
