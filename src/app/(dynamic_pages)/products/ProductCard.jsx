'use client';

import { ThemeContext } from '@/lib/ThemeContext/ThemeContext';
import Image from 'next/image';
import React, { useContext } from 'react';
import styles from './ProductCard.module.css';
import Link from 'next/link';

function ProductCard({ product }) {
  const { mode } = useContext(ThemeContext);

  return (
    <div
      className={`card mx-auto p-3  rounded-lg shadow-md overflow-hidden group  ${
        mode === 'dark' ? 'shadow-purple-400' : ' shadow-teal-400'
      } ${styles.card}`}
      key={product.id}
    >
      <Link href={`products/${product.id}`}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
          className=" cursor-pointer aspect-square object-contain opacity-60 group-hover:opacity-100 transition-all duration-150  ease-linear"
        />
      </Link>
      <p>{product.title}</p>
      <div className="flex justify-between items-center mt-4">
        <button
          className={`translate-y-[150%] px-8 py-2 rounded-md ${
            mode === 'dark' ? 'bg-purple-400' : ' bg-teal-400'
          }`}
        >
          Add
        </button>
        <span
          className={`p-2 opacity-90 ${
            mode === 'dark'
              ? 'bg-purple-400 text-teal-200'
              : ' bg-teal-400 text-purple-200'
          }`}
        >
          Price: {product.price}$
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
