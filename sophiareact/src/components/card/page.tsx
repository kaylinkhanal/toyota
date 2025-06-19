import React from "react";
import { Button } from "../ui/button";

const Card = (props) => {
  return (
    <div className=" m-3 shadow-md mb-5 ring ring-gray-200 ">
      <img src={props.item.img} className=" w-55 h-60 p-5 rounded-xl "></img>
      <div className=" border-t-1 border-t-gray-200">
        <text className="ml-5  font-bold">{props.item.name}</text> <br></br>
        <text className="ml-5 text-red-400">{props.item.price} </text> <br></br>
        <div className="ml-4 flex items-center gap-1">
          <img src="rating.png" className="w-8 h-8" alt="Rating" />
          <span>8.5</span>
          <button className="bg-red-400 shadow-lg m-3 text text-sm rounded-md p-2 ml-18">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
