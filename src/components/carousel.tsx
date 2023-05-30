import { JSX } from 'react';

import Image1 from '../assets/images/carousel-image-2.webp';
export const Carousel = (): JSX.Element => {
  return (
    <div className="flex flex-col bg-blue-500 max-w-[1200px]">
      <div>asd</div>
      <div className="flex overflow-x-auto w-[100px]">
        <img src={Image1} alt="ra" className="w-20" />
        <img src={Image1} alt="ra" className="w-20" />
        <img src={Image1} alt="ra" className="w-20" />
        <img src={Image1} alt="ra" className="w-20" />
        <img src={Image1} alt="ra" className="w-20" />
        <img src={Image1} alt="ra" className="w-20" />
        <img src={Image1} alt="ra" className="w-20" />
        <img src={Image1} alt="ra" className="w-20" />
        <img src={Image1} alt="ra" className="w-20" />
        <img src={Image1} alt="ra" className="w-20" />
      </div>
    </div>
  );
};
