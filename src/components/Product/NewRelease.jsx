import React from "react";
import ViewMoreBtn from "../Button/ViewMoreBtn";
import yellow from "../../assets/images/yellow-shoe.png";
import pink from "../../assets/images/pink-shoe.png";
import blue from "../../assets/images/blue-shoe.png";
import green from "../../assets/images/green-shoe.png";

const NewRelease = () => {
  return (
    <div className="my-5">
      <h2 className="text-center text-3xl font-bold">
        <span className=" text-red-600">New</span> Released
      </h2>
      <p className="text-center text-sm">Try Our Latest Products Here</p>
        <div className="flex flex-nowrap gap-1 h:[65px] sm:h-[160px] text-white my-5">
        <div className="bg-amber-400 w-[100%] sm:w-[25%] rounded-lg px-3 relative">
          <div className="absolute hidden sm:block lg:w-[45%] md:w-[80%] mt-[20%] ">
            <h3 className="font-semibold md:hidden lg:block">
              New Shoe Brand With Promotions
            </h3>
            <p className="md:text-center md:ml-5 md:mt-[80%] lg:mt-0 lg:ml-0 lg:text-left">30,000 MMK</p>
          </div>
          <div className="flex justify-end">
            <img src={yellow} className="w-[150px]" />
          </div>
        </div>
        <div className="bg-rose-400 w-[100%] sm:w-[25%] rounded-lg px-3 relative">
          <div className="absolute hidden sm:block lg:w-[45%] md:w-[80%] mt-[20%] ">
            <h3 className="font-semibold md:hidden lg:block">
              New Shoe Brand With Promotions
            </h3>
            <p className="md:text-center md:ml-5 md:mt-[80%] lg:mt-0 lg:ml-0 lg:text-left">30,000 MMK</p>          </div>
          <div className="flex justify-end">
            <img src={pink} className="w-[150px]" />
          </div>
        </div>
        <div className="bg-sky-400 w-[100%] sm:w-[25%] rounded-lg px-3 relative">
          <div className="absolute hidden sm:block lg:w-[45%] md:w-[80%] mt-[20%] ">
            <h3 className="font-semibold md:hidden lg:block">
              New Shoe Brand With Promotions
            </h3>
            <p className="md:text-center md:ml-5 md:mt-[80%] lg:mt-0 lg:ml-0 lg:text-left">30,000 MMK</p>          </div>
          <div className="flex justify-end">
            <img src={blue} className="w-[150px]" />
          </div>
        </div>
        <div className="bg-lime-400 w-[100%] sm:w-[25%] rounded-lg px-3 relative">
          <div className="absolute hidden sm:block lg:w-[45%] md:w-[80%] mt-[20%] ">
            <h3 className="font-semibold md:hidden lg:block">
              New Shoe Brand With Promotions
            </h3>
            <p className="md:text-center md:ml-5 md:mt-[80%] lg:mt-0 lg:ml-0 lg:text-left">30,000 MMK</p>          </div>
          <div className="flex justify-end">
            <img src={green} className="w-[150px]" />
          </div>
      </div>
      </div>
      <ViewMoreBtn />
    </div>
  );
};

export default NewRelease;
