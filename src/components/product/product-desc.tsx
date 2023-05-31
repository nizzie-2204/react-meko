import React, { JSX } from 'react';

export const ProductDesc = (): JSX.Element => {
  return (
    <div className="w-1/2 flex flex-col justify-start">
      <div className="text-gray-500 text-xs font-normal uppercase mb-2">
        Mobile Phones
      </div>
      <div className="text-xl font-medium text-black mb-4">
        Samsung Galaxy Z Fold3 5G 3 colors in 512GB
      </div>
      <div className="text-2xl font-500 text-red-500 mb-4">$6.99</div>
      <div className="text-gray-500 text-sm text-normal mb-1 leading-7">
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia. It is a paradisematic country, in which roasted
        parts of sentences fly into your mouth.
      </div>
      <div className="text-gray-500 text-sm text-normal mb-[30px] leading-7">
        On her way she met a copy. The copy warned the Little Blind Text, that
        where it came from it would have been rewritten a thousand times and
        everything that was left from its origin would be the word "and" and the
        Little Blind Text should turn around and return to its own, safe
        country. But nothing the copy said could convince her and so it didn’t
        take long until a few insidious Copy Writers ambushed her, made her
        drunk with Longe and Parole and dragged her into their agency, where
        they abused her for their.
      </div>
      <div className="text-sm font-normal uppercase text-gray-500 mb-[14px] inline-block">
        COLOR
      </div>
      <div className="flex space-x-4 items-center mb-[30px]">
        <div className="w-[20px] h-[20px] block rounded-full border bg-red-500 cursor-pointer" />
        <div className="w-[20px] h-[20px] block rounded-full border bg-blue-500 cursor-pointer" />
        <div className="w-[20px] h-[20px] block rounded-full border bg-yellow-500 cursor-pointer" />
        <div className="w-[20px] h-[20px] block rounded-full border bg-green-500 cursor-pointer" />
      </div>
      <button
        type="button"
        className="bg-black text-sm font-semibold text-white px-10 py-5 mr-auto mb-[30px]"
      >
        Add To Cart
      </button>
      <div className="mb-[20px] flex flex-col">
        <div className="text-[13px] text-gray-500 leading-7">
          <span className="text-black">Category :</span> Kitchen
        </div>
        <div className="text-[13px] text-gray-500 leading-7">
          <span className="text-black">Tags :</span> Beer, Foamer
        </div>
        <div className="text-[13px] text-gray-500 leading-7">
          <span className="text-black">SKU:</span> KE-91039
        </div>
      </div>
    </div>
  );
};
