import { useCart } from "@/cartContext";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lato, Playfair_Display } from "next/font/google";
import * as EmailJS from "@emailjs/browser";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import productItems from "@/data/productItems";
import Logo from '../../public/images/Logo.svg';
import Cart from '../../public/images/cart.svg';
import Footer from "@/components/Footer";
import Currency from '../../public/images/naira.svg';
import Note from '../../public/images/note.svg';
import Right from '../../public/images/arrow.svg';
import Left from '../../public/images/left.svg';
import MobileCart from '../../public/images/mobile-cart.svg';
import Down from '../../public/images/arrow-down.svg';

const lato = Lato({ subsets: ["latin"], weight: ["400", "300", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const Checkout = () => {
  const { cartItems } = useCart();
  const [productDetails, setProductDetails] = useState([]);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const schema = z.object({
    fullName: z.string().min(1, "Full Name is required"),
    phoneNumber: z.string().min(1, "Phone Number is required"),
    state: z.string().min(1, "State is required"),
    city: z.string().min(1, "City is required"),
    address: z.string().min(1, "Address is required"),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
    file: z.instanceof(File, "Proof of Payment is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (
        selectedFile.type === "application/pdf" ||
        selectedFile.type.startsWith("image/")
      ) {
        setFile(selectedFile);
      } else {
        alert("Please upload either an image file or a PDF.");
      }
    }
  };

  useEffect(() => {
    const details = cartItems.map((item) => {
      const product = productItems.find(p => p.id === item.id);
      return { ...product, quantity: item.quantity };
    });
    setProductDetails(details);
  }, [cartItems]);
  const calculateSubtotal = () => {
    return productDetails.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  const onSubmit = async (data) => {
    setIsLoading(true);

    const templateParams = {
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      state: data.state,
      city: data.city,
      address: data.address,
      subtotal: calculateSubtotal(),
      cartItems: productDetails.map((item) => ({
        name: item.name,
        price: item.current_price,
        quantity: item.quantity,
      })),
      file: data.file,
    };

    try {
      await EmailJS.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_USER_ID");
      setIsLoading(false);
      window.location.href = "/success"; // Redirect to the success page
    } catch (error) {
      console.error("Failed to send email:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="w-full bg-[#F5F5F5] flex justify-end items-center px-8 py-[18px]">
        <div className="relative">
          <Link href="/cart">
            <Image src={Cart} alt="cart logo" className="w-10 h-10 hidden sm:block" />
            <Image src={MobileCart} alt="mobile-cart-logo" className=" sm:hidden block" />
            <span
              className={`${lato.className} absolute top-[-2px] sm:top-[-4px] right-[-8px] sm:right-[-12px] flex justify-center text-[10px] sm:text-base items-center px-[6px] py-[2px] sm:px-[8.5px] sm:py-[1.5px] rounded-xl text-neutral bg-secondary`}
            >
              {cartItems.length}
            </span>
          </Link>
        </div>
      </div>
      <div onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-10 bg-[#F5F5F5]">
          <div className="flex flex-col gap-1">
            <h1 className={`flex justify-center text-2xl font-bold mb-4 ${playfair.className}`}>
              CHECKOUT
            </h1>
            <div className={`${lato.className} flex gap-[10px] justify-center items-center`}>
              <span className="text-[#333333]/60">Cart</span>
              <span>
                <Image src={Right} alt="arrow-right" />
              </span>
              <span className="text-secondary">Checkout</span>
              <span>
                <Image src={Right} alt="arrow-right" />
              </span>
              <span className="text-[#333333]/60">Confirmation</span>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row gap-[59px] sm:gap-[40px] lg:gap-[68px] sm:pl-8 sm:pr-8 lg:pr-[56px]">
            <form className="flex flex-col sm:px-4 lg:pl-12 lg:pr-20 sm:pb-10 rounded-3xl sm:bg-white">
              <div className="flex flex-col sm:px-0 px-[25px] sm:pt-4 lg:pt-10 gap-4 justify-start">
                <div className="flex sm:p-0 px-2 items-center justify-between">
                  <h1 className={`${playfair.className} text-pink text-[20px] font-medium`}>
                    ACCOUNT DETAILS
                  </h1>
                  <Image src={Down} alt="arrow-down" className="sm:hidden block items-center" />
                </div>
                <hr className="text-secondary" />
              </div>
              <div
                className={`${lato.className} flex flex-col sm:grid sm:grid-cols-2 sm:px-0 px-[25px] gap-4 sm:gap-[40px] lg:gap-[120px] pt-6 text-gray`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-[18px] font-medium">Account Address:</p>
                    <p className="text-[14px] font-normal">1444367108</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[18px] font-medium">Account Name:</p>
                    <p className="text-[14px] font-normal">Belle's Jewelry</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-[18px] font-medium">Bank Name:</p>
                    <p className="text-[14px] font-normal">Access Bank PLC</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[18px] font-medium">Estimated Delivery Time:</p>
                    <p className="text-[14px] font-normal">7-14 business days</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-10 sm:px-0 px-[25px] gap-4 justify-start">
                <div className="flex sm:p-0 px-2 items-center justify-between">
                  <h1 className={`${playfair.className} text-pink text-[20px] font-medium`}>
                    SHIPPING ADDRESS
                  </h1>
                  <Image src={Down} alt="arrow-down" className="sm:hidden block items-center" />
                </div>
                <hr className="text-secondary" />
                <div className={`${lato.className} flex flex-col gap-8 pt-6 text-gray`}>
                  <div className="flex flex-col gap-6">
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="Full Name"
                      className="bg-[#F5F5F5] p-2 border border-[#e0e0e0] rounded-lg"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                    )}
                    <input
                      type="text"
                      {...register("phoneNumber")}
                      placeholder="Phone Number"
                      className="bg-[#F5F5F5] p-2 border border-[#e0e0e0] rounded-lg"
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
                    )}
                    <input
                      type="text"
                      {...register("state")}
                      placeholder="State"
                      className="bg-[#F5F5F5] p-2 border border-[#e0e0e0] rounded-lg"
                    />
                    {errors.state && (
                      <p className="text-red-500 text-sm">{errors.state.message}</p>
                    )}
                    <input
                      type="text"
                      {...register("city")}
                      placeholder="City"
                      className="bg-[#F5F5F5] p-2 border border-[#e0e0e0] rounded-lg"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm">{errors.city.message}</p>
                    )}
                    <textarea
                      {...register("address")}
                      placeholder="Address"
                      className="bg-[#F5F5F5] p-2 border border-[#e0e0e0] rounded-lg resize-none"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm">{errors.address.message}</p>
                    )}
                    <label className="flex flex-col gap-2">
                      <span className="font-medium">Proof of Payment:</span>
                      <input
                        type="file"
                        {...register("file")}
                        onChange={handleFileChange}
                        accept="image/*,application/pdf"
                        className="bg-[#F5F5F5] p-2 border border-[#e0e0e0] rounded-lg"
                      />
                      {errors.file && (
                        <p className="text-red-500 text-sm">{errors.file.message}</p>
                      )}
                    </label>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        {...register("terms")}
                        className="form-checkbox h-5 w-5 text-secondary border-[#e0e0e0] rounded"
                      />
                      <span className="text-[14px] font-normal">
                        I agree to the terms and conditions
                      </span>
                    </div>
                    {errors.terms && (
                      <p className="text-red-500 text-sm">{errors.terms.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex justify-between">
                      <Link
                        href="/cart"
                        className="flex items-center gap-[5px] text-[16px] text-[#333333] font-medium"
                      >
                        <Image src={Left} alt="arrow-left" />
                        Back to Cart
                      </Link>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-secondary text-white text-[16px] font-medium rounded-lg py-2 px-4"
                      >
                        {isLoading ? "Processing..." : "Pay"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
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
                                    src={item.imgSrc}
                                    className="w-[78px] h-[73px] lg:w-[129px] lg:h-[120px] rounded-2xl"
                                    alt='product-image'
                                    />
                                </div>
                                <div className="flex lg:flex-row flex-col justify-center sm:justify-start lg:items-center lg:justify-between  lg:gap-[85px]">
                                    <span >{item.name}</span>
                                    <span className="flex items-center text-[18px]"><Image src={Currency} alt='Naira'/> {(item.price * item.quantity).toLocaleString()  }</span>
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
                    <Image src={Left} alt='arrow-left' />
                    <span className={`${lato.className} text-[18px] font-medium `}>Back to shop</span>
                </Link>
            </div>
        </div>
        </div>
        <Footer/>
        </>
  );
};

export default Checkout;
