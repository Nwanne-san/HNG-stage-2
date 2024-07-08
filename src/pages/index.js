import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/heroSection";
import ProductSection from "@/components/productSection";
import Reviews from "@/components/reviews";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-[#F5F5F5] `}
    >
      <Navbar/>
      <HeroSection/>
      <ProductSection/>
      <Reviews/>
      <Footer/>
    </main>
  );
}
