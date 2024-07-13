import { Lato, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../public/images/Logo.svg'
import Cart from '../../public/images/cart.svg'
import Footer from "@/components/Footer";
import Currency from '../../public/images/naira.svg';
import Note from '../../public/images/note.svg'
import Right from '../../public/images/arrow.svg'
import Left from '../../public/images/left.svg'
import productItems from "@/data/productItems";
import MobileCart from '../../public/images/mobile-cart.svg'
import Down from '../../public/images/arrow-down.svg'
import { useCart } from "@/cartContext";
import React, { useState, useEffect } from "react";
import { fetchProductById } from "@/utils/axiosInstance";

const lato = Lato({ subsets: ["latin"], weight: ['400', '300', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const Checkout = () => {

    const { cartItems } = useCart(); // Assuming cartItems are provided by a context

  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const details = await Promise.all(
          cartItems.map(async (item) => {
            const product = await fetchProductById(item.id);
            return { ...product, quantity: item.quantity };
          })
        );
        setProductDetails(details);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [cartItems]);

  const calculateSubtotal = () => {
    return productDetails.reduce((sum, item) => sum + item.current_price * item.quantity, 0);
  };
    
    return(
        <>
        <div className='w-full bg-[#F5F5F5] flex justify-end items-center px-8 py-[18px]'>
            
        <div className="relative">
                  <Link href='/cart' >
                    <Image src={Cart} alt="cart logo" className="w-10 h-10 hidden sm:block"/>
                    <Image src={MobileCart} alt="mobile-cart-logo" className=" sm:hidden block"/>
                    <span className={`${lato.className} absolute top-[-2px] sm:top-[-4px] right-[-8px] sm:right-[-12px] flex justify-center text-[10px] sm:text-base items-center px-[6px] py-[2px] sm:px-[8.5px] sm:py-[1.5px] rounded-xl text-neutral bg-secondary `}>2</span>
                  </Link>
                </div>
        </div>
        <div className="flex flex-col gap-16 bg-[#F5F5F5]">
            <div className="flex flex-col gap-1">
                <h1 className={`flex justify-center text-2xl font-bold mb-4 ${playfair.className}`}>YOUR CART</h1>
                <div className={`${lato.className} flex gap-[10px] justify-center items-center`}>
                    <span className="text-[#333333]/60">Cart</span>
                    <span><Image src={Right} alt="arrow-right"/></span>
                    <span className="text-secondary">Checkout</span>
                    <span><Image src={Right} alt="arrow-right"/></span>
                    <span className="text-[#333333]/60">Confirmation</span>
                </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-[59px] sm:gap-[40px] lg:gap-[68px] sm:pl-8 sm:pr-8 lg:pr-[56px]">
                <div className="flex flex-col sm:px-4 lg:pl-12 lg:pr-20 sm:pb-10 rounded-3xl sm:bg-white">
                    <div className="flex flex-col sm:px-0 px-[25px] sm:pt-4 lg:pt-10  gap-4 justify-start">
                        <div className="flex sm:p-0 px-2 items-center justify-between">
                            <h1 className={`${playfair.className}  text-pink text-[20px] font-medium`}>SHIPPING DETAILS </h1>
                            <Image src={Down} className=" sm:hidden block items-center"/>
                        </div>
                        <hr className="text-secondary "/>
                    </div>
                    <div className={`${lato.className} flex flex-col sm:grid sm:grid-cols-2 sm:px-0 px-[25px] gap-4 sm:gap-[40px] lg:gap-[120px] pt-6 text-gray`}>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Recipient's Name:</p>
                                    <p className="text-[14px] font-normal">Jessica Omolade</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Address Line:</p>
                                    <p className="text-[14px] font-normal">12 Adetokunbo Ademola Street</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">City/State:</p>
                                    <p className="text-[14px] font-normal">Lagos</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Postal Code:</p>
                                    <p className="text-[14px] font-normal">101241</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Country:</p>
                                    <p className="text-[14px] font-normal">Nigeria</p>
                                </div>
                                
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Phone Number:</p>
                                    <p className="text-[14px] font-normal">+234 810 123 4567</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Email:</p>
                                    <p className="text-[14px] font-normal">jessica.omolade@gmail.com</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Shipping Method:</p>
                                    <p className="text-[14px] font-normal">Standard International Shipping</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Estimated Delivery Time:</p>
                                    <p className="text-[14px] font-normal">7-14 business days</p>
                                </div>
                            </div>
                        
                        
                    </div>
                    <div className="flex flex-col py-10 sm:px-0 px-[25px]  gap-4 justify-start">
                        <div className="flex sm:p-0 px-2 items-center justify-between">
                            <h1 className={`${playfair.className}  text-pink text-[20px] font-medium`}>SHIPPING DETAILS </h1>
                            <Image src={Down} className=" sm:hidden block items-center"/>
                        </div>
                        <hr className="text-secondary "/>
                    </div>
                    <div className={`${lato.className} flex flex-col w-full  gap-14 sm:gap-12`}>
                        <div className="flex flex-col gap-3 sm:px-0 px-[25px]">
                            <div className="flex flex-col gap-2">
                                <label className="text-[#333333]/60">Name on card</label>
                                <input
                                type="text"
                                value='JESSICA OMOLADE' 
                                
                                className="px-3 py-[9.5px] flex justify-start border text-gray border-[#D0D5DD] rounded-md"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[#333333]/60">Card number</label>
                                <input
                                type="text"
                                value='4101 2589 0925 8861' 
                                className="px-3 py-[9.5px] flex justify-start border text-gray border-[#D0D5DD] rounded-md"
                                />
                            </div>
                            <div className="flex gap-4 w-full justify-between">
                                <div className="flex flex-col gap-2 w-[70%] sm:w-full">
                                    <label className="text-[#333333]/60">Expiration Date</label>
                                    <input
                                    type="text"
                                    value='12/25'
                                    className="px-3 py-[9.5px] flex w-full justify-start border text-gray border-[#D0D5DD] rounded-md"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 sm:w-full">
                                    <label className="text-[#333333]/60">CVV</label>
                                    <input
                                    type="text"
                                    value='025'
                                    
                                    className="px-3 py-[9.5px] flex justify-start w-full border text-gray border-[#D0D5DD] rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-2 items-center pb-14 sm:p-0">
                                <input
                                type="checkbox" required
                                />
                                <label className="text-gray text-sm leading-[16px]">I have read and agree to the terms and conditions</label>
                            </div>
                        </div>
                        <div className="flex justify-center w-full">
                            <button className=" flex items-center justify-center sm:w-auto w-full gap-2 py-[13.5px] px-[44.5px] text-[18px] font-medium text-neutral bg-pink sm:rounded-xl fixed sm:relative bottom-0">PAY 
                                <Link href='/success' className="flex items-center">
                                    <Image src={Note} alt="naira"/> {(calculateSubtotal() + 3500 + 2000).toLocaleString()}
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <aside className="flex flex-col px-4 sm:p-0 gap-4 sm:gap-6">
                    <h1 className={`${playfair.className} text-pink text-[20px] font-medium`}>YOUR ORDER</h1>
                    <div className={`${lato.className} flex flex-col lg:pl-12 pb-8 pt-4 lg:pr-[60px] gap-4 rounded-3xl bg-white`}>
                        <div className="flex pl-12 pr-4 sm:px-3 lg:p-0 justify-between">
                            <p>{productDetails.length} items</p>
                            <span>Edit cart</span>
                        </div>
                        <hr className="text-secondary "/>
                         <div  className="flex flex-col gap-4">
                            {productDetails.map(item => (
                                <div className="flex justify-between px-8 sm:px-3 lg:p-0 gap-3 lg:gap-6 w-full">
                                <div className="flex justify-center items-center ">
                                    <img
                                    src={item.image}
                                    className="w-[78px] h-[73px] lg:w-[129px] lg:h-[120px] rounded-2xl"
                                    />
                                
                                </div>
                                <div className="flex lg:flex-row flex-col justify-center sm:justify-start lg:items-center lg:justify-between  lg:gap-[85px]">
                                    <span >{item.name}</span>
                                    <span className="flex items-center text-[18px]"><Image src={Currency}/> {item.current_price}</span>
                                </div>
                                <hr className="text-secondary "/>
                            </div>
                        ))}
                            
                            
                        </div> 
                    </div>
               
                </aside>
            </div>
            <div className="hidden sm:flex px-20 py-10 items-center ">
                <Link href='/' className="sm:flex gap-6">
                    <Image src={Left} />
                    <span className={`${lato.className} text-[18px] font-medium `}>Back to shop</span>
                </Link>
            </div>
        </div>
        </>
    )
};

export default Checkout;