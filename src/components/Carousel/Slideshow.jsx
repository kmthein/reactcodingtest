import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import bgImg1 from "../../assets/images/bg-1.jpg";
import bgImg2 from "../../assets/images/bg-2.jpg";
import bgImg3 from "../../assets/images/bg-3.jpg";
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Slideshow = () => {
  const slides = [
    {
      url: bgImg1
    },
    {
      url: bgImg2
    },
    {
      url: bgImg3
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  } 

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 5000)
  })

  return (
    <div className="max-h-[900px] sm:w-full w-full m-auto relative group">
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-[700px] bg-center bg-cover duration-500"></div>
      <div className="hidden group-hover:block absolute top-[30%] -translate-x-0 translate-y-[50%] left-5 text-2xl px-2 py-[50px] rounded-md bg-black/20 text-white cursor-pointer">
        <BsArrowLeft size={20} onClick={prevSlide}/>
      </div>
      <div className="hidden group-hover:block absolute top-[30%] -translate-x-0 translate-y-[50%] right-5 text-2xl px-2 py-[50px] rounded-md bg-black/20 text-white cursor-pointer">
        <BsArrowRight size={20} onClick={nextSlide}/>
      </div>
      <div className="absolute top-[50%] flex justify-center flex-col w-full slide-info">
        <h3>The Best Look</h3>
        <h2>Anytime Anywhere</h2>
        <h3>Starts from 10,000 MMK</h3>
        <div className="justify-center flex">
          <button className="rounded-full bg-gray-700 py-2 px-6 mt-2">
            View
          </button>
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-xl cursor-pointer">
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
