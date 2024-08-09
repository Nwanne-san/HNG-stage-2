import React, { useEffect, useState } from "react";
import { Lato, Playfair_Display } from "next/font/google";
import Currency from '../../public/images/naira.svg';
import Link from "next/link";
import Image from "next/image";
import Like from '../../public/images/like.svg';
import { fetchProducts } from "@/utils/api"; // Adjust the import path as needed
import { useCart } from "@/cartContext";
import toast, { Toaster } from 'react-hot-toast';

const lato = Lato({ subsets: ["latin"], weight: ['400', '300', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // Number of products per page on desktop
  const productsPerPageMobile = 10; // Number of products per page on mobile
  const { addToCart } = useCart(); // Destructure the addToCart function

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await fetchProducts();
        setProducts(items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  // Calculate the products to display based on the current page
  const indexOfLastProduct = currentPage * (typeof window !== 'undefined' && window.innerWidth < 640 ? productsPerPageMobile : productsPerPage);
  const indexOfFirstProduct = indexOfLastProduct - (typeof window !== 'undefined' && window.innerWidth < 640 ? productsPerPageMobile : productsPerPage);
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / (typeof window !== 'undefined' &&  window.innerWidth < 640 ? productsPerPageMobile : productsPerPage));

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`,{
      position: 'top-right', 
      duration: 3000,
      style: { backgroundColor: 'black', color: 'white' },
    });
  };

  return (
    <div className="w-full">
      <Toaster  />
      <div className="flex flex-row justify-around w-full gap-[104px] px-4 sm:px-8 py-[4em] ">
        <div className="hidden sm:grid justify-center lg:grid-cols-4 sm:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center bg-beige w-full h-fit rounded-2xl ">
              <div className="relative">
                <Image src={Like} className="absolute top-4 right-4 " alt="heart" />
                <Link href={`/product/${product.id}`}>
                  <img
                    src={product.image} // Adjust the default image path
                    alt={product.name}
                    className="object-cover w-[286px] h-[229px] rounded-t-2xl "
                  />
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 bg-white py-4 w-full px-2 rounded-b-2xl ">
                <div className="flex flex-col justify-center items-center gap-1">
                  <p className={`${playfair.className} text-pink font-medium text-[20px] leading-[28px]`}>{product.name}</p>
                  <p className={`${lato.className} text-[18px] leading-[21px] flex gap-[3px]`}><Image src={Currency} />{product.price}</p>
                </div>
                <button 
                  className="px-[18.5px] py-2 border border-secondary rounded-xl hover:text-white hover:bg-secondary duration-200"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-container grid w-full sm:gap-6 gap-4 sm:hidden">
          {currentProducts.map((product) => (
            <div key={product.id} className="flex flex-col carousel-item items-center w-full h-fit rounded-2xl ">
              <div className="relative">
                <Image src={Like} className="absolute top-4 right-4 " alt="heart" />
                <Link href={`/product/${product.id}`}>
                  <img
                    src={product.image} // Adjust the default image path
                    alt={product.name}
                    className="object-cover w-[286px] h-[229px] rounded-t-2xl "
                  />
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 w-[286px] bg-white py-4 px-2 rounded-b-2xl ">
                <div className="flex flex-col justify-center items-center gap-1 w-full">
                  <p className={`${playfair.className} text-pink font-medium text-[20px] leading-[28px]`}>{product.name}</p>
                  <p className={`${lato.className} text-[18px] leading-[21px] flex gap-[3px]`}><Image src={Currency} />{product.price}</p>
                </div>
                <button 
                  className="px-[18.5px] py-2 border border-secondary rounded-xl hover:text-white hover:bg-secondary duration-200"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 mx-1 border ${currentPage === index + 1 ? "bg-secondary text-white" : "bg-white text-secondary"}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
