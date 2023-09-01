import Image from 'next/image';
import React from 'react';
import ProductCard from './ProductCard';

const getData = async () => {
  const res = await fetch('https://dummyjson.com/products');

  if (!res.ok) {
    throw new Error('Failed to fecth data from api  ');
  }
  return res.json();
};

async function Products() {
  let data = await getData();
  data = data.products;
  return (
    <div className="flex gap-10 flex-wrap">
      {data?.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Products;
