import React, { useState } from "react";
import Currency from '../../public/images/naira.svg';
import Image from "next/image";
import { Lato, Playfair_Display } from "next/font/google";
import { useRouter } from "next/router";
import productItems from "@/data/productItems";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({ subsets: ["latin"], weight: ['400', '300', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const CartPage = () => {
  const [cartItems, setCartItemsState] = useState([]);
  const router = useRouter();

  

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const renderCartItems = () => {
    return cartItems.map((item) => (
      <div key={item.id} className="flex items-center gap-4 border-b py-4">
        <img src={item.imgSrc} alt={item.name} className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <p>{item.name}</p>
          <p className="flex gap-2 items-center"><Image src={Currency}/>{item.price.toLocaleString()}</p>
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 bg-gray-200">-</button>
            <span>{item.quantity}</span>
            <button className="px-2 py-1 bg-gray-200">+</button>
          </div>
          <p className="mt-2 flex gap-1">Total: <Image src={Currency}/>{(item.price * item.quantity).toLocaleString()}</p>
        </div>
        <button className="px-4 py-2 bg-red-500 text-white">Remove</button>
      </div>
    ));
  };

  return (
    <>
    <Navbar/>
    <div className="container bg-[#F5F5F5] mx-auto flex flex-col gap-[88px]">
      
      <div className="px-6">
        <h1 className={`flex justify-center text-2xl font-bold mb-4 ${playfair.className}`}>Your Cart</h1>
        <div className="flex flex-row gap-[72px] justify-between ">
          <div className="flex px-11 flex-col-reverse gap-[96px] bg-[#FFFFFF]">
            {productItems.slice(0,2).map((product) => (
              <div key={product.id} className="flex gap-8">
                <img
                src={product.imgSrc}
                className="object-cover w-[447px] h-[363px] rounded-2xl"
                />
                <div className="flex flex-col gap-6">
                  <div  className={`${lato.className}`}>
                    <h2 className={`${playfair.className} text-pink text-[28px] font-semibold`}>{product.name}</h2>
                    <p className="text-[18px]"><span className={`${playfair.className} text-[20px] font-medium`}>Description</span>: These elegant stud earrings feature rare gemstones, meticulously crafted to add a touch of sophistication to any outfit. Perfect for both casual and formal occasions.</p>
                  </div>
                  <div>

                  </div>
                  <button  className={`px-[18.5px] py-2 border border-secondary rounded-xl hover:text-white hover:bg-secondary duration-200 ${lato.className}`}>Remove from cart</button>
                </div>
              </div>
              
            ))}
            <div>
              
            </div>

          </div>
          <aside>
              <div className={`${lato.className} flex flex-col gap-12 bg-[#FFFFFF] px-[28px] py-[59px]`}>
                <div className="flex flex-col gap-[72px]">
                    <div>
                      <h3 className={`${playfair.className} text-pink text-[20px] font-medium `}>Enter Promo Code</h3>
                      <div className="flex gap-2">
                        <input
                        type="search"
                        placeholder="Promo code"
                        className="px-3 py-2 flex justify-start border border-[#D0D5DD] rounded-xl text-neutral text-[14px]"
                        />
                        <button className="px-[34px] py-[9.5px] bg-pink rounded-xl text-neutral text-[14px]">Apply</button>
                      </div>
                    </div>
                </div>
                <button onClick={handleCheckout} className="py-3 px-[15px] text-neutral bg-pink rounded-xl">Proceed to Checkout</button>
              </div>
          </aside>
        </div>
      </div>
      
      <Footer/>
    </div>
    
    </>

  );
};

export default CartPage;
{/* <div className="mt-4">
        <h2 className="text-xl font-bold flex gap-1">Total: <Image src={Currency}/>{calculateTotal().toLocaleString()}</h2>
        <button onClick={handleCheckout} className="mt-4 px-4 py-2 bg-green-500 text-white">Checkout</button>
      </div> */}