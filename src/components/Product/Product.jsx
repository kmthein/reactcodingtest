import React from "react";
import Card from "./Card";
import { AiOutlineRight } from "react-icons/ai";
import p1 from "../../assets/feature-product/1.jpg";
import p2 from "../../assets/feature-product/2.jpg";
import p3 from "../../assets/feature-product/3.jpg";
import p4 from "../../assets/feature-product/4.jpg";
import p5 from "../../assets/feature-product/5.jpg";
import p6 from "../../assets/feature-product/6.jpg";
import mbImg from "../../assets/images/Woman-Model-Transparent-Background.png";
import shoeImg from "../../assets/images/shoe.png";
import tshirtImg from "../../assets/images/tshirt.png";
import pantsImg from "../../assets/images/pants.png";
import NewRelease from "./NewRelease";
import ViewMoreBtn from "../Button/ViewMoreBtn";
import SecSlide from "../Carousel/SecSlide";
import ThirdSlide from "../Carousel/ThirdSlide";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const Product = () => {
  const firstSlideLeft = () => {
    var firstSlide = document.getElementById("firstSlide");
    firstSlide.scrollLeft = firstSlide.scrollLeft - 500;
  };

  const firstSlideRight = () => {
    var firstSlide = document.getElementById("firstSlide");
    firstSlide.scrollLeft = firstSlide.scrollLeft + 500;
  }

  const featuredProducts = [
    {
      image: p1,
      name: "Men Clothing",
      price: 30000,
      point: 600,
    },
    {
      image: p2,
      name: "Men Clothing",
      price: 30000,
      point: 600,
    },
    {
      image: p3,
      name: "Men Clothing",
      price: 30000,
      point: 600,
    },
    {
      image: p4,
      name: "Men Clothing",
      price: 30000,
      point: 600,
    },
    {
      image: p5,
      name: "Men Clothing",
      price: 30000,
      point: 600,
    },
    {
      image: p6,
      name: "Men Clothing",
      price: 30000,
      point: 600,
    },
  ];
  return (
    <div className="w-[90%] sm:w-[80%] mx-auto">
      <div className=" mb-[60px]">
        <div className="h-[400px]">
          <h2 className="text-3xl font-bold pt-6 text-center">Best Deals</h2>
          <p className="text-center">Just For You</p>
          <div id="firstSlide" className="flex flex-nowrap justify-between overflow-x-hidden scroll whitespace-nowrap scroll-smooth gap-2 px-2 mt-4 text-center cursor-pointer">
            {featuredProducts.map((product, id) => (
              <Card
                key={id}
                image={product.image}
                name={product.name}
                price={product.price}
                point={product.point}
              />
            ))}
          </div>
          <div className="absolute top-[800px] lg:hidden -translate-x-0 translate-y-[50%] left-[10%] text-2xl px-2 py-[50px] rounded-md bg-black/20 hover:bg-black/50 text-white cursor-pointer" onClick={firstSlideLeft}>
              <BsArrowLeft size={20}  />
            </div>
            <div className="absolute top-[800px] lg:hidden -translate-x-0 translate-y-[50%] right-[10%] text-2xl px-2 py-[50px] rounded-md bg-black/20 hover:bg-black/50 text-white cursor-pointer" onClick={firstSlideRight}>
              <BsArrowRight size={20} />
            </div>
          <ViewMoreBtn />
        </div>
      </div>

      <div className="my-5 flex flex-wrap lg:flex-nowrap gap-1">
        <div className="bg-stone-800 w-[100%] lg:w-[150%] rounded-md h-[350px] text-white relative">
          <div className="absolute mt-[20px] md:mt-[100px] ml-[5%]">
            <h2 className="text-[35px] font-semibold">Membership Program</h2>
            <p className="sm:w-full my-[20px] sm:my-0">
              Be a clothing member and get our <br />
              special exclusive offers
            </p>
            <button className="bg-stone-900 px-4 py-1 rounded-full text-sm my-2 border-inherit border">
              View
            </button>
          </div>
          <img
            src={mbImg}
            className="hidden md:inline-block lg:w-[500px] max-w-[550px] bottom-0 md:ml-[30%] lg:ml-[40%] sm:absolute "
          />
        </div>
        
        <div className="sm:w-full sm:flex sm:flex-nowrap sm:gap-1 w-full">
        <div className="bg-stone-800 w-[100%] sm:w-[20%] md:w-[50%] rounded-md h-[350px] text-white relative">
          <div className="pr-img h-[75%]">
            <img src={shoeImg} className="max-w-[200px] ml-[20%] pt-5 lg:ml-0" />
          </div>
          <div className="flex justify-between">
            <div className="ml-[10%] w-[50%]">
              <h5 className="text-lg font-semibold">Shoes</h5>
              <p className="text-sm">Find the best for price</p>
            </div>
            <div className="mr-[5%] mt-2">
              <AiOutlineRight className="cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="w-[100%] md:w-[50%] lg:w-[100%] rounded-md h-[350px] text-white relative">
          <div className="bg-stone-800 rounded-md h-[173px] my-1 sm:my-0 text-white relative group">
            <div className="pr-img flex justify-center">
              <img src={tshirtImg} className="max-w-[100px] mt-5" />
            </div>
            <div className="hidden group-hover:block">
              <div className="bg-stone-800 relative flex justify-between z-10 mt-[-40px]">
                <div className="ml-[10%] w-[50%]">
                  <h5 className="text-lg font-semibold">Shirt</h5>
                  <p className="text-sm">Variety of choices avaiable</p>
                </div>
                <div className="mr-[5%] mt-2">
                  <AiOutlineRight className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-800 rounded-md h-[173px] mt-1 text-white relative group">
            <div className="pr-img flex justify-center">
              <img src={pantsImg} className="max-w-[150px] mt-5" />
            </div>
            <div className="hidden group-hover:block">
              <div className="bg-stone-800 relative flex justify-between z-10 mt-[-70px]">
                <div className="ml-[10%] w-[50%]">
                  <h5 className="text-lg font-semibold">Pants</h5>
                  <p className="text-sm">Variety of choices avaiable</p>
                </div>
                <div className="mr-[5%] mt-2">
                  <AiOutlineRight className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>
        
      </div>
      <div className="mb-[40px]">
        <NewRelease />
      </div>
      <div class="sec-slide">
        <SecSlide />
      </div>
      <div>
        <ThirdSlide featuredProducts={featuredProducts} />
      </div>
    </div>
  );
};

export default Product;
