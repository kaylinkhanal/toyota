import React from "react";

const Card = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img
          className="rounded-t-lg p-6 mx-auto h-60 object-contain"
          src="https://flowbite.com/docs/images/products/apple-watch.png"
          alt="product image"
        />
      </a>
      <div className="px-6 pb-6">
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Rs.599
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-700 transition-colors">
            + Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};



const Cards = () =>{
  return(
    <>
    <div className="flex flex-wrap justify-around">
      
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
    </div>
    </>
  )
}



export default Cards;
