// cart.js
import React, { useState, useEffect } from "react";
import Currency from '../../public/images/naira.svg';
import Image from "next/image";
import { Lato, Playfair_Display } from "next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";
import Cart from '../../public/images/cart.svg';
import Logo from '../../public/images/Logo.svg';
import Footer from "@/components/Footer";
import MobileCart from '../../public/images/mobile-cart.svg';
import MobileLogo from '../../public/images/mobile-logo.svg';
import { fetchProductById } from "@/utils/api";
import { useCart } from "@/cartContext";

const lato = Lato({ subsets: ["latin"], weight: ['400', '300', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const CartPage = () => { 
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const details = await Promise.all(cartItems.map(async (item) => {
        const product = await fetchProductById(item.id);
        return { ...product, quantity: item.quantity };
      }));
      setProductDetails(details);
    };
    fetchProductDetails();
  }, [cartItems]);

  const handleCheckout = () => {
    const productIds = productDetails.map(product => product.id);
    router.push({
      pathname: '/checkout',
      query: { products: productIds },
    });
  };
  

  const calculateSubtotal = () => {
    return productDetails.reduce((sum, item) => sum + item.current_price * item.quantity, 0);
  };

  const handleIncrement = (productId, quantity) => {
    updateQuantity(productId, quantity + 1);
  };

  const handleDecrement = (productId, quantity) => {
    if (quantity > 1) {
      updateQuantity(productId, quantity - 1);
    }
  };

  return (
    <>
      <div className='w-full bg-[#F5F5F5] flex justify-between items-center px-8 py-[18px]'>
        <div>
          <Link href='/'>
            <Image src={Logo} alt='logo' className='hidden sm:block' />
            <Image src={MobileLogo} alt='logo' className='sm:hidden block' />
          </Link>
        </div>
        <div className="relative">
          <Link href='/cart'>
            <Image src={Cart} alt='cart-logo' className="w-10 h-10 hidden sm:block"/>
            <Image src={MobileCart} alt='cart-logo' className="sm:hidden block"/>
            <span className={`${lato.className} absolute top-[-2px] sm:top-[-4px] right-[-8px] sm:right-[-12px] flex justify-center text-[10px] sm:text-base items-center px-[6px] py-[2px] sm:px-[8.5px] sm:py-[1.5px] rounded-xl text-neutral bg-secondary `}>{cartItems.length}</span>
          </Link>
        </div>
      </div>
      <div className="container bg-[#F5F5F5] mx-auto flex flex-col py-5 gap-[88px]">
        <div className="sm:px-6 flex flex-col gap-8 sm:gap-14">
          <h1 className={`flex justify-center text-2xl font-bold mb-4 ${playfair.className}`}>YOUR CART</h1>
          <div className="flex lg:flex-row flex-col gap-6 sm:gap-12 lg:gap-[72px] h-full justify-between">
            <div className="flex flex-col px-11 sm:px-11 sm:py-20 rounded-3xl gap-14 sm:gap-[96px] min-w-[66%] sm:bg-[#FFFFFF]">
              {productDetails.map((product) => (
                <div key={product.id} className="flex lg:flex-row flex-col items-center sm:items-start gap-6 sm:gap-8">
                  <img
                    src={product.image}
                    className="object-cover w-[244px] h-[199px] lg:w-[447px] lg:h-[363px] rounded-2xl"
                  />
                  <div className="flex flex-col gap-4 sm:gap-6 sm:items-start items-center">
                    <div className={`flex gap-4 sm:gap-6 sm:items-start items-center flex-col`}>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:block gap-2">
                          <h2 className={`${playfair.className} flex justify-center sm:justify-start items-center sm:block text-pink text-[20px] sm:text-[28px] font-semibold`}>{product.name}</h2>
                          <p className={`${lato.className} sm:hidden px-[5px] block text-sm sm:text-[18px] sm:leading-[21.6px] text-center sm:text-start`}>
                            <span className={`${lato.className} items-center text-sm sm:text-[20px] font-medium`}>Description: </span>
                            {product.description}
                          </p>
                        </div>
                        <p className={`${lato.className} hidden sm:block text-sm sm:text-[18px] sm:leading-[21.6px] sm:text-start`}>
                          <span className={`${playfair.className} items-center text-sm sm:text-[20px] font-medium`}>Description: </span>
                          {product.description}
                        </p>
                      </div>
                      <div className={`md:${playfair.className} flex flex-col gap-2`}>
                        <span className={`${playfair.className} text-xl font-medium flex gap-3`}> Quantity:
                          <button onClick={() => handleDecrement(product.id, product.quantity)}>-</button>
                          {product.quantity}
                          <button onClick={() => handleIncrement(product.id, product.quantity)}>+</button>
                        </span>
                        <p className={`${playfair.className} flex gap-10 text-xl font-medium items-center`}>Price:
                          <span className={`${lato.className} flex text-[18px]`}><Image src={Currency} alt='naira'/> {product.current_price}</span>
                        </p>
                        <p className={`${playfair.className} flex gap-4 text-xl font-medium items-center`}>Subtotal:
                          <span className={`${lato.className} flex text-[18px]`}><Image src={Currency} alt='naira'/> {(product.current_price * product.quantity)}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <button className={`px-[19px] py-[17.5px] sm:px-[18.5px] sm:py-2 border font-bold sm:font-normal border-secondary rounded-xl hover:text-white text-2xl sm:text-base hover:bg-secondary duration-200 ${lato.className}`}
                        onClick={() => removeFromCart(product.id)}>Remove from cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="flex flex-col px-11 py-7 lg:py-14 gap-20 rounded-3xl sm:bg-[#FFFFFF] h-fit mn-w-[33%]">
              <div className={`flex flex-col gap-4`}>
                <h2 className={`${playfair.className} text-pink text-2xl font-bold`}>Order Summary</h2>
                <div className="flex gap-2 items-center">
                  <p className={`${lato.className} text-xl`}>Items: </p>
                  <p className={`${lato.className} flex gap-3`}>
                    <Image src={Currency} alt='Naira' />
                    {calculateSubtotal()}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className={`${lato.className} text-xl`}>Subtotal: </p>
                  <p className={`${lato.className} flex gap-3`}>
                    <Image src={Currency} alt='Naira' />
                    {calculateSubtotal()}
                  </p>
                </div>
              </div>
              <div className={`${lato.className}`}>
                <button onClick={handleCheckout} className="py-3 px-[15px] text-neutral bg-pink rounded-xl">
                    Proceed to Checkout
                  </button>
              </div>
            </div> */}
            <div className={`${lato.className} flex flex-col h-full w-full sm:rounded-3xl gap-12 bg-[#FFFFFF] sm:px-8 py-6 sm:py-10 text-center sm:text-start`}>
              <div className="flex flex-col gap-[48px]">
                <div className="flex flex-col gap-4">
                  <h3 className={`${playfair.className} text-pink text-[20px] font-medium`}>Cart Total</h3>
                  <div className="flex flex-col gap-2 sm:items-start items-center">
                    <span className={`${lato.className} flex gap-2 text-[20px] items-center`}>Subtotal:
                      <span className="flex text-[18px] items-center"><Image src={Currency} alt='Naira'/> {calculateSubtotal()}</span>
                    </span>
                    <span className={`${lato.className} flex gap-2 text-[20px] items-center`}>Shipping:
                      <span className="flex text-[18px] items-center"><Image src={Currency} alt='Naira'/> 3,500</span>
                    </span>
                    <span className={`${lato.className} flex gap-2 text-[20px] items-center`}>Taxes:
                      <span className="flex text-[18px] items-center"><Image src={Currency} alt='Naira'/> 2,000</span>
                    </span>
                  </div>
                  <span className={`${playfair.className} flex gap-2 text-[20px] text-pink justify-center sm:justify-start items-center`}>Total:
                    <span className={`${lato.className} flex text-[18px] items-center text-gray`}><Image src={Currency} alt='Naira'/> {(calculateSubtotal() + 3500 + 2000).toLocaleString()}</span>
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <button onClick={handleCheckout} className="py-3 px-[15px] text-neutral bg-pink rounded-xl">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
};

export default CartPage;
