import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import React, { JSX, useCallback, useMemo, useRef } from 'react';

import Image1 from '../assets/images/carousel-image-1.webp';
import Image2 from '../assets/images/carousel-image-2.webp';
import Image3 from '../assets/images/carousel-image-3.webp';
import Image4 from '../assets/images/carousel-image-4.webp';
import Image5 from '../assets/images/carousel-image-5.webp';
import Image6 from '../assets/images/carousel-image-6.webp';

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
];

const CONTAINER_IMAGE_WIDTH = 288;

export const Carousel = (): JSX.Element => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleMove = useCallback((isPrev?: boolean) => {
    const container = carouselRef.current;

    if (container) {
      const scrollLeft = container.scrollLeft;
      const clientWidth = container.clientWidth;
      const scrollWidth = container.scrollWidth;
      const isLastItem = scrollWidth === scrollLeft + clientWidth;
      const isFirstItem = scrollLeft === 0;

      if ((isLastItem && !isPrev) || (isFirstItem && isPrev)) return;

      const pixelPerScroll = CONTAINER_IMAGE_WIDTH + 16;

      container.scrollTo({
        top: 0,
        left:
          container.scrollLeft + (isPrev ? -pixelPerScroll : pixelPerScroll),
      });
    }
  }, []);

  const renderList = useMemo(() => {
    return images.map((item, index) => {
      return (
        <div
          key={Date.now() + index}
          className={`w-[288px] cursor-pointer shrink-0 h-96 p-4 rounded-xl border border-gray-300 flex flex-col justify-center`}
        >
          <img
            src={item}
            alt={`product-${index}`}
            className="h-full w-auto object-contain"
          />
          <div className="text-sm font-medium text-black mb-4 text-center">
            Samsung Galaxy Z Fold3 5G 3 colors in 512GB
          </div>
        </div>
      );
    });
  }, []);

  return (
    <div className="carousel my-12 mx-auto w-[1200px]">
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between">
          <div
            onClick={() => handleMove(true)}
            className=" cursor-pointer bg-gray-200 rounded-full flex items-center justify-center p-2"
          >
            <ArrowLeftIcon className="text-black w-5 h-5" />
          </div>
          <div className="text-4xl font-semibold text-red-500">Flash sale</div>
          <div
            onClick={() => handleMove(false)}
            className="cursor-pointer bg-gray-200 rounded-full flex items-center justify-center p-2"
          >
            <ArrowRightIcon className="text-black w-5 h-5" />
          </div>
        </div>
        <div
          ref={carouselRef}
          className="relative flex overflow-x-hidden gap-4 scroll-smooth border-gray-200"
        >
          {renderList}
        </div>
      </div>
    </div>
  );
};
