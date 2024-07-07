import React, { useState } from "react";
import { Lato, Playfair_Display } from "next/font/google";
import productItems from "@/data/productItems";
import Currency from '../../public/images/naira.svg';
import Link from "next/link";
import { productMaterialFilter, productNameFilter, productStyleFilter } from "@/data/productNameFilter";
import Image from "next/image";
import { useRouter } from "next/router";
const lato = Lato({ subsets: ["latin"], weight: ['400', '300', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'] });


const ProductSection = () => {
  const [nameFilters, setNameFilters] = useState(productNameFilter);
  const [styleFilters, setStyleFilters] = useState(productStyleFilter);
  const [materialFilters, setMaterialFilters] = useState(productMaterialFilter);

  const handleNameFilterChange = (id) => {
    setNameFilters(
      nameFilters.map((nameFilter) =>
        nameFilter.id === id
          ? { ...nameFilter, isChecked: !nameFilter.isChecked }
          : nameFilter
      )
    );
  };

  const handleStyleFilterChange = (id) => {
    setStyleFilters(
      styleFilters.map((styleFilter) =>
        styleFilter.id === id
          ? { ...styleFilter, isChecked: !styleFilter.isChecked }
          : styleFilter
      )
    );
  };

  const handleMaterialFilterChange = (id) => {
    setMaterialFilters(
      materialFilters.map((materialFilter) =>
        materialFilter.id === id
          ? { ...materialFilter, isChecked: !materialFilter.isChecked }
          : materialFilter
      )
    );
  };

  
  return (
    <div className="flex flex-row justify-around w-full gap-[104px] px-8 py-[4em] ">
      <div className="flex flex-col px-6 py-4 gap-10 bg-white rounded-3xl h-full">
        <div className="flex justify-center">
          <h1 className={`${playfair.className} text-pink text-[20px]`}>Filter By</h1>
        </div>
        <div className={`${lato.className} flex flex-col gap-4 leading-[21.6px] font-medium`}>
          <p>Type of jewelry</p>
          <ul id="items" className="leading-[1.8em] grid grid-cols-2 gap-3">
            {nameFilters.map((nameFilter) => (
              <li key={nameFilter.id} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id={nameFilter.name}
                  checked={nameFilter.isChecked}
                  onChange={() => handleNameFilterChange(nameFilter.id)}
                />
                <label htmlFor={nameFilter.name}>{nameFilter.name}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${lato.className} flex flex-col gap-4 leading-[21.6px] font-medium`}>
          <p>Style</p>
          <ul id="style" className="leading-[1.8em] grid grid-cols-2 gap-3">
            {styleFilters.map((styleFilter) => (
              <li key={styleFilter.id} className="flex gap-[0.2em]">
                <input
                  type="checkbox"
                  id={styleFilter.name}
                  checked={styleFilter.isChecked}
                  onChange={() => handleStyleFilterChange(styleFilter.id)}
                />
                <label htmlFor={styleFilter.name}>{styleFilter.name}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${lato.className} flex flex-col gap-4 leading-[21.6px] font-medium`}>
          <p>Material</p>
          <ul id="items" className="leading-[1.8em] grid grid-cols-2 gap-3">
            {materialFilters.map((materialFilter) => (
              <li key={materialFilter.id} className="flex gap-[0.2em]">
                <input
                  type="checkbox"
                  id={materialFilter.name}
                  checked={materialFilter.isChecked}
                  onChange={() => handleMaterialFilterChange(materialFilter.id)}
                />
                <label htmlFor={materialFilter.name}>{materialFilter.name}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${lato.className} flex flex-col gap-4 leading-[21.6px] font-medium`}>
          <p>Price</p>
          <div className="flex justify-center">
            <button className={`px-[44.5px] py-[13px] bg-pink text-white rounded-xl w-[152px] text-2xl font-medium leading-[28.8px] ${lato.className}`}>Apply</button>
          </div>
        </div>
      </div>
      <div className="grid justify-center grid-cols-3 md:grid-cols-3 gap-6">
        {productItems.map((product) => (
          <div key={product.id} className="flex flex-col items-center bg-beige w-full h-fit rounded-2xl ">
            <img
              src={product.imgSrc}
              alt={product.name}
              className="object-cover w-[286px] h-[229px] rounded-t-2xl "
            />
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
