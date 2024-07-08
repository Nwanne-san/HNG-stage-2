import React, { useState } from "react";
import Currency from '../../public/images/naira.svg';
import Image from "next/image";
import { Lato, Playfair_Display } from "next/font/google";
import { useRouter } from "next/router";
import productItems from "@/data/productItems";
import Link from "next/link";
import Cart from '../../public/images/cart.svg'
import Logo from '../../public/images/Logo.svg'
import Footer from "@/components/Footer";
import Like from '../../public/images/like.svg';
import MobileCart from '../../public/images/mobile-cart.svg'
import MobileLogo from '../../public/images/mobile-logo.svg'

const lato = Lato({ subsets: ["latin"], weight: ['400', '300', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const CartPage = () => {
  const [cartItems, setCartItemsState] = useState([]);
  const router = useRouter();

  const cartItem = productItems.filter(product => product.id === 2 || product.id === 13);
  const frequentItem = productItems.filter(product => product.id === 1 || product.id === 2|| product.id === 3|| product.id === 6);
  const randomItem = productItems.filter(product => product.id === 9 || product.id === 8|| product.id === 7|| product.id === 10);

  const handleCheckout = () => {
    router.push('/checkout');
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
                  <Link href='/cart' >
                    <Image src={Cart} className="w-10 h-10 hidden sm:block"/>
                    <Image src={MobileCart} className=" sm:hidden block"/>
                    <span className={`${lato.className} absolute top-[-2px] sm:top-[-4px] right-[-8px] sm:right-[-12px] flex justify-center text-[10px] sm:text-base items-center px-[6px] py-[2px] sm:px-[8.5px] sm:py-[1.5px] rounded-xl text-neutral bg-secondary `}>2</span>
                  </Link>
                </div>
        </div>
    <div className="container bg-[#F5F5F5] mx-auto flex flex-col gap-[88px]">
      
      <div className="px-6 flex flex-col gap-8 sm:gap-14">
        <h1 className={`flex justify-center text-2xl font-bold mb-4 ${playfair.className}`}>YOUR CART</h1>
        <div className="flex sm:flex-row flex-col gap-[72px] h-full justify-between ">
          <div className="flex flex-col px-8 sm:px-11 sm:py-20 rounded-3xl gap-14 sm:gap-[96px] min-w-[66%] sm:bg-[#FFFFFF]">
            {cartItem.map((product) => (
              <div key={product.id} className="flex sm:flex-row flex-col items-center sm:items-start gap-8">
                <img
                src={product.imgSrc}
                className="object-cover w-[244px] h-[199px] lg:max-w-[447px] lg:max-h-[363px] rounded-2xl"
                />
                <div className="flex flex-col gap-6 items-center">
                  <div  className={`${lato.className} sm:block flex items-center flex-col`}>
                    <h2 className={`${playfair.className} flex items-center sm:block text-pink text-[20px] sm:text-[28px] font-semibold`}>{product.name}</h2>
                    <p className="text-sm sm:text-[18px] text-center sm:text-start"><span className={`sm:${playfair.className} items-center text-sm sm:text-[20px] font-medium`}>Description</span>: These elegant stud earrings feature rare gemstones, meticulously crafted to add a touch of sophistication to any outfit. Perfect for both casual and formal occasions.</p>
                    <div className={`${playfair.className} flex flex-col gap-2`}>
                      <span >Quantity : -  1  +</span>
                      <span className={`${lato.className} flex gap-10 text-[20px] items-center`}>Price:<span className="flex text-[18px] "><Image src={Currency}/> {product.price.toLocaleString()} </span>  </span>
                      <span className={`${lato.className} flex gap-4 text-[20px] items-center`}>Subtotal:<span className="flex text-[18px]"><Image src={Currency}/> {product.price.toLocaleString()} </span>  </span>
                      
                    </div>
                  </div>
                  <div>

                  </div>
                  <div className="flex justify-start"><button  className={`px-[19px] py-[17.5px] sm:px-[18.5px] sm:py-2 border font-bold sm:font-normal border-secondary rounded-xl hover:text-white text-2xl sm:text-base hover:bg-secondary duration-200 ${lato.className}`}>Remove from cart</button></div>
                </div>
              </div>
              
            ))}
            <div>
              
            </div>

          </div>
          
              <div className={`${lato.className} flex flex-col h-full w-full rounded-3xl gap-12 bg-[#FFFFFF] px-8 py-10 text-center sm:text-start `}>
                <div className="flex flex-col gap-[48px]">
                    <div className="flex flex-col gap-4">
                      <h3 className={`${playfair.className} text-pink text-[20px] font-medium `}>Cart Total</h3>
                      <div className="flex flex-col gap-2 items-center">
                        <span className={`${lato.className} flex gap-2 text-[20px] items-center`}>Subtotal:
                          <span className="flex text-[18px] items-center"><Image src={Currency}/> 7,000 
                          </span>  
                        </span>
                        <span className={`${lato.className} flex gap-2 text-[20px] items-center`}>Shipping:
                          <span className="flex text-[18px] items-center"><Image src={Currency}/> 3,500 
                          </span>  
                        </span>
                        <span className={`${lato.className} flex gap-2 text-[20px] items-center`}>Taxes:
                          <span className="flex text-[18px] items-center"><Image src={Currency}/> 2,000 
                          </span>  
                        </span>
                      </div>
                      <span className={`${playfair.className} flex gap-2 text-[20px] text-pink items-center`}>Taxes:
                          <span className={`${lato.className} flex text-[18px] items-center text-gray`}><Image src={Currency}/> 12,500 
                          </span>  
                        </span>
                    </div>
                </div>
                <div className="flex justify-center"><button onClick={handleCheckout} className="py-3 px-[15px]  text-neutral bg-pink rounded-xl">Proceed to Checkout</button></div>
              </div>
          
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:gap-10 justify-center px-4 sm:px-[92px]">
          <h1 className={`${playfair.className} flex justify-center text-xl sm:text-[28px] font-semibold leading-[37.32px]`}>Usually bought together</h1>
          <div className="hidden sm:flex gap-8 justify-center">
            {frequentItem.map((product) =>(
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
                  Add to cart
                </button>
              </div>
            </div>
            ))}
          </div>
          <div className="carousel-container grid w-full  md:grid-cols-4 sm:gap-6 gap-4 sm:hidden">
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
      <div className="flex flex-col gap-4 sm:gap-10 justify-center px-4 sm:px-[92px]">
          <h1 className={`${playfair.className} flex justify-center text-xl sm:text-[28px] font-semibold leading-[37.32px]`}>You may also like...</h1>
          <div className="hidden sm:flex gap-8 justify-center">
            {randomItem.map((product) =>(
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
                  Add to cart
                </button>
              </div>
            </div>
            ))}
          </div>
          <div className="carousel-container grid w-full  md:grid-cols-4 sm:gap-6 gap-4 sm:hidden">
        {randomItem.map((product) => (
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
      
      <Footer/>
    </div>
    
    </>

  );
};

export default CartPage;
