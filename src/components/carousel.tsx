import { JSX, useCallback, useRef } from 'react';

import Image1 from '../assets/images/carousel-image-1.webp';
import Image2 from '../assets/images/carousel-image-2.webp';
import Image3 from '../assets/images/carousel-image-3.webp';
import Image4 from '../assets/images/carousel-image-4.webp';
import Image5 from '../assets/images/carousel-image-5.webp';
import Image6 from '../assets/images/carousel-image-6.webp';
export const Carousel = (): JSX.Element => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleMove = useCallback((isPrev: boolean) => {
    const container = carouselRef.current;

    console.log(container?.scrollLeft);
    console.log(container?.clientWidth);

    if (container) {
      const pixelPerScroll = container.children[0].clientWidth;

      container?.scrollTo({
        top: 0,
        left:
          container?.scrollLeft + (isPrev ? -pixelPerScroll : pixelPerScroll),
      });
    }
  }, []);
  return (
    <div className="carousel my-12 mx-auto w-[1200px]">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={() => handleMove(true)}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={() => handleMove(false)}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carouselRef}
          className="carousel-container relative flex overflow-x-scroll scroll-smooth"
        >
          <div className="w-[300px] h-40">
            <img src={Image1} alt="ra" className="h-full w-auto object-cover" />
          </div>
          <img src={Image2} alt="ra" className="w-1/4 shadow-slate-50" />
          <img src={Image3} alt="ra" className="w-1/4" />
          <img src={Image4} alt="ra" className="w-1/4" />
          <img src={Image4} alt="ra" className="w-1/4" />
          <img src={Image5} alt="ra" className="w-1/4" />
          <img src={Image6} alt="ra" className="w-1/4" />
        </div>
      </div>
    </div>
  );
};
