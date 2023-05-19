import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = (props) => {
  return (
    <>
      <div className="product-box sm:w-52 w-full">
        <span className="hidden lg:inline-block absolute bg-red-600 text-white text-xs px-3 ml-[-30px] rounded-xs">
          25% Off
        </span>
        <div className="w-[170px]">
          <img
            src={props.image}
            alt=""
            className="w-[200px] rounded-md h-[180px] product-img"
          />
        </div>
        <h4 className="mt-3">{props.name}</h4>
        <h4 className=" font-semibold">{props.price} MMK</h4>
        <p className=" text-xs">
          <del>{props.price} MMK</del>
        </p>
        <p className="text-amber-500 text-sm font-semibold">
          <AiFillStar className=" inline-block" /> {props.point} Points
        </p>
      </div>
    </>
  );
};

export default Card;
