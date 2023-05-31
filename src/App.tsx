import React, { JSX } from 'react';

import { Carousel } from './components/carousel';
import { ProductDesc } from './components/product/product-desc';
import { ProductImages } from './components/product/product-images';

function App(): JSX.Element {
  return (
    <div className="flex flex-col space-y-20 py-10">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-black leading-none mb-[30px] text-center">
          Single Product
        </h1>
        <div className="max-w-[1200px] mx-auto flex space-x-12">
          <ProductImages />
          <ProductDesc />
        </div>
      </div>
      <Carousel />
    </div>
  );
}

export default App;
