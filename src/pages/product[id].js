// pages/products/[id].js
import React from "react";
import { fetchProductById, fetchProducts } from "@/utils/axiosInstance"; // Adjust the import path as needed
import Image from "next/image";
import Currency from "../../public/images/naira.svg";
import { Lato, Playfair_Display } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "300", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const ProductPage = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <img
          src={product.photos[0] || "/path/to/default-image.jpg"} // Adjust the default image path
          alt={product.name}
          className="object-cover w-full h-64 rounded-2xl"
        />
        <h1 className={`${playfair.className} text-3xl mt-4`}>{product.name}</h1>
        <p className={`${lato.className} text-xl mt-2`}>
          <Image src={Currency} /> {product.current_price[0].NGN[0].toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = await fetchProducts();

  const paths = products.items.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params }) => {
  const product = await fetchProductById(params.id);

  return {
    props: {
      product,
    },
    revalidate: 60, // Regenerate the page at most once per minute
  };
};

export default ProductPage;
