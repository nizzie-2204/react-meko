import React, { JSX } from 'react';

import { Carousel } from './components/carousel';
import { ProductDesc } from './components/product/product-desc';
import { ProductImages } from './components/product/product-images';

function App(): JSX.Element {
  return (
    <div className="flex flex-col space-y-20">
      <div className="max-w-[1200px] mx-auto flex space-x-122">
        <ProductImages />
        <ProductDesc />
      </div>
      <Carousel />
    </div>
  );
}

export default App;
