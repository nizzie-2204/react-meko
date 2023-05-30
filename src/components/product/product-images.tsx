import React, { JSX, useState } from 'react';

import Product1 from '../../assets/images/product-details-1.png';
import Product2 from '../../assets/images/product-details-2.png';
import Product3 from '../../assets/images/product-details-3.png';

export const ProductImages = (): JSX.Element => {
  const images: string[] = [Product1, Product2, Product3];

  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  return (
    <div className="w-1/2 flex flex-col space-y-6">
      <div className="h-[600px] flex items-center justify-center border border-gray-300">
        <img src={selectedImage} alt="selectedImage" />
      </div>
      <div className="flex items-center space-x-5">
        {images.map((item, index) => {
          return (
            <div
              key={Date.now() + index}
              onClick={() => setSelectedImage(item)}
              className="flex-1 flex items-center justify-center border border-gray-300 cursor-pointer"
            >
              <img
                src={item}
                alt="product-${index}"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
