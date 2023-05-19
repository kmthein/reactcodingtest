import React from "react";
import shoeImg from "../../assets/images/shoe.png";
import tshirtImg from "../../assets/images/tshirt.png";
import pantsImg from "../../assets/images/pants.png";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const ThirdSlide = ({ featuredProducts }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slide2Left = () => {
    var slider2 = document.getElementById("slider2");
    slider2.scrollLeft = slider2.scrollLeft - 500;
  }

  const slide3Left = () => {
    var slider3 = document.getElementById("slider3");
    slider3.scrollLeft = slider3.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slide2Right = () => {
    var slider2 = document.getElementById("slider2");
    slider2.scrollLeft = slider2.scrollLeft + 500;
  };
  const slide3Right = () => {
    var slider3 = document.getElementById("slider3");
    slider3.scrollLeft = slider3.scrollLeft + 500;
  };

  var slider = document.getElementById("slider");

  return (
    <>
      <div className="bg-stone-800 h-[300px] rounded-lg flex my-5 relative">
        <div className="h-[300px] w-[35%] flex items-center ml-5">
          <div>
            <img src={shoeImg} alt="" className="w-[100px] max-w-[150px] md:w-[130px] lg:w-[150px]" />
          </div>
          <div className="hidden sm:block text-white w-[120px]">
            <h5 className="text-2xl font-semibold">Shoes</h5>
            <p className="text-md">Find the best for you here!</p>
          </div>
        </div>
        <div className="w-[60%]">
          <div
            id="slider"
            className="flex flex-nowrap overflow-x-hidden scroll whitespace-nowrap scroll-smooth text-white gap-2 px-2 mt-4 text-center cursor-pointer"
          >
            {featuredProducts.map((product, id) => (
              <div className="product-box" key={id}>
                <div className="w-[150px]">
                  <img
                    src={product.image}
                    alt=""
                    className="rounded-md h-[180px] w-[700px] product-img"
                  />
                </div>
                <h4 className="mt-3">{product.name}</h4>
                <h4 className=" font-semibold">{product.price} MMK</h4>
                <p className="text-amber-500 text-sm font-semibold">
                  <AiFillStar className=" inline-block" /> {product.point}{" "}
                  Points
                </p>
              </div>
            ))}
            <div className="absolute top-[5%] -translate-x-0 translate-y-[50%] left-[40%] text-2xl px-2 py-[50px] rounded-md bg-black/20 hover:bg-black/50 text-white cursor-pointer" onClick={slideLeft}>
              <BsArrowLeft size={20}  />
            </div>
            <div className="absolute top-[5%] -translate-x-0 translate-y-[50%] right-[50px] text-2xl px-2 py-[50px] rounded-md bg-black/20 hover:bg-black/50 text-white cursor-pointer"  onClick={slideRight}>
              <BsArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-800 h-[300px] rounded-lg flex my-5 relative">
        <div className="h-[300px] w-[35%] flex items-center ml-5">
          <div>
            <img src={tshirtImg} alt="" className="w-[100px] max-w-[150px] md:w-[130px] lg:w-[150px]" />
          </div>
          <div className="hidden sm:block text-white w-[120px]">
            <h5 className="text-2xl font-semibold">T-Shirt</h5>
            <p className="text-md">Find the best for you here!</p>
          </div>
        </div>
        <div className="w-[60%]">
          <div
            id="slider2"
            className="flex flex-nowrap overflow-x-hidden scroll whitespace-nowrap scroll-smooth text-white gap-2 px-2 mt-4 text-center cursor-pointer"
          >
            {featuredProducts.map((product, id) => (
              <div className="product-box" key={id}>
                <div className="w-[150px]">
                  <img
                    src={product.image}
                    alt=""
                    className="rounded-md h-[180px] w-[700px] product-img"
                  />
                </div>
                <h4 className="mt-3">{product.name}</h4>
                <h4 className=" font-semibold">{product.price} MMK</h4>
                <p className="text-amber-500 text-sm font-semibold">
                  <AiFillStar className=" inline-block" /> {product.point}{" "}
                  Points
                </p>
              </div>
            ))}
            <div className="absolute top-[5%] -translate-x-0 translate-y-[50%] left-[40%] text-2xl px-2 py-[50px] rounded-md bg-black/20 hover:bg-black/50 text-white cursor-pointer" onClick={slide2Left}>
              <BsArrowLeft size={20}  />
            </div>
            <div className="absolute top-[5%] -translate-x-0 translate-y-[50%] right-[50px] text-2xl px-2 py-[50px] rounded-md bg-black/20 hover:bg-black/50 text-white cursor-pointer"  onClick={slide2Right}>
              <BsArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-800 h-[300px] rounded-lg flex my-5 relative">
        <div className="h-[300px] w-[35%] flex items-center ml-5">
          <div>
            <img src={pantsImg} alt="" className="w-[100px] max-w-[150px] lg:w-[150px]" />
          </div>
          <div className="hidden sm:block text-white w-[120px]">
            <h5 className="text-2xl font-semibold">Pants</h5>
            <p className="text-md">Find the best for you here!</p>
          </div>
        </div>
        <div className="w-[60%]">
          <div
            id="slider3"
            className="flex flex-nowrap overflow-x-hidden scroll whitespace-nowrap scroll-smooth text-white gap-2 px-2 mt-4 text-center cursor-pointer"
          >
            {featuredProducts.map((product, id) => (
              <div className="product-box" key={id}>
                <div className="w-[150px]">
                  <img
                    src={product.image}
                    alt=""
                    className="rounded-md h-[180px] w-[700px] product-img"
                  />
                </div>
                <h4 className="mt-3">{product.name}</h4>
                <h4 className=" font-semibold">{product.price} MMK</h4>
                <p className="text-amber-500 text-sm font-semibold">
                  <AiFillStar className=" inline-block" /> {product.point}{" "}
                  Points
                </p>
              </div>
            ))}
            <div className="absolute top-[5%] -translate-x-0 translate-y-[50%] left-[40%] text-2xl px-2 py-[50px] rounded-md bg-black/20 hover:bg-black/50 text-white cursor-pointer" onClick={slide3Left}>
              <BsArrowLeft size={20}  />
            </div>
            <div className="absolute top-[5%] -translate-x-0 translate-y-[50%] right-[50px] text-2xl px-2 py-[50px] rounded-md bg-black/20 hover:bg-black/50 text-white cursor-pointer"  onClick={slide3Right}>
              <BsArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
 
    </>
  );
};

export default ThirdSlide;
