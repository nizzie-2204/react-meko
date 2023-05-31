import React, { JSX, useState } from 'react';

import Product1 from '../../assets/images/carousel-image-1.webp';
import Product2 from '../../assets/images/carousel-image-2.webp';
import Product3 from '../../assets/images/carousel-image-3.webp';

const IMAGES = [Product1, Product2, Product3];

export const ProductImages = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<string>(IMAGES[0]);

  return (
    <div className="w-1/2 flex flex-col space-y-6">
      <div className="h-[600px] flex items-center justify-center border border-gray-300">
        <img src={selectedImage} alt="selectedImage" />
      </div>
      <div className="flex items-center space-x-5">
        {IMAGES.map((item, index) => {
          return (
            <div
              key={Date.now() + index}
              onClick={() => setSelectedImage(item)}
              className="flex-1 flex items-center justify-center border border-gray-300 cursor-pointer h-52 p-4"
            >
              <img
                src={item}
                alt={`product-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
