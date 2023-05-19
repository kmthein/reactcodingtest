import React from 'react'
import { BsShieldLock } from 'react-icons/bs';
import { MdRefresh } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import { BsTelephone } from 'react-icons/bs'; 
import { BsFacebook } from 'react-icons/bs'; 
import { AiOutlineInstagram } from 'react-icons/ai'; 
import { FaViber } from 'react-icons/fa'; 
import { BsTelegram } from 'react-icons/bs'; 
import { BsTwitter } from 'react-icons/bs'; 
import qrCode from '../../assets/images/qrcode.jpg';
import kpay from '../../assets/images/kpay.png'
import wavepay from '../../assets/images/wavepay.png'

const Footer = () => {
  return (
    <>
    <div className='w-[80%] flex flex-wrap mx-auto pt-5'>
        <div className='w-[50%] sm:w-[25%]'>
            <h2 className='text-lg mb-3 font-semibold'>Customer Service</h2>
            <p className='text-sm mb-3'><BsShieldLock className='inline-block mr-2'/> Terms & Privacy Policy</p>
            <p className='text-sm'><MdRefresh className='inline-block mr-2'/> Return Policy</p>
        </div>
        <div className='w-[50%] sm:w-[25%]'>
            <h2 className='text-lg mb-3 font-semibold'>Language</h2>
            <div className='text-sm'>
                <div className='mb-3'>
                    <input type="radio" id='uni' name='lang'/><label> Myanmar (Unicode)</label>
                </div>
                <div className='mb-3'>
                    <input type="radio" id='zaw' name='lang'/><label> Myanmar (Zawgyi)</label>
                </div>
                <div className='mb-3'>
                    <input type="radio" id='eng' name='lang'/><label> English</label>
                </div>
            </div>
        </div>
        <div className='w-[50%] sm:w-[25%]'>
            <h2 className='text-lg mb-3 font-semibold'>Contact Us</h2>
            <div className='flex'>
                <div>
                    <SlLocationPin className='inline-block w-5 mr-2'/>
                </div>
                <div className='w-[70%]'>
                <p className='text-sm mb-3'> <span>Lay Daung Kan Main Road,Cashmere Stop,Near Zawana,Thingangyun Tsp,Yangon.</span></p>
                </div>
            </div>
            <p className='text-sm mb-3'><BsTelephone className='inline-block mr-2'/> 09458489458</p> 
        </div>
        <div className='w-[50%] sm:w-[25%]'>
            <h2 className='text-lg font-semibold'>Download Our App</h2>
            <img src={qrCode} alt="" className='w-[100px] mt-4 cursor-pointer' />
        </div>
    </div>
    <div className='w-[80%] mx-auto flex mb-[45px]'>
    <div className='w-[50%] sm:w-[25%]'>
            <h2 className='text-lg font-semibold'>Payment</h2>
            <div className='flex mt-3 gap-1'>
                <img src={kpay} alt="" />
                <img src={wavepay} alt="" />
            </div>
        </div>
        <div className='w-[50%] sm:w-[25%]'>
            <h2 className='text-lg font-semibold'>Follow Us On</h2>
            <div className='mt-3 flex gap-1'>
                <BsFacebook size={30} className='text-blue-600'/>
                <AiOutlineInstagram size={30} className='text-orange-600'/>
                <FaViber size={30} className='text-violet-700' />
                <BsTelegram size={30} className='text-blue-500' />
                <BsTwitter size={30} className='text-blue-500' />
            </div>
        </div>
    </div>
    <p className='text-sm text-center mb-5'>&copy; Copyright 2023 C by D Co.Ltd All rights reserved.</p>
    </>
  )
}

export default Footer