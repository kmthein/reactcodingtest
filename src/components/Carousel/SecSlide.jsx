import React from 'react'
import clothes from '../../assets/images/clothes.png'

const SecSlide = () => {
  return (
    <div className='h-[180px] bg-stone-800 mb-[40px] rounded-lg'>
        <div className='flex md:pt-[5%] lg:pt-0'>
            <div className='pt-[20%] sm:pt-[10px] w-[50%]'>
                <img src={clothes} className='lg:h-[170px] md:h-[100px] ml-[20px] md:ml-[50px] sm:ml-[70px]'  />
            </div>
            <div className='pt-[5%] sm:pt-0 w-[50%] text-center text-white flex items-center flex-col justify-center'>
                <h2 className='text-3xl font-semibold '>Try New Clothing</h2>
                <p>Addidas Shoes</p>
                <button className="bg-stone-900 px-4 py-1 rounded-full text-sm my-2">
              View
            </button>
            </div>
        </div>
    </div>
  )
}

export default SecSlide