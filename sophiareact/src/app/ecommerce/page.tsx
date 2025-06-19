import Card from "@/components/card/page";
import { Button } from "@/components/ui/button";
import React from "react";

const productList = [
  { id: 1, name: "T-shirt", price: 1200, img: "tshirt.avif" },
  { id: 1, name: "Coach Bag", price: 1200, img: "coach.avif" },
];

const Home = () => {
  return (
  <div>
    <h2 className=" bg-red-400  flex justify-center text-3xl font-bold mb-10 p-5 ">
        Home
      </h2>
      <div className="flex flex-row justify-center grid grid-cols-4">
    {productList.map((item,id)=>{
      return(
        <div key ={id}>
      <div >
        <Card item = {item}/>
      </div>
    </div>
      )
    })}
    </div>
  </div>
  );
};

export default Home;
