"use client";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: {
    items: 2.5,
  },
  568: {
    items: 4,
  },
  1024: {
    items: 7,
    itemsFit: "contain",
  },
};
const renderDotsItem = ({ isActive }: { isActive: boolean }) => {
  return isActive ? (
    <div className="h-[10px] w-[10px] bg-Primary rounded-full m-1"></div>
  ) : (
    <div className="h-[10px] w-[10px] bg-Primary bg-opacity-30 rounded-full m-1"></div>
  );
};

const Carousel = ({ items }: { items: React.ReactNode[] }) => {
  const [hydration, setHydration] = useState(false);
  useEffect(() => {
    setHydration(true);
  });
  return (
    <AliceCarousel
      responsive={hydration ? responsive : undefined}
      mouseTracking
      items={items}
      ssrSilentMode={false}
      renderDotsItem={renderDotsItem}
      disableButtonsControls={true}
      infinite
      autoPlay
      autoPlayInterval={3000}
    />
  );
};
export default Carousel;
