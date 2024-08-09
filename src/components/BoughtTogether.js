import React from 'react';
import Image from 'next/image';
import { Lato, Playfair_Display } from "next/font/google";
import Currency from '../../public/images/naira.svg';
import Like from '../../public/images/like.svg';
import Link from "next/link";
import productItems from "@/data/productItems";

const lato = Lato({ subsets: ["latin"], weight: ['400', '300', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const UsuallyBoughtTogether = () => {
  const frequentItem = productItems.filter(product => product.id === 1 || product.id === 2 || product.id === 3 || product.id === 6);

  return (
    <div className="flex flex-col gap-4 sm:gap-10 justify-center px-4 sm:px-6 lg:px-[92px]">
      <h1 className={`${playfair.className} flex justify-center text-xl sm:text-[28px] font-semibold leading-[37.32px]`}>Usually bought together</h1>
      <div className="hidden lg:flex gap-8 justify-center">
        {frequentItem.map((product) => (
          <div key={product.id} className="flex flex-col items-center bg-beige justify-center h-fit rounded-2xl ">
            <div className="relative">
              <Image src={Like} className="absolute top-4 right-4 "/>
              <img
                src={product.imgSrc}
                alt={product.name}
                className="object-cover w-[286px] h-[229px] rounded-t-2xl "
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 bg-white py-4 w-full px-2 rounded-b-2xl ">
              <div className="flex flex-col justify-center items-center gap-1">
                <p className={`${playfair.className} text-pink font-medium text-[20px] leading-[28px]`}>{product.name}</p>
                <p className={`${lato.className} text-[18px] leading-[21px] flex gap-[3px]`}><Image src={Currency}/>{product.price.toLocaleString()}</p>
              </div>
              <button
                className="px-[18.5px] py-2 border border-secondary rounded-xl hover:text-white hover:bg-secondary duration-200"
              >
                <Link href='/cart'>Add to cart</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-container grid w-full  sm:grid-cols-4 sm:gap-6 gap-4 lg:hidden">
        {frequentItem.map((product) => (
          <div key={product.id} className="flex flex-col carousel-item items-center w-auto h-fit rounded-2xl ">
            <div className="relative">
              <Image src={Like} className="absolute top-4 right-4 "/>
              <img
                src={product.imgSrc}
                alt={product.name}
                className="object-cover w-[286px] h-[229px] rounded-t-2xl "
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 w-full bg-white py-4  px-2 rounded-b-2xl ">
              <div className="flex flex-col justify-center items-center gap-1">
                <p className={`${playfair.className} text-pink font-medium text-[20px] leading-[28px]`}>{product.name}</p>
                <p className={`${lato.className} text-[18px] leading-[21px] flex gap-[3px]`}><Image src={Currency}/>{product.price.toLocaleString()}</p>
              </div>
              <button
                className="px-[18.5px] py-2 border border-secondary rounded-xl hover:text-white hover:bg-secondary duration-200"
              >
                <Link href='/cart'>Add to cart</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsuallyBoughtTogether;
