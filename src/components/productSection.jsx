import React from "react";
import { Lato, Playfair_Display } from "next/font/google";
import productItems from "@/data/productItems";
import Currency from '../../public/images/naira.svg';
import Link from "next/link";
import Image from "next/image";
import Like from '../../public/images/like.svg';
const lato = Lato({ subsets: ["latin"], weight: ['400', '300', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const ProductSection = () => { 

  return (
    <div className="flex flex-row justify-around w-full gap-[104px] px-8 py-[4em] ">
      
      <div className="grid justify-center  md:grid-rows-2 gap-8">
        {productItems.slice(0,12).map((product) => (
          <div key={product.id} className="flex flex-col items-center bg-beige w-full h-fit rounded-2xl ">
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
      
    </div>
  );
};

export default ProductSection;
