import React from 'react';
import Card from '@/components/card/page';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 hover:text-pink-500 transition-colors duration-300 cursor-pointer tracking-tight">
           Explore Our Latest Collection
        </h1>

        <p className="text-gray-500 mt-2">Style meets comfort — shop our bestsellers</p>
      </header>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 shadow-md rounded-lg bg-white hover:shadow-lg transition">
        <Card />
        <Card />
        <Card />
        <Card />
        <Button>Click</Button>
      </div>
    </div>
  );
};

export default Home;