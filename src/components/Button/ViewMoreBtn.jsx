import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const ViewMoreBtn = () => {
  return (
    <>
      <button className="block mx-auto my-3 px-[65px] bg-gray-300 rounded-full text-sm py-2">
        <div className="flex items-center">View More <AiOutlineRight className="inline-block" /></div>
      </button>
    </>
  );
};

export default ViewMoreBtn;
