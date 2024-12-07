import React from "react";
import star from "../../assets/star.svg";
import cimg1 from "../../assets/cimg1.png";

const CarouselCard = ({ bgimage }) => {
  return (
    <div className="min-w-[252px]">
      <div>
        <img src={bgimage} alt="" className="w-full h-[180px] rounded-[10px]" />
      </div>
      <div className="font-semibold text-[13px]">
        Modern Wall Decor Framed Painting
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[24px] font-semibold">$199.99</span>
        <span className="flex">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </span>
      </div>
    </div>
  );
};

export default CarouselCard;
