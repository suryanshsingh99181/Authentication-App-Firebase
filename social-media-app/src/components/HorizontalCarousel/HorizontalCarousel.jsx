import React from "react";
import CarouselCard from "./CarouselCard";
import cimg0 from "../../assets/cimg0.png";
import cimg1 from "../../assets/cimg1.png";
import cimg2 from "../../assets/cimg2.png";
import cimg3 from "../../assets/cimg3.png";

const HorizontalCarousel = () => {
  return (
    <div className="overflow-x-scroll flex space-x-4 p-4">
      <CarouselCard bgimage={cimg0} />
      <CarouselCard bgimage={cimg1} />
      <CarouselCard bgimage={cimg2} />
      <CarouselCard bgimage={cimg3} />
    </div>
  );
};

export default HorizontalCarousel;
