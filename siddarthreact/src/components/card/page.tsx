import React from 'react';
import { Button } from '../ui/button';

const Card = () => {
  return (
    <div className="shadow-md p-6 w-80 h-[400px] rounded-lg bg-white hover:shadow-xl transition">
  <img
    src="clothes.jpg"
    alt="Stylish Jacket"
    className="w-full h-52 object-cover rounded-md"
  />
  <h2 className="mt-4 text-xl font-bold text-gray-800">Stylish Jacket</h2>

  <div className="mt-3 flex items-center justify-between">
    <p className="text-base text-gray-600">
      Price: <span className="text-green-600 font-semibold">$20</span>
    </p>

    <Button variant="outline"> Add to Cart </Button>
  </div>
</div>

  );
};

export default Card;