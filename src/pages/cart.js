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
    <div className="container mx-auto">
      
      <div className="px-6">
        <h1 className={`flex justify-center text-2xl font-bold mb-4 ${playfair.className}`}>Your Cart</h1>
        <div className="flex flex-row">
          <div className="flex flex-col-reverse gap-[96px]">
            {productItems.slice(0,2).map((product) => (
              <div key={product.id} className="flex">
                <img
                src={product.imgSrc}
                className="object-cover w-[447px] h-[363px]"
                />
                <div className="flex flex-col gap-6">
                  <div  className={`${lato.className}`}>
                    <h1 className={`${playfair.className}`}>{product.name}</h1>
                    <p><span className={`${playfair.className}`}>Description</span>: These elegant stud earrings feature rare gemstones, meticulously crafted to add a touch of sophistication to any outfit. Perfect for both casual and formal occasions.</p>
                  </div>
                  <div>

                  </div>
                  <button  className={`${lato.className}`}>Remove from cart</button>
                </div>
              </div>
              
            ))}
            <div>
              
            </div>
          </div>
          <aside>

          </aside>
        </div>
      </div>
      
      
    </div>
    <Footer/>
    </>

  );
};

export default CartPage;
{/* <div className="mt-4">
        <h2 className="text-xl font-bold flex gap-1">Total: <Image src={Currency}/>{calculateTotal().toLocaleString()}</h2>
        <button onClick={handleCheckout} className="mt-4 px-4 py-2 bg-green-500 text-white">Checkout</button>
      </div> */}