import React from 'react';

interface CardProps {
  image: string;
  title: string;
  price: number;
}

const Cards: React.FC<CardProps> = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 w-56 hover:shadow-xl transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
      <p className="text-green-600 font-bold text-md mb-2">${price}</p>
      <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default Cards;




