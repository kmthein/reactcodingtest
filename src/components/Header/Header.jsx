import React from "react";
import brandImg from "../../assets/images/brand.png";
import { BiSearch } from 'react-icons/bi';
import { RiShoppingCartFill } from 'react-icons/ri';
import { RiMenu2Fill } from 'react-icons/ri';

const Header = () => {
  return (
    <div className="block mx-auto sm:w-[80%]">
      <div className="mx-auto absolute header w-[90%] sm:w-[80%] flex justify-between">
      <div className="header_brand">
        <img src={brandImg} alt="brand" className="brand-img" />
      </div>
      <div className="header_logo flex justify-end">
        <ul>
          <li>
            <BiSearch/>
          </li>
          <li>
            <RiShoppingCartFill/>
          </li>
          <li>
            <RiMenu2Fill/>
          </li>
        </ul>
      </div>
      </div>

    </div>
    
  );
};

export default Header;
