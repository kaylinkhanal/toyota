// pages/ecommerce/page.tsx
import React from 'react';
import Cards from '@/components/page'; // Adjust path as necessary
import { Button } from '@/components/ui/button';

const Ecom = () => {
  const products = [
    { image: 'shoes.png', title: 'Boot', price: 100 },
    { image: 'download.webp', title: 'Bag', price: 120 },
    { image: 'pants.webp', title: 'Shirt', price: 90 },
    { image: 'jacket.webp', title: 'jacket', price: 150 },
  
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Button>Click Here</Button>
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">
        🛍️ E-commerce Page
      </h1>
        
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product, index) => (
          <Cards
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
 

export default Ecom;
